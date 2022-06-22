import { LessonList } from "./LessonList";

export const Sidebar: React.FC = () => (
  <aside className="w-[348px] border-l border-gray-600 bg-gray-700 p-6">
    <span className="border-gay-500 mb-6 block border-b pb-6 text-2xl font-bold">
      Cronograma das aulas
    </span>

    <LessonList />
  </aside>
);
