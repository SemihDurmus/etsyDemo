import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProductImagePopup = ({ open, handleClose, urlsArray, url }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const findIndex = urlsArray.findIndex((el) => el == url);
    setSelectedIndex(findIndex);
  }, [url]);

  const handleRight = () => {
    setSelectedIndex(selectedIndex + 1);
  };
  const handleLeft = () => {
    setSelectedIndex(selectedIndex - 1);
  };

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
        <Box>
          {selectedIndex > 0 && (
            <IconButton aria-label="delete" onClick={handleLeft}>
              <ChevronLeftIcon color="primary" />
            </IconButton>
          )}
          <img src={urlsArray[selectedIndex]} alt="detail" />
          {selectedIndex < urlsArray.length - 1 && (
            <IconButton aria-label="delete" onClick={handleRight}>
              <ChevronRightIcon color="primary" />
            </IconButton>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductImagePopup;
