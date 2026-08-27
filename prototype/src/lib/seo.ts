import { SITE_NAME, SITE_URL } from "@/lib/site";

export function pageHead(opts: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}) {
  const path = opts.path ?? "/";
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const image = `${SITE_URL}${opts.image ?? "/og.jpg"}`;
  const title = opts.title;

  return {
    meta: [
      { title },
      { name: "description", content: opts.description },
      { property: "og:title", content: title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_AU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
