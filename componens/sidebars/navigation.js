import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BiHomeSmile, BiRocket, BiCut, BiUser } from "react-icons/bi";
import style from "./navigation.module.css";

const NavItems = [
  {
    icon: BiHomeSmile,
    text: "Dashboard",
  },
  {
    icon: BiRocket,
    text: "Product",
  },
  {
    icon: BiCut,
    text: "Promotion",
  },
  {
    icon: BiUser,
    text: "User",
  },
];

export const Navigation = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Box className={style.nav}>
      {NavItems.map((item, index) => {
        return (
          <Flex
            key={index}
            gap={3}
            className={
              selected === index
                ? `${style.navitem} ${style.active}`
                : `${style.navitem}`
            }
            onClick={() => setSelected(index)}
          >
            <item.icon />
            <Text>{item.text}</Text>
          </Flex>
        );
      })}
    </Box>
  );
};
