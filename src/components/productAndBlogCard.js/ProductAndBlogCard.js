import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";

import { convertToDDMMYYY } from "../../utils/formatDate";

const ProductAndBlogCard = (props) => {
  const history = useHistory();
  const { name, url, id, type, date } = props;

  const handleClick = () => {
    if (type == "product") {
      history.push("/products/" + id);
    }
    if (type == "blog") {
      history.push("/blog/" + id);
    }
  };
  return (
    <StyledCardWrapper onClick={handleClick}>
      <img src={url} style={{ width: "100%", height: "70%" }} alt="product" />
      <ItemBox>
        {type == "blog" && date !== undefined && (
          <Date>{convertToDDMMYYY(date)}</Date>
        )}
        <StyledDesc>
          <StyledText>{name}</StyledText>
        </StyledDesc>
      </ItemBox>
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

const ItemBox = styled(Box)`
  height: 30%;
  width: 100%;
  display: grid;
  place-items: center;
  position: relative;
`;

const Date = styled(Typography)`
  width: 100%;
  color: rgba(214, 48, 49, 1);
  font-size: 0.6rem;
  font-family: "Roboto", sans-serif;
  text-align: right;
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
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

export default ProductAndBlogCard;
