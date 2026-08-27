import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import appCss from "../styles.css?url";

const ogImage = `${SITE_URL}/og.jpg`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_NAME },
      {
        name: "description",
        content:
          "Level X is a premium invite-only fitness and recovery club. Train, recover and belong, Toowong now open, Queen’s Wharf and the Gold Coast next.",
      },
      { name: "apple-mobile-web-app-title", content: SITE_NAME },
      { name: "theme-color", content: "#090908" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "AU-QLD" },
      { name: "geo.placename", content: "Brisbane" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/images/favicon-x.png" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  component: () => (
    <html lang="en-AU" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Toaster
          theme="dark"
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#121110",
              color: "#f3eee4",
              border: "1px solid #26241f",
            },
          }}
        />
        <Scripts />
      </body>
    </html>
  ),
});
