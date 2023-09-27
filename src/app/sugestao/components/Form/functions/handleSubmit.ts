import { HandleSubmitProps } from "../types";

export const handleSubmit = (e: HandleSubmitProps) => {
  e.preventDefault();
  alert("enviado");
};
