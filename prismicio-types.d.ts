// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice =
  | DividerSlice
  | PostReferencesSlice
  | HistorySlice
  | PostListSlice
  | ImageSlice
  | ProjectMainSlice
  | HeroSlice;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

type ArticlesDocumentDataSlicesSlice =
  | PostReferencesSlice
  | ProjectMainSlice
  | DividerSlice
  | ImageSlice
  | HistorySlice
  | PostListSlice
  | HeroSlice;

/**
 * Content for Articles documents
 */
interface ArticlesDocumentData {
  /**
   * Slice Zone field in *Articles*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticlesDocumentDataSlicesSlice> /**
   * Meta Title field in *Articles*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: articles.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Articles*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: articles.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Articles*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: articles.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Articles document from Prismic
 *
 * - **API ID**: `articles`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticlesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ArticlesDocumentData>,
    "articles",
    Lang
  >;

type PostDocumentDataSlicesSlice =
  | DividerSlice
  | PostReferencesSlice
  | HistorySlice
  | ImageSlice
  | HeroSlice
  | ProjectMainSlice;

/**
 * Content for Post documents
 */
interface PostDocumentData {
  /**
   * Category field in *Post*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: projects
   * - **API ID Path**: post.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  category: prismic.SelectField<"projects" | "articles" | "stories", "filled">;

  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PostDocumentDataSlicesSlice> /**
   * Meta Title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;

type ProjectsDocumentDataSlicesSlice =
  | PostReferencesSlice
  | ImageSlice
  | ProjectMainSlice
  | DividerSlice
  | HistorySlice
  | PostListSlice
  | HeroSlice;

/**
 * Content for Projects documents
 */
interface ProjectsDocumentData {
  /**
   * Slice Zone field in *Projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice> /**
   * Meta Title field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

type StoriesDocumentDataSlicesSlice =
  | PostReferencesSlice
  | ImageSlice
  | ProjectMainSlice
  | DividerSlice
  | HistorySlice
  | PostListSlice
  | HeroSlice;

/**
 * Content for Stories documents
 */
interface StoriesDocumentData {
  /**
   * Slice Zone field in *Stories*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: stories.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<StoriesDocumentDataSlicesSlice> /**
   * Meta Title field in *Stories*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: stories.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Stories*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: stories.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Stories*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: stories.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Stories document from Prismic
 *
 * - **API ID**: `stories`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type StoriesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<StoriesDocumentData>,
    "stories",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | ArticlesDocument
  | PostDocument
  | ProjectsDocument
  | StoriesDocument;

/**
 * Primary content in *Divider → Default → Primary*
 */
export interface DividerSliceDefaultPrimary {
  /**
   * Text field in *Divider → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: divider.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Display field in *Divider → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: divider.default.primary.display
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  display: prismic.BooleanField;
}

/**
 * Default variation for Divider Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DividerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DividerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Divider*
 */
type DividerSliceVariation = DividerSliceDefault;

/**
 * Divider Shared Slice
 *
 * - **API ID**: `divider`
 * - **Description**: Divider
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DividerSlice = prismic.SharedSlice<
  "divider",
  DividerSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Display field in *Hero → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: hero.default.primary.display
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  display: prismic.BooleanField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *History → Default → Primary → Change Notes*
 */
export interface HistorySliceDefaultPrimaryChangeNotesItem {
  /**
   * Change Note field in *History → Default → Primary → Change Notes*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: history.default.primary.change_notes[].change_note
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  change_note: prismic.KeyTextField;

  /**
   * Change Date field in *History → Default → Primary → Change Notes*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: history.default.primary.change_notes[].change_date
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  change_date: prismic.TimestampField;
}

/**
 * Primary content in *History → Default → Primary*
 */
export interface HistorySliceDefaultPrimary {
  /**
   * Title field in *History → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: history.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Create Date field in *History → Default → Primary*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: history.default.primary.create_date
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  create_date: prismic.TimestampField;

  /**
   * Custom First Change Note field in *History → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: history.default.primary.custom_creation_change_note
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  custom_creation_change_note: prismic.KeyTextField;

  /**
   * Location field in *History → Default → Primary*
   *
   * - **Field Type**: GeoPoint
   * - **Placeholder**: *None*
   * - **API ID Path**: history.default.primary.location
   * - **Documentation**: https://prismic.io/docs/field#geopoint
   */
  location: prismic.GeoPointField;

  /**
   * Change Notes field in *History → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: history.default.primary.change_notes[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  change_notes: prismic.GroupField<
    Simplify<HistorySliceDefaultPrimaryChangeNotesItem>
  >;

  /**
   * Display field in *History → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: history.default.primary.display
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  display: prismic.BooleanField;
}

/**
 * Default variation for History Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HistorySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HistorySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *History*
 */
type HistorySliceVariation = HistorySliceDefault;

/**
 * History Shared Slice
 *
 * - **API ID**: `history`
 * - **Description**: History
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HistorySlice = prismic.SharedSlice<
  "history",
  HistorySliceVariation
>;

/**
 * Primary content in *Image → Default → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Display field in *Image → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: image.default.primary.display
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  display: prismic.BooleanField;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Item in *PostList → Default → Primary → Posts*
 */
export interface PostListSliceDefaultPrimaryPostsItem {
  /**
   * Post field in *PostList → Default → Primary → Posts*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: post_list.default.primary.posts[].post
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  post: prismic.ContentRelationshipField<"post">;
}

/**
 * Primary content in *PostList → Default → Primary*
 */
export interface PostListSliceDefaultPrimary {
  /**
   * Title field in *PostList → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post_list.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Posts field in *PostList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: post_list.default.primary.posts[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  posts: prismic.GroupField<Simplify<PostListSliceDefaultPrimaryPostsItem>>;

  /**
   * Display field in *PostList → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: post_list.default.primary.display
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  display: prismic.BooleanField;
}

/**
 * Default variation for PostList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PostListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PostListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PostList*
 */
type PostListSliceVariation = PostListSliceDefault;

/**
 * PostList Shared Slice
 *
 * - **API ID**: `post_list`
 * - **Description**: PostList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PostListSlice = prismic.SharedSlice<
  "post_list",
  PostListSliceVariation
>;

/**
 * Item in *PostInfo → Default → Primary → References*
 */
export interface PostReferencesSliceDefaultPrimaryReferencesItem {
  /**
   * Description field in *PostInfo → Default → Primary → References*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post_references.default.primary.references[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Link field in *PostInfo → Default → Primary → References*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: post_references.default.primary.references[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *PostInfo → Default → Primary*
 */
export interface PostReferencesSliceDefaultPrimary {
  /**
   * Title field in *PostInfo → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post_references.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * References field in *PostInfo → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: post_references.default.primary.references[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  references: prismic.GroupField<
    Simplify<PostReferencesSliceDefaultPrimaryReferencesItem>
  >;

  /**
   * Display field in *PostInfo → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: post_references.default.primary.display
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  display: prismic.BooleanField;
}

/**
 * Default variation for PostInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PostReferencesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PostReferencesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PostInfo*
 */
type PostReferencesSliceVariation = PostReferencesSliceDefault;

/**
 * PostInfo Shared Slice
 *
 * - **API ID**: `post_references`
 * - **Description**: PostReferences
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PostReferencesSlice = prismic.SharedSlice<
  "post_references",
  PostReferencesSliceVariation
>;

/**
 * Primary content in *Content → Default → Primary*
 */
export interface ProjectMainSliceDefaultPrimary {
  /**
   * Text field in *Content → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_main.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Display field in *Content → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: project_main.default.primary.display
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  display: prismic.BooleanField;
}

/**
 * Default variation for Content Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectMainSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectMainSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Content*
 */
type ProjectMainSliceVariation = ProjectMainSliceDefault;

/**
 * Content Shared Slice
 *
 * - **API ID**: `project_main`
 * - **Description**: Content
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectMainSlice = prismic.SharedSlice<
  "project_main",
  ProjectMainSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      ArticlesDocument,
      ArticlesDocumentData,
      ArticlesDocumentDataSlicesSlice,
      PostDocument,
      PostDocumentData,
      PostDocumentDataSlicesSlice,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataSlicesSlice,
      StoriesDocument,
      StoriesDocumentData,
      StoriesDocumentDataSlicesSlice,
      AllDocumentTypes,
      DividerSlice,
      DividerSliceDefaultPrimary,
      DividerSliceVariation,
      DividerSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HistorySlice,
      HistorySliceDefaultPrimaryChangeNotesItem,
      HistorySliceDefaultPrimary,
      HistorySliceVariation,
      HistorySliceDefault,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      PostListSlice,
      PostListSliceDefaultPrimaryPostsItem,
      PostListSliceDefaultPrimary,
      PostListSliceVariation,
      PostListSliceDefault,
      PostReferencesSlice,
      PostReferencesSliceDefaultPrimaryReferencesItem,
      PostReferencesSliceDefaultPrimary,
      PostReferencesSliceVariation,
      PostReferencesSliceDefault,
      ProjectMainSlice,
      ProjectMainSliceDefaultPrimary,
      ProjectMainSliceVariation,
      ProjectMainSliceDefault,
    };
  }
}
