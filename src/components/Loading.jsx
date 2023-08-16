import { Box, Modal } from "@mui/material"
import logo from "../assets/logo.png"
import { PropagateLoader } from "react-spinners"
import PropTypes from "prop-types"
export default function Loading({ open }) {
  return (
    <Modal
      sx={{ bgcolor: "rgba(0, 0, 0,0.4)" }}
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <img src={logo} />
        <Box sx={{ mt: 2 }}>
          <PropagateLoader color="rgba(238, 238, 238,0.5)" size={8} />
        </Box>
      </Box>
    </Modal>
  )
}

Loading.propTypes = {
  open: PropTypes.string.isRequired
}
