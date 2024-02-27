import { InputHTMLAttributes } from "react";

export const CheckBox = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input type="checkbox" {...props} />;
};
