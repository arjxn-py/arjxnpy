import { SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "arjxn-py",
  author: "arjunverma",
  description: "My personal website built in Nextjs.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    github: "https://github.com/arjxn-py",
    twitter: "https://twitter.com/ArjxnPy",
    linkedin: "https://www.linkedin.com/in/arjun-verma-758608226/",
  },
};
