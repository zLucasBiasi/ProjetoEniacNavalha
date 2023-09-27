import { FormProps } from "./types";

import { handleSubmit } from "./functions/handleSubmit";

export const Form = ({ children }: FormProps) => (
  <form onSubmit={handleSubmit}>{children}</form>
);
