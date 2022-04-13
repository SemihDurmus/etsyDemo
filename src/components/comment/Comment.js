import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

import { convertToDDMMYYY } from "../../utils/formatDate";

export const Comment = ({
  createdBy,
  createdAt,
  commentText,
  repliedAt,
  reply,
}) => {
  return (
    <CommentBox>
      <CommentHeader>
        <Text>{createdBy}</Text>
        <Text>{convertToDDMMYYY(createdAt)}</Text>
      </CommentHeader>
      <CommentText>
        <Text>{commentText}</Text>
      </CommentText>
      {repliedAt && reply && (
        <>
          <CommentHeader sx={{ marginTop: "1rem" }}>
            <Text sx={adminStyle}>Admin</Text>
            <Text sx={adminStyle}>{convertToDDMMYYY(repliedAt)}</Text>
          </CommentHeader>
          <CommentText>
            <Text sx={adminStyle}>{reply}</Text>
          </CommentText>
        </>
      )}
    </CommentBox>
  );
};

const adminStyle = {
  fontStyle: "italic",
  color: "#82589F",
};

const Text = styled(Typography)`
  text-align: justify;
  font-size: 14px;
  font-weight: 100;
`;

const CommentBox = styled(Box)`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1em 0.6rem #778ca3;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 234, 167, 0.5);
`;

const CommentHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const CommentText = styled(Box)``;

export default Comment;
