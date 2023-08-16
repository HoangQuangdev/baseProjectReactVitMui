
import { useEffect, useState } from 'react'
import { AppContext } from './AppContext'

function AppProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // localStorage.clear()
    let userStorage = localStorage.getItem('user_carRental')

    if (userStorage) {
      setUser(JSON.parse(userStorage))
    }
  }, [])


  const handleLogin = (user) => {
    setUser(user)
    localStorage.setItem('user_carRental', JSON.stringify(user))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }


  return (
    <AppContext.Provider value={{
      user: user,

      handleLoginLocal: handleLogin,
      handleLogout: handleLogout

    }}>
      {children}
    </AppContext.Provider>
  )

}

export default AppProvider