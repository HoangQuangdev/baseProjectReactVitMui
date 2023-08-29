import { styled, useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MuiDrawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "./ListItem"
import {
  BarChart,
  ChatRounded,
  Home,
  Login,
  TabOutlined,
} from "@mui/icons-material"
import { Container } from "@mui/material"
import { useLocation } from "react-router-dom"
import { supUrl } from "../../utils/constants"
import ChipUser from "./ChipUser"

const openedMixin = (theme) => ({
  width: theme.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden",
  backgroundColor: theme.palette.primary.main, // Màu nền khi mở
  color: theme.palette.primary.contrastText,
  borderRight: 0
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  // [theme.breakpoints.up("sm")]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`
  // },
  backgroundColor: theme.palette.primary.main, // Màu nền khi đóng
  color: theme.palette.primary.contrastText
})

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: theme.drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}))

export default function SideBar({ open, handleDrawerClose, children }) {
  const theme = useTheme()
  const location = useLocation()
  const isActiveText = (path) => {
    if (location.pathname.startsWith(path)) {
      return theme.palette.active.text
    } else {
      return theme.palette.unActive.text
    }
  }
  const isActiveBackgroundColor = (path) => {
    if (location.pathname.startsWith(path)) {
      return theme.palette.active.main
    } else {
      return theme.palette.unActive.main
    }
  }
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <img height={50} src="../../../assets/axon-stroke.png" />
          </Box>
          <IconButton
            sx={{ position: "absolute", right: 0 }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: theme.palette.secondary.main }} />
            ) : (
              <ChevronLeftIcon sx={{ color: theme.palette.secondary.main }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {open &&
          <Box
            py={2}
            display={'flex'}
            alignItems={'center'}
            justifyContent={"center"}>
            <ChipUser
              name={"Quang có gờ"}
              img={"../../../assets/avatar.png"}
              role={"Developer"}
            />
          </Box>}
        <List>
          <ListItem
            link = {`${supUrl}/table`}
            text={"Table"}
            icon={<TabOutlined sx={{ color: isActiveText(`${supUrl}/table`) }} />}
            textColor = {isActiveText(`${supUrl}/table`)}
            background={isActiveBackgroundColor(`${supUrl}/table`)}
          />
          <ListItem
            link = {`${supUrl}/charts`}
            text={"Chart"}
            icon={<BarChart sx={{ color: isActiveText(`${supUrl}/charts`) }} />}
            textColor = {isActiveText(`${supUrl}/charts`)}
            background={isActiveBackgroundColor(`${supUrl}/charts`)}
          />
          <ListItem
            link = {`${supUrl}/home`}
            text={"Chart2"}
            icon={<Home sx={{ color: isActiveText(`${supUrl}/home`) }} />}
            textColor = {isActiveText(`${supUrl}/home`)}
            background={isActiveBackgroundColor(`${supUrl}/home`)}
          />
          <ListItem
            link = {`${supUrl}/login`}
            text={"login"}
            icon={<Login sx={{ color: isActiveText(`${supUrl}/login`) }} />}
            textColor = {isActiveText(`${supUrl}/login`)}
            background={isActiveBackgroundColor(`${supUrl}/login`)}
          />
        </List>
      </Drawer>
      <Box sx={{ width  :'100%', mt:2 }}>
        <DrawerHeader />
        <Container>{children}</Container>
      </Box>
    </>
  )
}
