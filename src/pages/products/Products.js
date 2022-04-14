import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";

import Header from "../../components/header/Header";
import wallPaper from "../../assets/images/webb.png";
import { productList } from "../../assets/productList/ProductList";
import ProductAndBlogCard from "../../components/productAndBlogCard.js/ProductAndBlogCard";

export const Products = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundImage: `url(${wallPaper})` }}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: "20vh",
        }}
      >
        <Header name="Products" />
        {!productList.length && <div>No products</div>}
        <CardsWrapper>
          {productList.map((item) => {
            return (
              <ProductAndBlogCard
                key={item.id}
                id={item.id}
                type="product"
                name={item.name}
                url={item.mainPhotoUrl}
              />
            );
          })}
        </CardsWrapper>
      </Container>
    </Box>
  );
};

const CardsWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export default Products;
