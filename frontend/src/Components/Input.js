import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import FormControl from 'react-bootstrap/FormControl';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])
  // return <input  />
  return (
    <div className="p-3">
      <label>{rest.label}</label>
      <FormControl ref={inputRef} defaultValue={defaultValue} {...rest} />
      { error && <span className="error">{error}</span> }
    </div>
  )
}