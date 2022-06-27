import { Footer } from "src/components/Footer";
import { Logo } from "src/components/Logo";
import { CreateSubscriberForm } from "./CreateSubscriberForm";
import codeMockupImage from "/src/assets/code-mockup.png";

export const Subscribe: React.FC = () => (
  <div className="flex min-h-screen flex-col items-center bg-blur bg-cover bg-no-repeat">
    <div className="mx-auto mt-20 flex w-full max-w-[1100px] items-center justify-between">
      <div className="max-w-[640px]">
        <Logo />

        <h1 className="mt-8 text-[2.5rem] leading-tight">
          Construa uma{" "}
          <strong className="text-blue-500">aplicação completa</strong>, do
          zero, com <strong className="text-blue-500">React</strong>
        </h1>

        <p className="mt-4 leading-relaxed text-gray-200">
          Em apenas uma semana você vai dominar na prática uma das tecnologias
          mais utilizadas e com alta demanda para acessar as melhores
          oportunidades do mercado.
        </p>
      </div>

      <div className="rounded border border-gray-500 bg-gray-700 p-8">
        <strong className="mb-6 block text-2xl">
          Inscreva-se gratuitamente
        </strong>

        <CreateSubscriberForm />
      </div>
    </div>

    <img src={codeMockupImage} alt="Code Mockup" className="mt-10" />

    <Footer />
  </div>
);
