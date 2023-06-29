import React from 'react';
interface InputAndTitleProps {
  value: string | undefined;
  setValue(arg: string): void;
  title: string;
  type: string;
}
function InputAndTitle({ value, setValue, title, type }: InputAndTitleProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="">
      <p>{title}</p>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={`Enter ${title}`}
      ></input>
    </div>
  );
}

export default InputAndTitle;
