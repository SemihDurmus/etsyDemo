import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

export const Header = (props) => {
  return (
    <Container>
      <Typography
        align="center"
        variant="h3"
        component="h1"
        sx={{ color: "#82589F", fontWeight: "bold", fontFamily: "Roboto" }}
      >
        {props.name}
      </Typography>
    </Container>
  );
};

const Container = styled(Box)`
  height: 10vh;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
