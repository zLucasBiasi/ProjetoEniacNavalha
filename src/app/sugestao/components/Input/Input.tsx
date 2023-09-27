import { InputProps } from "./types";

export const Input = ({ label, type, rule, ...props }: InputProps) => {
  return (
    <label className="text-1.4rem font-normal leading-2.4rem" htmlFor={label}>
      <div>
        {label}{" "}
        {rule && (
          <span className="text-1.2rem font-normal leading-2rem text-light-gray ml-1.2rem">
            ({rule})
          </span>
        )}
      </div>
      <input
        className="w-full h-5.3 px-1 border border-solid border-backLines outline-none rounded-0.8rem my-1.6rem text-black py-2"
        type={type}
        id={label}
        {...props}
      />
    </label>
  );
};
