import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";

const ProductCard = (props) => {
  const history = useHistory();
  const { name, url, id } = props;
  return (
    <StyledCardWrapper onClick={() => history.push("/products/" + id)}>
      <img
        src={url}
        style={{ width: "100%", height: "70%", position: "relative" }}
        alt="product"
      />
      <StyledDesc>
        <StyledText>{name}</StyledText>
      </StyledDesc>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled(Box)`
  width: 12rem;
  height: 20rem;
  background-color: #d1d8e0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  transition: 0.2s;
  overflow: hidden;
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
    box-shadow: 0.1rem 0.1em 0.6rem #778ca3;
  }
`;

const StyledText = styled(Typography)`
  color: #82589f;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

const StyledDesc = styled(Box)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export default ProductCard;
