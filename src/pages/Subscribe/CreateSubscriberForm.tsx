import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "src/graphql/generated";
import { createSubscriberValidationSchema } from "src/yup/createSubscriberValidationSchema";
import { Input } from "./Input";

export const CreateSubscriberForm: React.FC = () => {
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  const navigate = useNavigate();

  return (
    <Formik
      validationSchema={createSubscriberValidationSchema}
      initialValues={{
        name: "",
        email: "",
      }}
      onSubmit={async values => {
        await createSubscriber({ variables: values });
        navigate("/event");
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex w-full flex-col gap-2" noValidate>
          <Input type="text" name="name" placeholder="Seu nome completo" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />

          <button
            type="submit"
            disabled={loading || isSubmitting}
            className="mt-4 rounded bg-green-500 py-5 text-sm font-bold uppercase transition-colors hover:bg-green-700 disabled:opacity-50"
          >
            Garantir minha vaga
          </button>
        </Form>
      )}
    </Formik>
  );
};
