import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Header: React.FC = () => (
  <header className="flex w-full items-center justify-center border-b border-gray-600 bg-gray-700 py-5">
    <Link to="/" className="cursor-pointer">
      <Logo />
    </Link>
  </header>
);
