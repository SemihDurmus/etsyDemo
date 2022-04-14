import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const BackButton = () => {
  const history = useHistory();

  return (
    <Button
      sx={{ m: 2 }}
      variant="outlined"
      startIcon={<ArrowBackIosIcon />}
      onClick={() => history.goBack()}
    >
      Back
    </Button>
  );
};
export default BackButton;
