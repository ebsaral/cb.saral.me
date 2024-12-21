import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string, locale: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid, locale } = await params;
  const client = createClient();
  const page = await client
    .getByUID("project_post", uid, {lang: locale})
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid, locale } = await params;
  const client = createClient();
  const page = await client
    .getByUID("project_post", uid, {lang: locale})
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("project_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}