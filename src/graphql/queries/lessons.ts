import { gql } from "@apollo/client";

export const LESSONS_QUERY = gql`
  query Lessons {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;
