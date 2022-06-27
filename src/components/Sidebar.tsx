import { LessonList } from "./LessonList";

export const Sidebar: React.FC = () => (
  <aside className="fixed right-0 bottom-0 top-[75px] w-[348px] overflow-y-auto border-l border-gray-600 bg-gray-700 p-6">
    <span className="border-gay-500 mb-6 block border-b pb-6 text-2xl font-bold">
      Cronograma das aulas
    </span>

    <LessonList />
  </aside>
);
