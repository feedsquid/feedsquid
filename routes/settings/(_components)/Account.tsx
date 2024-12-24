import FaSignOutAlt from "@preact-icons/fa/FaSignOutAlt"

export default () => {
  return (
    <>
      <h2 class="font-black text-3xl mt-6 mb-2">Account</h2>

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
