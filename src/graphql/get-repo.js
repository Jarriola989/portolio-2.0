import { gql } from "@apollo/client";

export const GET_REPO = gql`
  query getRepo($repoName: String!, $owner: String!) {
    repository(name: $repoName, owner: $owner) {
      createdAt
      pushedAt
    }
  }
`;
