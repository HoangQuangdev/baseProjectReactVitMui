import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Avatar, Box, Typography } from "@mui/material"

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.active.main,
}))
function ChipUser({ name, img, role }) {
  const theme = useTheme()
  return (
    <Box sx={{}}>
      {/* <Link underline="none"> */}
      <StyledAccount>
        <Avatar src={img} alt="photoURL" />

        <Box sx={{ ml: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.active.text, fontWeight : '700' }}
          >
            {name}
          </Typography>

          <Typography variant="body2" sx={{ color: theme.palette.active.text, fontSize : 12 }}>
            {role}
          </Typography>
        </Box>
      </StyledAccount>
      {/* </Link> */}
    </Box>
  )
}

export default ChipUser
