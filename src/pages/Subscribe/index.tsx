import { Footer } from "src/components/Footer";
import { Logo } from "src/components/Logo";
import { CreateSubscriberForm } from "./CreateSubscriberForm";
import codeMockupImage from "/src/assets/code-mockup.png";
import ReactImage from "/src/assets/React.svg";

export const Subscribe: React.FC = () => (
  <div className="flex min-h-screen flex-col items-center bg-blur bg-cover bg-no-repeat">
    <div className="mx-auto mt-10 flex w-full max-w-[1100px] flex-col items-center justify-between gap-8 md:mt-20 lg:flex-row lg:px-6">
      <img
        src={ReactImage}
        alt="React"
        className="absolute inset-x-0 top-0 -z-10 mx-auto"
      />

      <div className="flex max-w-[640px] flex-col items-center gap-6 px-6 text-center lg:text-left">
        <Logo />

        <h1 className="mt-8 text-3xl leading-tight md:text-[2.5rem]">
          Construa uma{" "}
          <strong className="text-blue-500">aplicação completa</strong>, do
          zero, com <strong className="text-blue-500">React</strong>
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-gray-200 sm:text-base">
          Em apenas uma semana você vai dominar na prática uma das tecnologias
          mais utilizadas e com alta demanda para acessar as melhores
          oportunidades do mercado.
        </p>
      </div>

      <div className="w-full rounded border border-gray-500 bg-gray-700 p-8 sm:w-2/3">
        <strong className="mb-6 block text-lg md:text-2xl">
          Inscreva-se gratuitamente
        </strong>

        <CreateSubscriberForm />
      </div>
    </div>

    <img src={codeMockupImage} alt="Code Mockup" className="md:mt-10" />

    <Footer />
  </div>
);
