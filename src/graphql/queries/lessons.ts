import { gql } from "@apollo/client";

export const LESSONS_QUERY = gql`
  query Lessons {
    lessons {
      id
      title
    }
  }
`;
