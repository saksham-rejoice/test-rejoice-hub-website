// app/graphql/mutations/updateCandidate.ts
import { gql } from "@apollo/client/core";

export const UPDATE_CANDIDATE = gql`
  mutation UpdateCandidateEnquiry(
    $data: CandidateEnquiryInput!
    $updateCandidateEnquiryId: ID!
  ) {
    updateCandidateEnquiry(data: $data, id: $updateCandidateEnquiryId) {
      data {
        attributes {
          CurrentSalary
          ExpectedSalary
          UserName
        }
      }
    }
  }
`;
