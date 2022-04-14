import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";

import Header from "../../components/header/Header";
import wallPaper from "../../assets/images/webb.png";
import { posts } from "../../assets/blogPosts/BlogPosts";
import ProductAndBlogCard from "../../components/productAndBlogCard.js/ProductAndBlogCard";
export const Blog = () => {
  const sortedPosts = posts.sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

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
        <Header name="Blog" />
        {!posts.length && <div>No blog posts</div>}
        <CardsWrapper>
          {!!posts.length &&
            sortedPosts.map((item) => {
              return (
                <ProductAndBlogCard
                  key={item.id}
                  id={item.id}
                  type="blog"
                  name={item.title}
                  url={item.mainPhotoUrl}
                  date={item.createdAt}
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
export default Blog;
