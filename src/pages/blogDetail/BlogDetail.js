import { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";

import Header from "../../components/header/Header";
import wallPaper from "../../assets/images/webb.png";
import { posts } from "../../assets/blogPosts/BlogPosts";
import { Comment } from "../../components/comment/Comment";
import ItemPhoto from "../../components/itemPhoto/ItemPhoto";
import ImagePopup from "../../components/imagePopup/ImagePopup";
import BackButton from "../../components/backButton/BackButton";

export const BlogDetail = () => {
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

  const item = posts.filter((i) => i.id === id)[0];
  console.log(item);
  const comments = item.comments;
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
        <Header name={item.title} />
        <ImageWrapper>
          {item.photoUrls.length > 0 &&
            item.photoUrls.map((el, index) => (
              <ItemPhoto key={index} el={el} handleSelect={handleSelectImage} />
            ))}
        </ImageWrapper>

        <StyledCard>
          <Description>{item.post}</Description>
        </StyledCard>
        {!!comments.length && <h3>User comments</h3>}
        {!!comments.length &&
          comments.map((el, index) => {
            return (
              <Comment
                key={index}
                createdBy={el.createdBy}
                createdAt={el.createdAt}
                commentText={el.commentText}
                repliedAt={el.repliedAt}
                reply={el.reply}
              />
            );
          })}
        <BackButton />
        {!!item.photoUrls.length && (
          <ImagePopup
            open={open}
            handleClose={handleClose}
            urlsArray={item.photoUrls}
            url={selectedUrl}
          />
        )}
      </Container>
    </Box>
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
  margin-bottom: 1.5rem;
`;

const Description = styled(Typography)`
  text-align: justify;
  font-size: 14px;
  font-weight: 100;
`;

export default BlogDetail;
