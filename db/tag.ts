import type { DuckDBMaterializedResult } from "@duckdb/node-api"
import type { Result } from "~/util.ts"

import { connection, ID_SIZE } from "~/db/index.ts"
import { nanoid } from "nanoid"

export type TagID = string

/**
 * Tag data saved in DB
 */
export type Tag = {
  id: TagID
  name: string
  parent: TagID | null
}

export async function listTags(): Promise<Result<Tag[]>> {
  const queryResult = await connection.run("SELECT * FROM tags;")
  const rows = await queryResult.getRows()
  const data: Tag[] = []

  for (const [id, name, parent] of rows) {
    if (typeof id !== "string") {
      return {
        success: false,
        reason: `tag id "${id}" is not type of string`,
      }
    }

    if (typeof name !== "string") {
      return {
        success: false,
        reason: `tag name "${name}" is not type of string`,
      }
    }

    if (typeof parent !== "string" && parent !== null) {
      return {
        success: false,
        reason: `tag parent "${parent}" is not type of string or null`,
      }
    }

    data.push({ id, name, parent })
  }

  return { success: true, data }
}

export async function createTag(
  { name, parent }: Pick<Tag, "name" | "parent">,
) {
  const prepared = await connection.prepare(
    "INSERT INTO tags VALUES ($1, $2, $3);",
  )
  prepared.bindVarchar(1, nanoid(ID_SIZE))
  prepared.bindVarchar(2, name)
  if (parent === null) {
    prepared.bindNull(3)
  } else {
    prepared.bindVarchar(3, parent)
  }

  return await prepared.run()
}

export async function removeTag(
  id: Tag["id"],
): Promise<Result<DuckDBMaterializedResult>> {
  // mmm, race condition
  const directChildrenQuery = await connection.prepare(
    "SELECT * FROM tags WHERE parent = $1;",
  )
  directChildrenQuery.bindVarchar(1, id)
  const directChildren = await directChildrenQuery.run()
    .then(
      (result) => result.getRows(),
    )

  for (const [id] of directChildren) {
    if (typeof id !== "string") {
      return { success: false, reason: `tag id "${id}" is not type of string` }
    }

    await removeTag(id)
  }

  const deletionQuery = await connection.prepare(
    "DELETE FROM tags WHERE id = $1;",
  )
  deletionQuery.bindVarchar(1, id)
  const rows = await deletionQuery.run().then((result) => result.getRows())

  if (rows[0][0] === 1n) {
    return { success: true }
  }

  if (rows[0][0] === 0n) {
    return { success: false, reason: `tag with id "${id}" was not found` }
  }

  return { success: false, reason: "unknown" }
}
