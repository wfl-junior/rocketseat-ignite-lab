import { setLocale } from "yup";

setLocale({
  mixed: {
    required: "O campo ${label} é obrigatório",
  },
  string: {
    email: "O campo ${label} deve ser um e-mail válido",
  },
});
