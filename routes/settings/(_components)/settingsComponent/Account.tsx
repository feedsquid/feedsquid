import FaSignOutAlt from "@preact-icons/fa/FaSignOutAlt"
import SettingsTitle from "~/routes/settings/(_components)/SettingsTitle.tsx"

export default () => {
  return (
    <>
      <SettingsTitle>Account</SettingsTitle>

      <form
        method="get"
        action="/api/auth/signout"
      >
        <button
          type="submit"
          class="flex items-center justify-center h-10 px-4 rounded bg-red-500 hover:bg-red-600 active:bg-red-700"
        >
          <FaSignOutAlt /> &nbsp; Logout
        </button>
      </form>
    </>
  )
}
