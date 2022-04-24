import { Box, Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import style from "./cards.module.css";

export const Card = (props) => {
  const { name, subname, total, percentage, percentageType } = props;
  return (
    <Box className={style.cardWrapper}>
      <Box boxShadow="lg" className={style.cardBody}>
        <Flex alignItems="center">
          {/* Icon */}
          <Flex
            className={style.cardIcon}
            justifyContent="center"
            alignItems="center"
          >
            <props.icon />
          </Flex>
          {/* Data */}
          <Box className={style.cardData}>
            <Text className={style.cardDataName}>{name}</Text>
            <Text className={style.cardDataSubname}>{subname}</Text>
            <Text className={style.cardDataTotal}>{total}</Text>
          </Box>
          {/* Percentage */}
          <Flex
            alignItems="center"
            className={`${style.cardPercent} ${
              percentageType === "up" && style.cardPercentUp
            } ${percentageType === "down" && style.cardPercentDown}`}
          >
            {percentageType === "up" && <BiCaretUp />}
            {percentageType === "down" && <BiCaretDown />}
            <Text className={style.cardDataPercentage}>{percentage}</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
