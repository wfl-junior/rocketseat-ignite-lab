import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { defaultErrorMessage, firstLessonSlug } from "src/constants";
import { useLessonBySlugQuery } from "src/graphql/generated";
import { Footer } from "../Footer";
import { Skeleton } from "../Skeleton";
import { Card } from "./Card";
import { LinkButton } from "./LinkButton";

export type EventParams = {
  slug: string;
};

export const Video: React.FC = () => {
  const { slug } = useParams<EventParams>();
  const { data, error } = useLessonBySlugQuery({
    variables: {
      slug: slug || firstLessonSlug,
    },
  });

  return (
    <Fragment>
      <div className="flex items-center justify-center bg-black">
        {/* video */}
        <div className="aspect-video h-full max-h-[60vh] w-full max-w-[1100px]">
          {!data ? (
            <Skeleton className="h-full w-full" />
          ) : (
            <Player>
              <Youtube videoId={data.lesson!.videoId} />
              <DefaultUi />
            </Player>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] p-8">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            {!data ? (
              <div className="flex flex-col gap-4">
                {error ? (
                  <strong className="text-2xl font-bold">
                    {defaultErrorMessage}
                  </strong>
                ) : (
                  <Skeleton className="h-7 w-full rounded" />
                )}

                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-3/4 rounded" />
                </div>
              </div>
            ) : (
              <Fragment>
                {/* title */}
                <h1 className="text-2xl font-bold">{data.lesson?.title}</h1>

                {/* description */}
                <p className="mt-4 leading-relaxed text-gray-200">
                  {data.lesson?.description}
                </p>
              </Fragment>
            )}

            {!data ? (
              <Fragment>
                <div className="mt-6 flex items-center gap-4">
                  {/* teacher avatar */}
                  <Skeleton className="aspect-square h-16 rounded-full border-2 border-blue-500" />

                  {/* teacher info */}
                  <div className="flex w-full flex-col gap-2">
                    <Skeleton className="h-7 w-1/3 rounded" />
                    <Skeleton className="h-3 w-1/2 rounded" />
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                {data.lesson?.teacher && (
                  <div className="mt-6 flex items-center gap-4">
                    {/* teacher avatar */}
                    <img
                      src={data.lesson.teacher.avatarURL}
                      alt="Teacher avatar"
                      className="aspect-square h-16 rounded-full border-2 border-blue-500"
                    />

                    {/* teacher info */}
                    <div className="leading-relaxed">
                      <strong className="block text-2xl font-bold">
                        {data.lesson.teacher.name}
                      </strong>

                      <span className="block text-sm text-gray-200">
                        {data.lesson.teacher.bio}
                      </span>
                    </div>
                  </div>
                )}
              </Fragment>
            )}
          </div>

          {/* buttons */}
          <div className="flex flex-col gap-4">
            <LinkButton Icon={DiscordLogo}>Comunidade do Discord</LinkButton>

            <LinkButton variant="secondary" Icon={Lightning}>
              Acesse o Desafio
            </LinkButton>
          </div>
        </div>

        {/* cards */}
        <div className="mt-20 grid grid-cols-2 gap-8">
          <Card
            heading="Material complementar"
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            Icon={FileArrowDown}
          />

          <Card
            heading="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            Icon={Image}
          />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};
