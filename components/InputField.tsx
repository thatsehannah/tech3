import { HTMLInputTypeAttribute } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

export const InputField = ({
  label,
  name,
  id,
  placeholder,
  type,
}: InputFieldProps) => {
  return (
    <div className='flex flex-col w-full'>
      <p className='uppercase text-sm text-gray-400 font-main font-bold mb-2'>
        {label}
      </p>
      <input
        type={type}
        name={name}
        id={id}
        className='ring-1 ring-white/20 w-full p-2 rounded-md font-main focus:border-2 focus:border-accent4 focus:outline-0 focus:ring-0'
        placeholder={placeholder}
      />
    </div>
  );
};
