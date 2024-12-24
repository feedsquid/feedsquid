import { asset, Head } from "$fresh/runtime.ts"

export default () => {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src={asset("/logo.svg")}
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">
            The page you were looking for does not exist.
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  )
}
