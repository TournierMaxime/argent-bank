import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../redux/actions/user"
// import { useNavigate } from "react-router-dom"

const useUserUpdate = ({ data }) => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const token = useSelector((state) => state.login.data.token)

  const handleUpdateUser = async (e) => {
    e.preventDefault()
    try {
      await dispatch(updateUser(data, token))
      // navigate("/user")
    } catch (error) {
      console.log(error)
    }
  }

  return { handleUpdateUser }
}

export default useUserUpdate
