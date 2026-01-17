import { gql } from "@apollo/client/core";

const NoCodeToolsQuery = gql`
  query NoCodeTools(
    $pagination: PaginationArg
    $filters: NoCodeToolFiltersInput
    $sort: [String]
  ) {
    noCodeTools(pagination: $pagination, filters: $filters, sort: $sort) {
      data {
        id
        attributes {
          toolName
          logo {
            data {
              id
              attributes {
                url
              }
            }
          }
          shortDescription
          slug
          createdAt
          updatedAt
          publishedAt
          tool_url
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

export const GET_NOCODE_TOOL_CATEGORY = gql`
  query Query(
    $pagination: PaginationArg
    $filters: NoCodeToolCategoryFiltersInput
  ) {
    noCodeToolCategories(pagination: $pagination, filters: $filters) {
      data {
        id
        attributes {
          name
          createdAt
          updatedAt
          publishedAt
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

export const GET_NOCODE_TOOL_DETAILS = gql`
  query NoCodeTools($filters: NoCodeToolFiltersInput) {
    noCodeTools(filters: $filters) {
      data {
        attributes {
          toolName
          shortDescription
          info
          useCases
          tool_overall_rating
          tool_overall_rating_description
          ease_of_use
          tool_url
          logo {
            data {
              attributes {
                url
              }
            }
          }
          toolImages {
            data {
              attributes {
                url
              }
            }
          }
          ratingChart {
            comment
            rating
          }
          no_code_tool_categories {
            data {
              id
              attributes {
                name
              }
            }
          }
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
          similar_tools {
            data {
              attributes {
                toolName
                shortDescription
                slug
                logo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default NoCodeToolsQuery;
