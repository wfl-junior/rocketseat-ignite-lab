import classNames from "classnames";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { LessonForLessonQuery } from "src/@types/api";
import { firstLessonSlug } from "src/constants";

export const Lesson: React.FC<LessonForLessonQuery> = ({
  title,
  availableAt,
  lessonType,
  slug,
}) => {
  const params = useParams<{ slug: string }>();

  const availableAtDate = new Date(availableAt);
  const isLessonAvailable = isPast(availableAtDate);

  const isActiveLesson = slug === (params.slug || firstLessonSlug);

  return (
    <Link to={`/event/lesson/${slug}`} className="group cursor-pointer">
      <span className="text-gray-300">
        {format(availableAtDate, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
          locale: ptBR,
        })}
      </span>

      <div
        className={classNames(
          "mt-2 rounded border p-4 transition-colors",
          isActiveLesson
            ? "border-green-500 bg-green-500"
            : "border-gray-500 group-hover:border-green-500",
        )}
      >
        <header className="flex items-center justify-between">
          <span
            className={classNames(
              "flex items-center gap-2 text-sm font-medium",
              isActiveLesson
                ? "text-white"
                : isLessonAvailable
                ? "text-blue-500"
                : "text-orange-500",
            )}
          >
            {isLessonAvailable ? (
              <Fragment>
                <CheckCircle size={20} />
                Conteúdo liberado
              </Fragment>
            ) : (
              <Fragment>
                <Lock size={20} />
                Em breve
              </Fragment>
            )}
          </span>

          <span
            className={classNames(
              "rounded border px-2 py-0.5 text-xs font-bold uppercase text-white",
              isActiveLesson ? "border-white" : "border-green-300",
            )}
          >
            {lessonType === "live" ? "Ao Vivo" : "Aula Prática"}
          </span>
        </header>

        <strong
          className={classNames(
            "mt-5 block font-bold",
            isActiveLesson ? "text-white" : "text-gray-200",
          )}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
