import React, { useState } from 'react'
import Button from '../button/Button'
import Display from '../display/Display'

import './Calculator.css'

function Calculator() {
  const [value, setValue] = useState(['0'])

  const clearMemory = () => {
    setValue('0')
  }

  const setOperation = (operation) => {
    console.log(operation)
  }

  const addDigit = (n) => {
    if (n === '.' && value.includes('.')) return

    const clearDisplay = value === '0'
    const currentValue = clearDisplay ? '' : value
    const displayValue = currentValue + n

    if(n !== '.') {
      setValue(parseFloat(displayValue))
    }
  }

  return (
    <div className='calculator'>
      <Display value={value} />
      <Button label="AC" triple click={clearMemory} />
      <Button label="/" operation click={setOperation} />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" operation click={setOperation} />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" operation click={setOperation} />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" operation click={setOperation} />
      <Button label="0" double click={addDigit} />
      <Button label="." click={addDigit} />
      <Button label="=" operation click={setOperation} />
    </div>
  )
}

export default Calculator