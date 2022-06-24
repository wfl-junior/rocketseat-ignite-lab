import { ErrorMessage, Field, FieldAttributes } from "formik";

export const Input: React.FC<
  Omit<FieldAttributes<any>, "className">
> = props => (
  <div className="flex flex-col gap-1">
    <Field {...props} className="h-14 rounded bg-gray-900 px-5" />

    <ErrorMessage
      component="div"
      name={props.name}
      className="text-sm text-red-500"
    />
  </div>
);
