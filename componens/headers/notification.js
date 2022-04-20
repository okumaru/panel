import { Box } from "@chakra-ui/react";
import { BiBell } from "react-icons/bi";
import style from "./notification.module.css";

export const Notification = () => {
  return (
    <Box className={style.notification}>
      <BiBell style={{ fontSize: "24px", color: "RGBA(0, 0, 0, 0.64)" }} />
    </Box>
  );
};
