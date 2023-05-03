/* 使用 Material UI CSS */
import { Box, Typography } from "@mui/material";

/* -------- Header ----------
   接收 title, subtitle props
 ---------------------------- */
const Header = ({ title, subtitle }) => {
  return (
    <Box pb="10px">
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body2">{subtitle}</Typography>
    </Box>
  );
};

export default Header;
