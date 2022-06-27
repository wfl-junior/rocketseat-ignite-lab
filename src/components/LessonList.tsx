import { Fragment } from "react";
import { defaultErrorMessage } from "src/constants";
import { useLessonsQuery } from "src/graphql/generated";
import { LessonItem } from "./LessonItem";
import { LessonItemSkeleton } from "./LessonItemSkeleton";

export const LessonList: React.FC = () => {
  const { data, error } = useLessonsQuery();

  return (
    <div className="flex flex-col gap-8">
      {!data ? (
        <Fragment>
          {error ? (
            <strong className="text-xl font-bold">{defaultErrorMessage}</strong>
          ) : (
            Array.from({ length: 6 }, (_, i) => i + 1).map((number, i) => (
              <LessonItemSkeleton key={number} active={i === 0} />
            ))
          )}
        </Fragment>
      ) : (
        data.lessons.map(lesson => <LessonItem key={lesson.id} {...lesson} />)
      )}
    </div>
  );
};
