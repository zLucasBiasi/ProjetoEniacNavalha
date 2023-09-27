import { ReactNode } from "react";

export type FormProps = {
  children: ReactNode;
};

export type HandleSubmitProps = {
  preventDefault: () => void;
};
