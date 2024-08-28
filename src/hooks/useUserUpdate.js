import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../redux/actions/user"
import useMessage from "./useMessage"

const useUserUpdate = ({ data, setIsModalOpen }) => {
  const dispatch = useDispatch()

  const token = useSelector((state) => state.login.data.token)

  const { message, setMessage } = useMessage()

  const handleUpdateUser = async (e) => {
    e.preventDefault()

    if (!data.firstName || !data.lastName) {
      setIsModalOpen(true)
      return setMessage({
        error: "Les champs Prénom et Nom ne peuvent pas être vides.",
      })
    }

    try {
      await dispatch(updateUser(data, token))
      setMessage({
        success: "Données mise à jour",
        error: "",
      })
    } catch (error) {
      console.log(error)
      setMessage({ error: "Une erreur est survenue lors de la mise à jour." })
    }
  }

  return { handleUpdateUser, message }
}

export default useUserUpdate
