import { Box, Typography } from "@mui/material";

const ThankYou = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Typography gutterBottom variant="h3" component="div" fontWeight={700}>
        Thank You
      </Typography>

      <Typography gutterBottom variant="body1" component="div">
        You have been Registered
      </Typography>
    </Box>
  );
};

export default ThankYou;
