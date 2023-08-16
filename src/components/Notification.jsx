import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Slide
} from "@mui/material"
import React from "react"
import PropTypes from "prop-types"
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
function Notification({ notification, close }) {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      sx={{ zIndex: 9999 }}
      open={notification.open}
      TransitionComponent={Transition}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      keepMounted
    >
      <DialogTitle>{"Thông báo !"}</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {notification.content}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={close} variant="contained">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Notification

Notification.propTypes = {
  notification: PropTypes.any.isRequired,
  close: PropTypes.any.isRequired
}
