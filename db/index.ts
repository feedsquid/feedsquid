import { type DuckDBConnection, DuckDBInstance } from "@duckdb/node-api"

// not using `DuckDB* | undefined` because initDB would have initialized them by
// the point they're used
export let instance: DuckDBInstance
export let connection: DuckDBConnection

export const ID_SIZE = 16

export async function initDB() {
  console.debug("initializing DB...")

  try {
    instance = await DuckDBInstance.create("feedsquid.duckdb")
    connection = await instance.connect()

    await connection.run(`CREATE TABLE IF NOT EXISTS tags (
  id     VARCHAR(${ID_SIZE}) PRIMARY KEY, -- tag nanoid
  name   TEXT NOT NULL,                   -- name of the tag
  parent VARCHAR(${ID_SIZE}),             -- nanoID of the parent tag
);`)
  } catch (err) {
    console.error(err)
    console.error("failed to initialize DB! Terminating...")
    Deno.exit(1)
  }

  console.debug("initialized DB!")
}
