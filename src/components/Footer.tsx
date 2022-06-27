import { RocketseatLogo } from "./RocketseatLogo";

export const Footer: React.FC = () => (
  <footer className="w-full border-t border-gray-500 bg-gray-900">
    <div className="relative mx-auto flex max-w-[1100px] items-center gap-6 p-6">
      <a
        href="https://www.rocketseat.com.br/"
        target="_blank"
        className="cursor-pointer"
      >
        <RocketseatLogo />
      </a>

      <p className="text-gray-300">Rocketseat - Todos os direitos reservados</p>

      <a href="#" className="ml-auto cursor-pointer text-gray-300">
        Políticas de privacidade
      </a>
    </div>
  </footer>
);
