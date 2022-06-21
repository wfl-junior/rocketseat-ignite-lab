import { QueryHookOptions, useQuery } from "@apollo/client";
import { LessonsQueryResponse } from "src/@types/api";
import { LESSONS_QUERY } from "../queries/lessons";

export function useLessonsQuery(
  options?: Omit<QueryHookOptions<LessonsQueryResponse>, "query">,
) {
  return useQuery(LESSONS_QUERY, options);
}
