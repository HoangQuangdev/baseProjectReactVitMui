
import { useEffect, useState } from 'react'
import { AppContext } from './AppContext'
import { useMediaQuery, useTheme } from '@mui/material'

function AppProvider({ children }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [user, setUser] = useState(null)
  const [openDraw, setOpenDraw] = useState(true)

  useEffect(() => {
    // localStorage.clear()
    let userStorage = localStorage.getItem('user_carRental')
    let draw = localStorage.getItem('draw')

    if (draw) {
      setOpenDraw(JSON.parse(draw))
    }

    if (userStorage) {
      setUser(JSON.parse(userStorage))
    }
  }, [])
  useEffect(() => {
    isMobile&& setOpenDraw(!isMobile)
  }, [isMobile])


  const handleLogin = (user) => {
    setUser(user)
    localStorage.setItem('user_carRental', JSON.stringify(user))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  const handleDraw = () => {
    localStorage.setItem('draw', JSON.stringify(!openDraw))
    setOpenDraw(!openDraw)
  }


  return (
    <AppContext.Provider value={{
      user: user,
      openDraw : openDraw,

      handleLoginLocal: handleLogin,
      handleLogout: handleLogout,
      handleDraw : handleDraw

    }}>
      {children}
    </AppContext.Provider>
  )

}

export default AppProvider