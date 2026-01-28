interface TextareaFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
}

export const TextareaField = ({
  label,
  name,
  id,
  placeholder,
}: TextareaFieldProps) => {
  return (
    <div className='flex flex-col w-full'>
      <p className='uppercase text-sm text-gray-400 font-main font-bold mb-2'>
        {label}
      </p>
      <textarea
        name={name}
        id={id}
        className='ring-1 ring-white/20 w-full p-2 rounded-md font-main focus:border-2 focus:border-accent4 focus:outline-0 focus:ring-0'
        placeholder={placeholder}
        rows={8}
      />
    </div>
  );
};
