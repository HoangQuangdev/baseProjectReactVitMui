import { createTheme } from '@mui/material/styles'
import { red, pink, purple, blue, grey, yellow, lime, deepOrange , green  } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  drawerWidth : 240,
  palette: {
    primary: {
      main: '#6096B4'
    },
    secondary: {
      main: '#EEE9DA'
    },
    error: {
      main: red.A400
    },
    active : {
      main : "#93BFCF",
      text : '#EEE9DA'
    },
    unActive : {
      main : 'rgba(0,0,0,0)',
      text : '#EEE9DA'
    }
  }
})

export default theme