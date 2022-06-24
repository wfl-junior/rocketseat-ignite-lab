import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { firstLessonSlug } from "src/constants";
import { useLessonBySlugQuery } from "src/graphql/hooks/useLessonBySlugQuery";
import { RocketseatLogo } from "../RocketseatLogo";
import { Card } from "./Card";
import { LinkButton } from "./LinkButton";

export type EventParams = {
  slug: string;
};

export const Video: React.FC = () => {
  const { slug } = useParams<EventParams>();
  const { data, loading, error } = useLessonBySlugQuery({
    variables: {
      slug: slug || firstLessonSlug,
    },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>error... check console</div>;
  }

  if (!data) {
    return <div>no data...</div>;
  }

  const { videoId, title, description, teacher } = data.lesson;

  return (
    <Fragment>
      <div className="flex items-center justify-center bg-black">
        {/* video */}
        <div className="aspect-video h-full max-h-[60vh] w-full max-w-[1100px]">
          <Player>
            <Youtube videoId={videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] p-8">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            {/* title */}
            <h1 className="text-2xl font-bold">{title}</h1>

            {/* description */}
            <p className="mt-4 leading-relaxed text-gray-200">{description}</p>

            <div className="mt-6 flex items-center gap-4">
              {/* teacher avatar */}
              <img
                src={teacher.avatarURL}
                alt="Teacher avatar"
                className="aspect-square h-16 rounded-full border-2 border-blue-500"
              />

              {/* teacher info */}
              <div className="leading-relaxed">
                <strong className="block text-2xl font-bold">
                  {teacher.name}
                </strong>

                <span className="block text-sm text-gray-200">
                  {teacher.bio}
                </span>
              </div>
            </div>
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

      {/* footer */}
      <footer className="mx-auto flex max-w-[1100px] items-center gap-6 border-t border-gray-500 py-6">
        <a
          href="https://www.rocketseat.com.br/"
          target="_blank"
          className="cursor-pointer"
        >
          <RocketseatLogo />
        </a>

        <p className="text-gray-300">
          Rocketseat - Todos os direitos reservados
        </p>

        <a href="#" className="ml-auto cursor-pointer text-gray-300">
          Políticas de privacidade
        </a>
      </footer>
    </Fragment>
  );
};
