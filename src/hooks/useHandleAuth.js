import { useDispatch } from "react-redux"
import { login } from "../redux/actions/auth"
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
  return { handleLogin }
}

export default useHandleAuth
