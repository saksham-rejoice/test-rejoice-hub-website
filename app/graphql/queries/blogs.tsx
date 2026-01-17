import { gql } from "@apollo/client/core";

const GET_BLOGS_DATA = gql`
  query Attributes(
    $pagination: PaginationArg
    $sort: [String]
    $filters: RejoiceBlogsFiltersInput
  ) {
    rejoiceBlog(pagination: $pagination, sort: $sort, filters: $filters) {
      data {
        id
        attributes {
          readTime
          blogTitle
          autherImage {
            data {
              attributes {
                url
              }
            }
          }
          autherName
          blogDescription
          blogTitleImage {
            data {
              attributes {
                url
              }
            }
          }
          authorDetails {
            id
            Name
            autherPosition
            Followers
          }
          slug
          blogCreatedAt
          createdAt
          updatedAt
          publishedAt
          shortDescription
          blogDetail_Image {
            data {
              attributes {
                url
              }
            }
          }
          blogs_categories {
            data {
              attributes {
                name
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

const GET_BY_BLOGS_DETAILS = gql`
  query BlogDetails($filters: RejoiceBlogsFiltersInput) {
    rejoiceBlog(filters: $filters) {
      data {
        id
        attributes {
          blogCreatedAt
          blogDescription
          blogDetail_Image {
            data {
              attributes {
                url
              }
            }
          }
          autherImage {
            data {
              attributes {
                url
              }
            }
          }
          SEO {
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
          blogTitle
          blogTitleImage {
            data {
              attributes {
                url
              }
            }
          }
          authorDetails {
            authorDescription
            autherPosition
            Name
          }
          blogViews
          updatedAt
          slug
          FAQ {
            answer
            question
          }
        }
      }
    }
  }
`;

const GET_ALL_BLOGS_CATEGORIES = gql`
  query Query($pagination: PaginationArg) {
    blogsCategories(pagination: $pagination) {
      data {
        id
        attributes {
          name
          priority
          createdAt
          updatedAt
          publishedAt
        }
        id
      }
    }
  }
`;

export { GET_BLOGS_DATA, GET_BY_BLOGS_DETAILS, GET_ALL_BLOGS_CATEGORIES };
