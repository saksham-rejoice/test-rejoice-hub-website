import { gql } from "@apollo/client/core";

export const GET_CASE_STUDY_DATA = gql`
  query NewCaseStudies(
    $pagination: PaginationArg
    $filters: NewCaseStudyFiltersInput
    $sort: [String]
  ) {
    newCaseStudies(pagination: $pagination, filters: $filters, sort: $sort) {
      data {
        id
        attributes {
          caseStudyName
          image {
            data {
              attributes {
                url
              }
            }
          }
          slug
          technology_names {
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
          total
        }
      }
    }
  }
`;

export const GET_CASE_STUDY_DETAILS = gql`
  query NewCaseStudies($filters: NewCaseStudyFiltersInput) {
    newCaseStudies(filters: $filters) {
      data {
        id
        attributes {
          caseStudyName
          slug
          sortdescription
          technology_names {
            data {
              attributes {
                name
              }
            }
          }
          casestudydetails
          image {
            data {
              attributes {
                url
              }
            }
          }
          createdAt
          clienttestimonial {
            client_detail {
              description
              rating
              title
            }
            description
            title
          }
          faqs {
            description
            faq_details {
              answer
              question
              id
            }
            title
            id
          }
          SEO {
            id
            Title
            PageViewSchema
            Keywords
            Faq_Schema
            Description
            Image {
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
`;
