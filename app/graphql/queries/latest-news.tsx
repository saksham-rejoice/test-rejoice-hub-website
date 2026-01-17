import { gql } from "@apollo/client/core";

export const GET_LATEST_NEWS_DATA = gql`
  query Attributes($pagination: PaginationArg) {
    latestNews(pagination: $pagination, sort: "createdAt:desc") {
      data {
        id
        attributes {
          link
          title
          auther_name
          auther_links
          slug
          auther_position
          media
          createdAt
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

export const GET_LATEST_NEWS_DETAILS = gql`
  query Query($filters: LatestnewsFiltersInput) {
    latestNews(filters: $filters) {
      data {
        attributes {
          link
          title
          content
          auther_name
          auther_links
          slug
          auther_position
          media
          createdAt
          updatedAt
          publishedAt
          SEO {
            id
            Title
            Description
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            Keywords
            PageViewSchema
          }
        }
      }
    }
  }
`;
