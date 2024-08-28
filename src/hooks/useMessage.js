import { useState } from "react"

const useMessage = () => {
  const [message, setMessage] = useState({
    success: "",
    error: "",
  })

  return {
    message,
    setMessage,
  }
}

export default useMessage
