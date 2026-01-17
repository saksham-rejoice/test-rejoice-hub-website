
import { MetaFunction, LoaderFunctionArgs, useLoaderData, redirect } from 'react-router-dom';
import { blogDescriptionMeta,blogTitleMeta } from '~/constant/serviceMetaData';
import client from '~/graphql/apolloClient';
import { GET_BY_BLOGS_DETAILS } from '~/graphql/queries/blogs';
import BlogDetailsMainSection from '~/sections/blogs/BlogDetailsMainSection';
import { WEB_URL } from '~/utils/config';




export const meta: MetaFunction = ({ data }) => {
  const blog = data as any;

  if (!blog) {
    return [
      { title: "Blog not found" },
      {
        name: "description",
        content: "No blog found for this slug.",
      },
    ];
  }

  const slug = blog.attributes?.slug ?? "";

  const title =
      blogTitleMeta[slug] ||
    blog.attributes?.SEO?.Title ||
    "Blog Details";

  const description =
  blogDescriptionMeta[slug] ||
    blog.attributes?.SEO?.Description ||
    "Read our latest blog post.";

  return [
    { title },
    { name: "description", content: description },
    {
      tagName: "link",
      rel: "canonical",
      href: `${WEB_URL}/blogs/${slug}`},
  ];
};


export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;

  const { data } = await client.query({
    query: GET_BY_BLOGS_DETAILS,
    variables: {
      filters: {
        slug: { eq: slug },
      },
      pagination: { limit: 1 },
    },
    fetchPolicy: 'network-only',
  });

  const blog = data?.rejoiceBlog?.data?.[0];

  if (!blog) {
    return redirect("/");
  }

  return blog;
}

export default function BlogDetailPage() {
  const blog = useLoaderData() as any;

  return (
    <div className="">
      <BlogDetailsMainSection blog={blog.attributes} />
    </div>
  );
}