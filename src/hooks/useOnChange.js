import { useCallback } from "react"

const useOnChange = ({ data, setData }) => {
  const onChangeHandler = useCallback(
    (e) => {
      const { name, type, checked, value } = e.target
      setData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }))
    },
    [setData],
  )

  return { onChangeHandler }
}

export default useOnChange
