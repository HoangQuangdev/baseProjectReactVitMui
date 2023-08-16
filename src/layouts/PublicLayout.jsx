import { Box, useMediaQuery, useTheme } from "@mui/material"
import PropTypes from "prop-types"

function PublicLayout({ children }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box
      sx={{
        background: "#E5E5E5",
        minHeight: "91vh",
        padding: isMobile ? "0px" : "5px 20px"
      }}
    >
      {children}
    </Box>
  )
}

export default PublicLayout
PublicLayout.propTypes = {
  children: PropTypes.any.isRequired
}
