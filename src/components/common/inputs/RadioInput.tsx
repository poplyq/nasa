import React from 'react';

interface RadioInputProps<T, K> {
  array: T[];
  setElement(arg: K): void;
}
function RadioInput<T, K>({
  array,
  setElement,
}: RadioInputProps<T, K>): JSX.Element {
  const handleChange = (element: any) => {
    setElement(element.param);
  };
  return (
    <div className="radioInputContainer">
      {array?.map((ele: any, id) => (
        <div className="optionContainer">
          <label key={id} className="radioInput" htmlFor={ele.name}>
            <input
             className='input'
              id={ele.name}
              type="radio"
              name={`radio${array.length}`}
              onChange={() => handleChange(ele)}
            />
            {ele.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioInput;
