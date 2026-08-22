import DOMPurify from "isomorphic-dompurify";
import { transformInternalLinksInHtml } from "./utils";

export function sanitizeHTML(html: string) {
  const sanitized = DOMPurify.sanitize(html, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "frameborder",
      "scrolling",
      "src",
      "title",
    ],
  });
  return transformInternalLinksInHtml(sanitized);
}