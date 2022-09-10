import React from 'react'
import './Button.css'

function Button(props) {
  const handleClick = (e) => {
    e.preventDefault()
    props.click && props.click(props.label)
  }

  return (
    <button className={`
      button
      ${props.operation ? 'operation' : ''}
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
    `}
      onClick={handleClick}
    >
      {props.label}
    </button>
  )
}

export default Button