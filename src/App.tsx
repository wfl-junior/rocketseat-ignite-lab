import { useLessonsQuery } from "./graphql/hooks/useLessonsQuery";

export const App: React.FC = () => {
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
    <div>
      <h1 className="text-3xl font-medium">Lessons</h1>

      <ul>
        {data.lessons.map(lesson => (
          <li key={lesson.id} className="text-xl font-medium">
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
