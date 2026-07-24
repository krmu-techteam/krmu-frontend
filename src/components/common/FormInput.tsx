import React from "react";

export interface FormInputProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
> {
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "textarea"
    | "select"
    | "file";
  label?: string;
  options?: { label: string; value: string | number }[];
  rows?: number;
  containerClassName?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type = "text",

  options,
  containerClassName = "",
  className = "",
  children,
  ...props
}) => {
  const baseClasses = `w-full bg-transparent font-poppins border border-white/20 rounded-[4px] px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#0066CC] transition-colors [color-scheme:dark] ${className}`;

  return (
    <div className={containerClassName}>
      {/* {label && (
        <label className="font-medium text-sm mb-2 block text-white font-poppins">
          {label}
        </label>
      )} */}
      {type === "textarea" ? (
        <textarea
          className={`${baseClasses} font-poppins`}
          rows={props.rows || 4}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : type === "select" ? (
        <select
          className={`${baseClasses} [&>option]:text-white [&>option]:bg-[#061623]`}
          {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
        >
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
          {children}
        </select>
      ) : type === "file" ? (
        <input
          type="file"
          className={`w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-800 file:text-white hover:file:bg-gray-700 cursor-pointer ${className}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      ) : (
        <input
          type={type}
          className={baseClasses}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};

export default FormInput;
