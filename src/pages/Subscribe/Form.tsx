import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "src/graphql/hooks/useCreateSubscriberMutation";
import { Input } from "src/pages/Subscribe/Input";

export const Form: React.FC = () => {
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  const navigate = useNavigate();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex w-full flex-col gap-2"
      onSubmit={async e => {
        e.preventDefault();

        await createSubscriber({
          variables: {
            name: nameInputRef.current!.value,
            email: emailInputRef.current!.value,
          },
        });

        navigate("/event");
      }}
    >
      <Input ref={nameInputRef} type="text" placeholder="Seu nome completo" />
      <Input ref={emailInputRef} type="email" placeholder="Digite seu e-mail" />

      <button
        type="submit"
        disabled={loading}
        className="mt-4 rounded bg-green-500 py-5 text-sm font-bold uppercase transition-colors hover:bg-green-700 disabled:opacity-50"
      >
        Garantir minha vaga
      </button>
    </form>
  );
};
