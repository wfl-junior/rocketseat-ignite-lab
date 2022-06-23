import { gql } from "@apollo/client";

export const LESSON_BY_SLUG_QUERY = gql`
  query LessonBySlug($slug: String!) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;
