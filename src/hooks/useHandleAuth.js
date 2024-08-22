import { useDispatch } from "react-redux"
import { login, logout } from "../redux/actions/auth"
import { useNavigate } from "react-router-dom"

const useHandleAuth = ({ data }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await dispatch(login(data))
      navigate("/user")
    } catch (error) {
      console.log(error)
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
  return { handleLogin, handleLogout }
}

export default useHandleAuth
