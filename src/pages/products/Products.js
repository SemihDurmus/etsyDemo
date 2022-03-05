import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";

import Header from "../../components/header/Header";
import * as data from "../../assets/productList/ProductList.json";
import ProductCard from "../../components/productCard.js/ProductCard";

export const Products = () => {
  const { products } = data;

  return (
    <Container maxWidth="md">
      <Header name="Products" />
      {(products === undefined || !products.length) && <div>No products</div>}
      <CardsWrapper>
        {products.map((item) => {
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
