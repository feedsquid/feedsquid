import { type DuckDBConnection, DuckDBInstance } from "@duckdb/node-api"

let instance: DuckDBInstance | undefined
let connection: DuckDBConnection | undefined

const ID_SIZE = 16

export async function initDB() {
  console.debug("initializing DB...")

  try {
    instance = await DuckDBInstance.create("rbucket.duckdb")
    connection = await instance.connect()

    connection.run(`CREATE TABLE IF NOT EXISTS bookmarks (
    id     VARCHAR(${ID_SIZE}) PRIMARY KEY,        -- bookmark nanoid
    name   TEXT,                                   -- name of the bookmark
    type   UTINYINT NOT NULL,                      -- 0 if bookmark, 1 if folder
    parent VARCHAR(${ID_SIZE}),                    -- id of folder it belongs to
    url    TEXT CHECK (type = 0),                  -- URL of the bookmark
    tags   VARCHAR(${ID_SIZE})[] CHECK (type = 0), -- tag IDs
);`)
  } catch {
    console.error("failed to initialize DB! Terminating...")
    Deno.exit(1)
  }

  console.debug("initialized DB!")
}
