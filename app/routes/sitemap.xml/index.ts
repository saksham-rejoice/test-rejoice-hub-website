import type { LoaderFunction } from "react-router-dom";
import client from "~/graphql/apolloClient";
import { GET_CASE_STUDY_DATA } from "~/graphql/queries/case-studies";
import NoCodeToolsQuery from "~/graphql/queries/no-code-tools";
import { GET_LATEST_NEWS_DATA } from "~/graphql/queries/latest-news";
import { GET_BLOGS_DATA } from "~/graphql/queries/blogs";
import GET_OPEN_SOURCE_TOOLS_DATA from "~/graphql/queries/open-source-tools";

const EXTERNAL_DATA_URL = "https://rejoicehub.com";

function createUrls(items: any[] = [], base = "") {
  return items
    .map((item: any) => {
      const slug = item?.attributes?.slug;
      if (!slug) return "";
      const dateStr = item?.attributes?.updatedAt || item?.attributes?.publishedAt || item?.attributes?.createdAt;
      const lastmod = dateStr && !isNaN(Date.parse(dateStr)) ? new Date(dateStr).toISOString() : new Date().toISOString();
      return `
  <url>
    <loc>${EXTERNAL_DATA_URL}${base ? "/" + base : ""}/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join("\n");
}

export const loader: LoaderFunction = async () => {
  const [
    caseStudyRes,
    latestNewsRes,
    blogRes,
    noCodeRes,
    openSourceRes
  ] = await Promise.all([
    client.query({
      query: GET_CASE_STUDY_DATA,
      variables: { pagination: { pageSize: 100 } },
    }),
    client.query({
      query: GET_LATEST_NEWS_DATA,
      variables: { pagination: { pageSize: 100 } },
    }),
    client.query({
      query: GET_BLOGS_DATA,
      variables: { pagination: { pageSize: 100 } },
    }),
    client.query({
      query: NoCodeToolsQuery,
      variables: { pagination: { pageSize: 100 } },
    }),
    client.query({
      query: GET_OPEN_SOURCE_TOOLS_DATA,
      variables: { pagination: { pageSize: 100 } },
    }),
  ]);

  const caseStudies = caseStudyRes?.data?.newCaseStudies?.data ?? [];
  const latestNews = latestNewsRes?.data?.latestNews?.data ?? [];
  const blogs = blogRes?.data?.rejoiceBlog?.data ?? [];
  const noCode = noCodeRes?.data?.noCodeTools?.data ?? [];
  const openSources = openSourceRes?.data?.openSources?.data ?? [];



  const staticRoutes = [
    "", "services", "case-studies", "blogs", "about", "contact-us",
    "latest-news", "no-code-tools", "open-source-tools", "career",

    "services/ai-agents-services",
    "services/generative-ai-development-services",
    "services/web-development-services",
    "services/mobile-app-development-services",
    "services/iot-development-services",
    "services/devops-consulting-services",
    "services/open-source-consulting",
    "services/ui-ux-design-services",

    "solutions/persona",
    "solutions/upwork",
    "solutions/call-agent",
    "solutions/newsletter"
  ];

  const staticUrls = staticRoutes
    .map(
      (path) => `
  <url>
    <loc>${EXTERNAL_DATA_URL}/${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n");

  const dynamicUrls = [
    createUrls(caseStudies, "case-studies"),
    createUrls(latestNews, "latest-news"),
    createUrls(blogs, "blogs"),
    createUrls(noCode, "no-code-tools"),
    createUrls(openSources, "open-source-tools"),
  ].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${dynamicUrls}
</urlset>`.trim();


  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
