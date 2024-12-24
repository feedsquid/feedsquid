import { type PageProps } from "$fresh/server.ts"

export default ({ Component }: PageProps) => {
  return (
    <html>
      <head>
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>rBucket</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="h-screen">
        <div class="h-full bg-[#020817] text-white">
          <Component />
        </div>
      </body>
    </html>
  )
}
