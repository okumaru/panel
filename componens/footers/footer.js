import { Box } from "@chakra-ui/react";
import { Copyright } from "./copyright";
import style from "./footer.module.css";

export const Footer = () => {
  return (
    <Box className={style.footer}>
      <Copyright />
    </Box>
  );
};
