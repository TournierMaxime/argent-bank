const useUserData = ({ onLoginSuccess }) => {
  const getUserData = () => {
    try {
      const userData = localStorage.getItem("userData")
      if (userData) {
        const parsedData = JSON.parse(userData)
        onLoginSuccess(parsedData)
      }
    } catch (error) {
      console.log("getUserData error", error)
    }
  }

  return {
    getUserData,
  }
}

export default useUserData