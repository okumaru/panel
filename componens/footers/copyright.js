import { Box } from "@chakra-ui/react";
import style from "./copyright.module.css";

export const Copyright = () => {
  return (
    <Box className={style.copyright}>
      Copyright © 2022 <b>Okumaru</b>. All Rights Reserved.
    </Box>
  );
};
