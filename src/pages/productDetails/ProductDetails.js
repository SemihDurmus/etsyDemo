import { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useParams, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Header from "../../components/header/Header";
import * as data from "../../assets/productList/ProductList.json";
import ProductImagePopup from "../../components/productImagePopup/ProductImagePopup";

const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleSelectImage = (el) => {
    setOpen(true);
    setSelectedUrl(el);
  };
  const { id } = useParams();
  const history = useHistory();
  const { products } = data;

  const item = products.filter((i) => i.id === id)[0];

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: "20vh",
      }}
    >
      <Header name={item.name} />
      <ImageWrapper>
        {item.photoUrls.length > 0 &&
          item.photoUrls.map((el, index) => (
            <Box
              sx={{
                border: "1px solid transparent",
                cursor: "pointer",
                mb: 4,
                "&:hover": {
                  border: "1px solid salmon",
                },
              }}
              onClick={() => handleSelectImage(el)}
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
      <Button
        sx={{ m: 2 }}
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => history.push("/products")}
      >
        Back
      </Button>
      <ProductImagePopup
        open={open}
        handleClose={handleClose}
        url={selectedUrl}
      />
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
  box-shadow: 0.1rem 0.1em 0.6rem #778ca3;
`;

const Description = styled(Typography)`
  text-align: justify;
  font-size: 14px;
  font-weight: 100;
`;

export default ProductDetails;
