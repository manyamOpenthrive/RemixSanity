import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { stegaEnabled, projectId, dataset, studioUrl } from "./projectDetails";

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2023-03-20",
  stega: {
    enabled: stegaEnabled,
    studioUrl,
  },
});
const builder = imageUrlBuilder(client);
export function urlFor(source: Image) {
  return builder.image(source);
}

import groq from "groq"

export const POSTS_QUERY = groq`*[_type == 'blog'] | order(_createdAt desc){
            title,
            smallDescription,
            "currentSlug": slug.current,
            titleImage,
}`;

export const SLUG_QUERY = groq`
        *[_type == "blog" && slug.current == $slug]{
            "currentSlug": slug.current,
            title,
            content,
            titleImage
        }[0]
`;
