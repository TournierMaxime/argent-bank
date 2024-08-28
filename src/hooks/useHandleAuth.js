import { useDispatch } from "react-redux"
import { login, logout } from "../redux/actions/auth"
import { useNavigate } from "react-router-dom"
import useMessage from "./useMessage"

const useHandleAuth = ({ data }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { message, setMessage } = useMessage()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!data.email || !data.password) {
      return setMessage({
        error: "Les champs Email et Password ne peuvent pas être vides.",
      })
    }

    try {
      await dispatch(login(data))
      navigate("/profile")
    } catch (error) {
      console.log(error)
      setMessage({ error: error.response.data.message })
    }
  }

  const handleLogout = async () => {
    try {
      await dispatch(logout())
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return { handleLogin, handleLogout, message }
}

export default useHandleAuth
