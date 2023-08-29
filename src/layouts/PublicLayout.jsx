/* eslint-disable react/no-children-prop */
import { Box } from '@mui/material'
import SideBar from './bars/SideBar'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import AppBarWeb from './bars/appBar/AppBar'


function PublicLayout({ children }) {
  const { handleDraw, openDraw } = useContext(AppContext)

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarWeb open={openDraw} handleDrawerOpen = {handleDraw} />
      <SideBar open={openDraw} handleDrawerClose = {handleDraw} children = {children}/>
    </Box>
  )
}

export default PublicLayout
