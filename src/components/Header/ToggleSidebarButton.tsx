import { List, X } from "phosphor-react";
import { useSidebarContext } from "src/contexts/SidebarContext";

export const ToggleSidebarButton: React.FC = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  const Icon = isSidebarOpen ? X : List;

  return (
    <button
      onClick={() => setIsSidebarOpen(open => !open)}
      className="flex items-center gap-2 text-sm lg:hidden"
    >
      Aulas
      <Icon size={32} className="text-blue-500" />
    </button>
  );
};
