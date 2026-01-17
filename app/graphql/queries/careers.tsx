import { gql } from "@apollo/client/core";

export const GET_ALL_JOB_POST = gql`
  query Data($jobDetailPagination2: PaginationArg) {
    jobDetail(pagination: $jobDetailPagination2) {
      data {
        id
        attributes {
          positionType
          requirePerson
          slug
          shortDescription
          conclusion
          bannerImage {
            data {
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
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
`;

export const GET_JOB_DETAILS = gql`
  query Data(
    $pagination: PaginationArg
    $requirementsPagination2: PaginationArg
    $whatYouWillDoPagination2: PaginationArg
    $educationalQualificationPagination2: PaginationArg
    $jobDetailPagination2: PaginationArg
    $filters: JobDetailsFiltersInput
  ) {
    jobDetail(pagination: $jobDetailPagination2, filters: $filters) {
      data {
        id
        attributes {
          positionType
          githubRequired
          requirePerson
          slug
          shortDescription
          conclusion
          bannerImage {
            data {
              attributes {
                url
              }
            }
          }
          jobType
          publishDate
          location
          experience
          workingHours
          workingDays
          salary
          vacancy
          deadline
          Requirements(pagination: $requirementsPagination2) {
            title
          }
          educationalQualification(
            pagination: $educationalQualificationPagination2
          ) {
            title
          }
          Benefits(pagination: $pagination) {
            title
          }
          What_you_will_do(pagination: $whatYouWillDoPagination2) {
            title
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
