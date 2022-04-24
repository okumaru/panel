import { Box, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import style from "./profile.module.css";

export const Profile = (props) => {
  const { userName, userPermissions } = props;
  return (
    <Flex alignItems="center" className={style.profile} gap={2}>
      <BiUserCircle
        style={{ fontSize: "24px", color: "RGBA(0, 0, 0, 0.64)" }}
      />
      <Box>
        <Text className={style.profileName}>{userName}</Text>
        <Text className={style.profilePermission}>{userPermissions}</Text>
      </Box>
    </Flex>
  );
};
