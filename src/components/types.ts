export type PrismicParams = { uid: string, locale: string };
export type PrismicSingletonDocument = "projects" | "articles" | "stories" | "about";
export type PrismicDocument = "post" | PrismicSingletonDocument;
export type PrismicSingletonParams = { document: PrismicSingletonDocument, locale: string };