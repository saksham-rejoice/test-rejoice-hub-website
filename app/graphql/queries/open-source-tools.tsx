import { gql } from "@apollo/client/core";

const GET_OPEN_SOURCE_TOOLS_DATA = gql`
  query Data(
    $filters: OpenSourceFiltersInput
    $pagination: PaginationArg
    $openSourceCategoriesPagination2: PaginationArg
  ) {
    openSources(filters: $filters, pagination: $pagination) {
      data {
        id
        attributes {
          toolName
          toolDescription
          duration
          toolImage {
            data {
              attributes {
                url
              }
            }
          }
          slug
          logo {
            data {
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
          open_source_categories(pagination: $openSourceCategoriesPagination2) {
            data {
              id
              attributes {
                categoryName
                popular
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          total
        }
      }
    }
  }
`;

export const GET_CATEGORY_DATA = gql`
  query OpenSourceCategories($pagination: PaginationArg) {
    openSourceCategories(pagination: $pagination) {
      data {
        id
        attributes {
          categoryName
          popular
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const GET_OPEN_SOURCE_TOOLS_DETAILS = gql`
  query Query($pagination: PaginationArg, $filters: OpenSourceFiltersInput) {
    openSources(filters: $filters) {
      data {
        id
        attributes {
          toolName
          toolDescription
          info
          features {
            title
            description
          }
          saasAlternatives
          benefits(pagination: $pagination) {
            title
            description
          }
          toolImage {
            data {
              attributes {
                url
              }
            }
          }
          SEO {
            Title
            Description
            Keywords
            PageViewSchema
            Faq_Schema
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          slug
          open_source_categories {
            data {
              id
              attributes {
                categoryName
                popular
                createdAt
                updatedAt
                publishedAt
              }
            }
          }
          logo {
            data {
              attributes {
                url
              }
            }
          }
          updatedAt
          publishedAt
          charges
          duration
        }
      }
    }
  }
`;
export default GET_OPEN_SOURCE_TOOLS_DATA;
