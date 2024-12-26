import duckdb from "@duckdb/node-api"
import deps from "~/deno.json" with { type: "json" }

export default () => {
  const versions = {
    feedSquid: deps.version,
    DuckDB: duckdb.version().replace("v", ""),
    Fresh: deps.imports["$fresh/"].split("@")[1].replace("/", ""),
    Deno: Deno.version.deno,
    V8: Deno.version.v8,
    Typescript: Deno.version.typescript,
  }

  return (
    <>
      <h2 class="font-black text-3xl mt-6 mb-2">Debug</h2>

      <table>
        <thead>
          <tr>
            <th class="text-left border p-1 border-slate-700">Software</th>
            <th class="text-left border p-1 border-slate-700">Version</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(versions).map(([k, v]) => (
            <tr key={k}>
              <td class="text-left border p-1 border-slate-700">{k}</td>
              <td class="text-left border p-1 border-slate-700">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
