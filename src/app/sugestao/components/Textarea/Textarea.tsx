import { TextareaProps } from "./types";

export const Textarea = ({ label, value, onChange }: TextareaProps) => {
  return (
    <div className="container">
      <label className="text-1.4rem font-normal leading-2.4rem" htmlFor={label}>
        {label}
        <textarea
          className="w-full  border border-solid border-backLines outline-none rounded-0.8rem my-1.6rem text-black"
          id={label}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
