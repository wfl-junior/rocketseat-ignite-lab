import { Logo } from "src/components/Logo";
import { Form } from "./Form";

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

        <Form />
      </div>
    </div>

    <img
      src="/src/assets/code-mockup.png"
      alt="Code Mockup"
      className="mt-10"
    />
  </div>
);
