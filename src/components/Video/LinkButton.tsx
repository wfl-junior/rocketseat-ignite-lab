import classNames from "classnames";
import { IconProps } from "phosphor-react";

interface LinkButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href = "#",
  variant = "primary",
  children,
  Icon,
}) => (
  <a
    href={href}
    className={classNames(
      "flex cursor-pointer items-center justify-center gap-2 rounded p-4 text-sm font-bold uppercase transition-colors",
      {
        "bg-green-500 hover:bg-green-700": variant === "primary",
        "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900":
          variant === "secondary",
      },
    )}
  >
    <Icon size={24} />
    {children}
  </a>
);
