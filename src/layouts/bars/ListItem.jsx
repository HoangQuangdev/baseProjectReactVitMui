import React from 'react'
import {  ListItemButton, ListItemIcon, ListItemText, ListItem as MuiListItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const shakeAnimation = `@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  50% {
    transform: translateX(4px);
  }
  75% {
    transform: translateX(-4px);
  }
}`

const AnimatedListItemIcon = styled(ListItemIcon)(
  ({ shaking }) => ({
    transition: 'transform 0.3s',
    animation: shaking === "true" ? 'shake 0.5s ease-in-out' : 'none'
  })
)

const CustomListItemButton = styled(ListItemButton)(
  ({ shaking }) => ({
    transition: 'transform 0.3s',
    '&:hover': {
      transform: shaking === "true" ? 'translateY(-2px)' : 'none'
    }
  })
)

export default function ListItem({ text, icon, textColor, link, background }) {
  const [shaking, setShaking] = React.useState("false")

  const handleListItemMouseEnter = () => {
    setShaking("true")
  }

  const handleListItemMouseLeave = () => {
    setShaking("false")
  }

  return (
    <>
      <style>{shakeAnimation}</style>
      <CustomListItemButton
        // button
        component={Link}
        to = {link}
        onMouseEnter={handleListItemMouseEnter}
        onMouseLeave={handleListItemMouseLeave}
        shaking={shaking}
        sx={{
          minHeight: 48,
          justifyContent: 'initial',
          px: 1.5,
          background : background,
          borderRadius : 2,
          m:1,
          alignItems : 'center'
        }}
      >
        <AnimatedListItemIcon
          shaking={shaking}
          sx={{
            minWidth: 0,
            mr: 3,
            justifyContent: 'center'
          }}
        >
          {icon}
        </AnimatedListItemIcon>
        <ListItemText primary={text} sx={{ opacity: 1, color : textColor }} />
      </CustomListItemButton>
    </>
  )
}
