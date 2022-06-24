import * as yup from "yup";

export const createSubscriberValidationSchema = yup.object({
  name: yup.string().required().label("Nome"),
  email: yup.string().required().email().label("E-mail"),
});
