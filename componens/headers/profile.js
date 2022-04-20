import { Box } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import style from "./profile.module.css";

export const Profile = () => {
  return (
    <Box className={style.profile}>
      <BiUserCircle
        style={{ fontSize: "24px", color: "RGBA(0, 0, 0, 0.64)" }}
      />
    </Box>
  );
};
