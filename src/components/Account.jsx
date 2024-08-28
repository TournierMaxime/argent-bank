import React, { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useUserUpdate from "../hooks/useUserUpdate"
import { oneUser } from "../redux/actions/user"
import Modal from "./Modal"
import Input from "./Input"

const Account = () => {
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const token = useSelector((state) => state.login.data.token)
  const accountData = useSelector((state) => state.login.data.accountData)
  const userData = useSelector((state) => state.oneUser.data)
  const test = useSelector((state) => state.login.data)
  console.log("test", test)

  const [user, setUser] = useState({
    firstName: userData?.firstName,
    lastName: userData?.lastName,
  })

  const { handleUpdateUser, message } = useUserUpdate({
    data: user,
    setIsModalOpen,
  })

  const fetchData = () => {
    return (
      accountData &&
      accountData.map((data, index) => (
        <section key={index} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{data.title}</h3>
            <p className="account-amount">{data.amount}</p>
            <p className="account-amount-description">{data.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))
    )
  }

  const handleModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!message?.error) {
      setIsModalOpen(false)
    }

    await handleUpdateUser()
  }

  useEffect(() => {
    dispatch(oneUser(token))
  }, [token, dispatch])

  useEffect(() => {
    if (!message?.error) {
      setIsModalOpen(false)
    }
  }, [message?.error])

  return (
    <Fragment>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userData.firstName} {userData.lastName}!
        </h1>
        <button className="edit-button" onClick={() => handleModal()}>
          Edit Name
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {fetchData()}

      <Modal isOpen={isModalOpen}>
        <h2>Edit Name</h2>
        <form onSubmit={handleSubmit}>
          <Input
            divName={"input-wrapper"}
            htmlFor={"firstName"}
            label={"Prénom"}
            type={"text"}
            id={"firstName"}
            value={user.firstName}
            data={user}
            setData={setUser}
          />
          <Input
            divName={"input-wrapper"}
            htmlFor={"lastName"}
            label={"Nom"}
            type={"text"}
            id={"lastName"}
            value={user.lastName}
            data={user}
            setData={setUser}
          />
          {message?.error ? <i className="error">{message?.error}</i> : null}
          <div className="form-buttons">
            <button type="submit" className="edit-button">
              Save
            </button>
            <button
              type="button"
              className="edit-button"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </Fragment>
  )
}

export default Account
