import Box from "@mui/material/Box";

export const ItemPhoto = ({ el, handleSelect }) => {
  return (
    <Box
      sx={{
        border: "1px solid transparent",
        cursor: "pointer",
        mb: 4,
        "&:hover": {
          border: "1px solid salmon",
        },
      }}
      onClick={() => handleSelect(el)}
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
  );
};

export default ItemPhoto;
