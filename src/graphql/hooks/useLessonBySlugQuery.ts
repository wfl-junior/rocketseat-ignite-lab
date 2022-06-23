import { QueryHookOptions, useQuery } from "@apollo/client";
import {
  LessonBySlugQueryVariables,
  LessonQueryResponse,
} from "src/@types/api";
import { LESSON_BY_SLUG_QUERY } from "../queries/lesson-by-slug";

export function useLessonBySlugQuery(
  options: Omit<
    QueryHookOptions<LessonQueryResponse, LessonBySlugQueryVariables>,
    "query"
  >,
) {
  return useQuery(LESSON_BY_SLUG_QUERY, options);
}
