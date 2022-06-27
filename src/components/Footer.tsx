import { RocketseatLogo } from "./RocketseatLogo";

export const Footer: React.FC = () => (
  <footer className="w-full border-t border-gray-500 bg-gray-900">
    <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-6 p-6 text-center md:flex-row">
      <a
        href="https://www.rocketseat.com.br/"
        target="_blank"
        className="cursor-pointer"
      >
        <RocketseatLogo />
      </a>

      <p className="text-gray-300">Rocketseat - Todos os direitos reservados</p>

      <a href="#" className="cursor-pointer text-gray-300 md:ml-auto">
        Políticas de privacidade
      </a>
    </div>
  </footer>
);
