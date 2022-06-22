import { useLessonsQuery } from "src/graphql/hooks/useLessonsQuery";
import { Lesson } from "./Lesson";

export const LessonList: React.FC = () => {
  const { data, loading, error } = useLessonsQuery();

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>error... check console</div>;
  }

  if (!data) {
    return <div>no data...</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      {data.lessons.map(lesson => (
        <Lesson key={lesson.id} {...lesson} />
      ))}
    </div>
  );
};
