import React from 'react'

export function InputTexto({idInput, nameInput, placeHolderInput, setInput}) {
  const textLabel = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);

  return (
    <>
        <label>{textLabel}</label> 
        <input id={idInput} type='text' name={nameInput} placeholder={placeHolderInput} maxLength="50" onChange= {e =>setInput(e.target.value)}/>
    </>
  )
}