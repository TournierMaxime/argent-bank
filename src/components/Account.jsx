import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useUserUpdate from "../hooks/useUserUpdate"
import { oneUser } from "../redux/actions/user"

const Account = () => {
  const dispatch = useDispatch()

  const token = useSelector((state) => state.login.data.token)
  const accountData = useSelector((state) => state.login.data.accountData)
  const userData = useSelector((state) => state.oneUser.data)

  console.log(token)

  const firstName = userData?.firstName
  const lastName = userData?.lastName

  const { handleUpdateUser } = useUserUpdate({ data: userData })

  const fetchData = () => {
    return (
      accountData &&
      accountData.map((data, index) => {
        return (
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
        )
      })
    )
  }

  useEffect(() => {
    dispatch(oneUser(token))
  }, [token])

  return (
    <Fragment>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        <button className="edit-button" onClick={() => handleUpdateUser()}>
          Edit Name
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {fetchData()}
    </Fragment>
  )
}

export default Account
