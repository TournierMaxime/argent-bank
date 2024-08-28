import React from "react"
import useOnChange from "../hooks/useOnChange"

const Input = ({ divName, htmlFor, label, type, id, value, data, setData }) => {
  const { onChangeHandler } = useOnChange({ data, setData })
  return (
    <div className={divName}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        id={id}
        name={htmlFor}
        checked={type === "checkbox" ? value : undefined}
        value={type !== "checkbox" ? value : undefined}
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default Input
