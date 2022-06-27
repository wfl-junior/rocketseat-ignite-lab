import { CaretRight, IconProps } from "phosphor-react";

interface CardProps {
  href?: string;
  heading: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const Card: React.FC<CardProps> = ({
  heading,
  description,
  Icon,
  href = "#",
}) => (
  <a
    href={href}
    className="flex cursor-pointer items-stretch gap-6 overflow-hidden rounded bg-gray-700 transition-colors hover:bg-gray-600"
  >
    <div className="flex h-full items-center justify-center bg-green-700 p-3 sm:p-6">
      <Icon size={40} />
    </div>

    <div className="flex-1 py-3 leading-relaxed sm:py-6">
      <strong className="text-lg font-bold lg:text-2xl">{heading}</strong>

      <p className="mt-2 text-xs text-gray-200 lg:text-sm">{description}</p>
    </div>

    <div className="flex h-full items-center justify-center p-3 sm:p-6">
      <CaretRight size={24} />
    </div>
  </a>
);
