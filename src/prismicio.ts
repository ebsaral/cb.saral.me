import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import { notFound } from "next/navigation";
import config from "../slicemachine.config.json";
import { PrismicDocument as Document } from "@/components/types";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */

const routes: prismic.ClientConfig["routes"] = [
  {
  	type: "post",
  	path: "/:lang?/projects/:uid",
  },
  {
  	type: "projects",
  	path: "/:lang?/projects",
  },
  {
  	type: "post",
  	path: "/:lang?/articles/:uid",
  },
  {
  	type: "articles",
  	path: "/:lang?/articles",
  },
  {
  	type: "post",
  	path: "/:lang?/stories/:uid",
  },
  {
  	type: "stories",
  	path: "/:lang?/stories",
  },
  {
  	type: "about",
  	path: "/:lang?/about",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};

export async function getDocument(document: Document, uid: string, tag: string, locale: string) {
  const client = createClient();
  const query = await client.get({
      filters: [
          prismic.filter.at(
              "document.type", document
          ),
          prismic.filter.at(
              `my.${document}.uid`, uid
          ),
          prismic.filter.at(
              "document.tags", [tag]
          )
      ],
      lang: locale
  }).catch(()=>notFound())
  return query
}