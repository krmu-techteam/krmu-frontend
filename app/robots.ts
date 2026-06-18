import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/feed", "/tag", "/disclosure2018-2023"],
      },

      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/.well-known/ucp.json"],
      },

      {
        userAgent: "OAI-SearchBot",
        allow: ["/llms.txt", "/llms-full.txt"],
      },

      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },

      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/.well-known/ucp.json"],
      },

      {
        userAgent: "anthropic-ai",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },

      {
        userAgent: "Google-Extended",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/.well-known/ucp.json"],
      },

      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/.well-known/ucp.json"],
      },

      {
        userAgent: "Applebot-Extended",
        allow: ["/"],
      },
    ],

    sitemap: "https://www.krmangalam.edu.in/sitemap.xml",
  };
}