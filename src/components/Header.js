import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Header = ({ currencies }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(33, 33, 33)",
        padding: "15px 0",
        display: "flex",
        justifyContent: "center",
        columnGap: "40px",
      }}
    >
      {currencies.map((el) => (
        <Typography key={el.cc} sx={{ color: "#9b9b9b", fontSize: "25px" }}>
          {el.txt}: {el.rate}
        </Typography>
      ))}
    </Box>
  );
};

export default Header;
