import classNames from "classnames";
import { useSidebarContext } from "src/contexts/SidebarContext";
import { LessonList } from "./LessonList";

export const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useSidebarContext();

  return (
    <aside
      className={classNames(
        "fixed right-0 bottom-0 top-[75px] z-[100] w-[348px] max-w-full translate-x-full overflow-y-auto border-l border-gray-600 bg-gray-700 p-6 transition-transform duration-300 lg:translate-x-0",
        {
          "translate-x-0": isSidebarOpen,
        },
      )}
    >
      <span className="border-gay-500 mb-6 block border-b pb-6 text-2xl font-bold">
        Cronograma das aulas
      </span>

      <LessonList />
    </aside>
  );
};
