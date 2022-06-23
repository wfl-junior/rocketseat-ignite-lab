import classNames from "classnames";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { LessonForLessonQuery } from "src/@types/api";

export const Lesson: React.FC<LessonForLessonQuery> = ({
  title,
  availableAt,
  lessonType,
  slug,
}) => {
  const availableAtDate = new Date(availableAt);
  const isLessonAvailable = isPast(availableAtDate);

  return (
    <Link to={`/event/lesson/${slug}`} className="group cursor-pointer">
      <span className="text-gray-300">
        {format(availableAtDate, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
          locale: ptBR,
        })}
      </span>

      <div className="mt-2 rounded border border-gray-500 p-4 transition-colors group-hover:border-green-500">
        <header className="flex items-center justify-between">
          <span
            className={classNames(
              "flex items-center gap-2 text-sm font-medium",
              isLessonAvailable ? "text-blue-500" : "text-orange-500",
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

          <span className="rounded border border-green-300 px-2 py-0.5 text-xs font-bold uppercase text-white">
            {lessonType === "live" ? "Ao Vivo" : "Aula Prática"}
          </span>
        </header>

        <strong className="mt-5 block font-bold text-gray-200">{title}</strong>
      </div>
    </Link>
  );
};
