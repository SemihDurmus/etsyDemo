import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const ProductImagePopup = ({ open, handleClose, url }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      sx={{
        ".MuiPaper-root": {
          maxWidth: "100vw",
        },
      }}
    >
      <DialogActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton aria-label="delete" onClick={handleClose}>
          <CloseIcon color="secondary" />
        </IconButton>
      </DialogActions>
      <DialogContent>
        <img src={url} alt="detail" />
      </DialogContent>
    </Dialog>
  );
};

export default ProductImagePopup;
