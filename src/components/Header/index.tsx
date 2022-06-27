import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { ToggleSidebarButton } from "./ToggleSidebarButton";

export const Header: React.FC = () => (
  <header className="sticky top-0 z-[100] flex h-[75px] w-full items-center justify-between border-b border-gray-600 bg-gray-700 px-6 lg:justify-center">
    <Link to="/" className="cursor-pointer">
      <Logo />
    </Link>

    <ToggleSidebarButton />
  </header>
);
