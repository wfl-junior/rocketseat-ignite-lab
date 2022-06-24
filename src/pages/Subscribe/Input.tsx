import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  Omit<React.ComponentPropsWithoutRef<"input">, "className">
>((props, ref) => (
  <input ref={ref} {...props} className="h-14 rounded bg-gray-900 px-5" />
));
