import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Copyright } from "./copyright";
import style from "./footer.module.css";

export const Footer = () => {
  return (
    <Box style={{ position: "absolute", bottom: "0" }}>
      <Copyright />
    </Box>
  );
};
