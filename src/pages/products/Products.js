import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";

import Header from "../../components/header/Header";
import { productList } from "../../assets/productList/ProductList";
import ProductCard from "../../components/productCard.js/ProductCard";

export const Products = () => {
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
      <Header name="Products" />
      {!productList.length && <div>No products</div>}
      <CardsWrapper>
        {productList.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.mainPhotoUrl}
            />
          );
        })}
      </CardsWrapper>
    </Container>
  );
};

const CardsWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export default Products;
