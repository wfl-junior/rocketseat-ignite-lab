import classNames from "classnames";

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, children }) => (
  <div className={classNames("animate-pulse bg-gray-600", className)}>
    {children}
  </div>
);
