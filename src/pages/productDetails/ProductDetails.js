import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Header from "../../components/header/Header";
import * as data from "../../assets/productList/ProductList.json";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = data;

  const item = products.filter((i) => i.id === id)[0];

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header name={item.name} />
      <ImageWrapper>
        {item.photoUrls.length > 0 &&
          item.photoUrls.map((el, index) => (
            <Box
              sx={{
                border: "1px solid transparent",
                mb: 4,
                borderRadius: "0.3rem",
                "&:hover": {
                  border: "1px solid red",
                  backgroundColor: "white",
                },
              }}
            >
              <img
                src={el}
                style={{
                  width: "200px",
                  height: "auto",
                  position: "relative",
                  margin: "0.5rem",
                }}
                alt="product"
              />
            </Box>
          ))}
      </ImageWrapper>

      <StyledCard>
        <Description>{item.description}</Description>
      </StyledCard>
    </Container>
  );
};

const ImageWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  width: 100%;
`;

const StyledCard = styled(Box)`
  width: 100%;
  padding: 1rem;
  background-color: #efefef;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  margin-bottom: 40vh;
  box-shadow: 0.1rem 0.1em 0.6rem #778ca3;

  /* display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column; */
`;

const Description = styled(Typography)`
  text-align: justify;
  font-size: 14px;
  font-weight: 100;
`;

export default ProductDetails;
