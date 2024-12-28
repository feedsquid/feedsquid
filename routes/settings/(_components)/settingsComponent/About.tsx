import SettingsTitle from "~/routes/settings/(_components)/SettingsTitle.tsx"
import FaGithub from "@preact-icons/fa/FaGithub"

export default () => {
  return (
    <>
      <SettingsTitle>About</SettingsTitle>

      <a
        href="https://github.com/feedsquid/feedsquid"
        class="inline-block text-slate-400 hover:text-slate-100 duration-100"
        // https://stackoverflow.com/a/17711167
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={32} />
      </a>
    </>
  )
}
