import React from "react"
import useOnChange from "../hooks/useOnChange"

const Input = ({ htmlFor, label, type, id, value, data, setData }) => {
  const { onChangeHandler } = useOnChange({ data, setData })
  return (
    <div className="input-wrapper">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        id={id}
        name={htmlFor}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default Input
