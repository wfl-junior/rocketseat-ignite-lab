import classNames from "classnames";
import { Fragment } from "react";
import { Skeleton } from "./Skeleton";

interface LessonItemSkeletonProps {
  active: boolean;
}

export const LessonItemSkeleton: React.FC<LessonItemSkeletonProps> = ({
  active,
}) => (
  <Fragment>
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-2/3 rounded" />

      <div
        className={classNames(
          "mt-2 flex flex-col gap-4 rounded border p-4",
          active
            ? // before é a seta para a esquerda
              "relative isolate border-green-500 bg-green-500 before:absolute before:top-1/2 before:-left-2.5 before:-z-10 before:-translate-y-1/2 before:border-y-[0.625rem] before:border-r-[0.625rem] before:border-y-transparent before:border-r-green-500"
            : "border-gray-500",
        )}
      >
        <header className="flex items-center justify-between">
          {/* isLessonAvailable */}
          <div className="flex items-center gap-2">
            {/* icon */}
            <Skeleton className="aspect-square w-5 rounded-full" />

            {/* text */}
            <Skeleton className="h-4 w-16 rounded" />
          </div>

          {/* lessonType */}
          <Skeleton className="h-6 w-1/3 rounded" />
        </header>

        {/* title */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-3/4 rounded" />
        </div>
      </div>
    </div>
  </Fragment>
);
