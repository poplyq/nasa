import React from 'react'

interface RadioInputProps<T, K> {
  array: T[]
  setElement(arg: K): void
}
function RadioInput<T, K>({ array, setElement }: RadioInputProps<T, K>): JSX.Element {
  // на будущее пускай побудет тут any
  // eslint-disable-next-line
  const handleChange = (element: any) => {
    setElement(element.param)
  }
  return (
    <div className='radioInputContainer'>
      {/* // на будущее пускай побудет тут any */}
      {/* eslint-disable-next-line  */}
      {array?.map((ele: any, id) => (
        <div className='optionContainer' key={id}>
          <label key={id} className='radioInput' htmlFor={ele.name}>
            <input
              className='input'
              id={ele.name}
              type='radio'
              name={`radio${array.length}`}
              onChange={() => handleChange(ele)}
            />
            {ele.name}
          </label>
        </div>
      ))}
    </div>
  )
}

export default RadioInput
