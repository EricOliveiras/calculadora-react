import React, { useState } from 'react'
import Button from '../button/Button'
import Display from '../display/Display'

import './Calculator.css'

function Calculator() {
  const [value, setValue] = useState('0')
  const [oldValue, setOldValue] = useState('0')
  const [operator, setOperator] = useState()

  const clearMemory = () => {
    setValue('0')
  }

  const setOperation = (operation) => {
    setOperator(operation)
    setOldValue(value)
    setValue('0')
  }

  const addDigit = (n) => {
    if (n === '.' && value.includes('.')) return

    const clearDisplay = value === '0'
    const currentValue = clearDisplay ? '' : value
    const displayValue = currentValue + n
    setValue(displayValue)
  }

  const calcuulate = () => {
    switch (operator) {
      case '+':
        let sum = parseFloat(oldValue) + parseFloat(value)
        setValue(sum.toString())
        break;
      case '-':
        let sub = parseFloat(oldValue) - parseFloat(value)
        setValue(sub.toString())
        break;
      case '*':
        let multi = parseFloat(oldValue) * parseFloat(value)
        setValue(multi.toString())
        break;
      case '/':
        let div = parseFloat(oldValue) / parseFloat(value)
        setValue(div.toString())
        break;
      default:
        break;
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
      <Button label="=" operation click={calcuulate} />
    </div>
  )
}

export default Calculator