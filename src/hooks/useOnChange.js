const useOnChange = ({ data, setData }) => {
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  return {
    onChangeHandler,
  }
}

export default useOnChange
