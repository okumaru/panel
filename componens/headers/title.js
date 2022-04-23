import { Text } from "@chakra-ui/react";
import style from "./title.module.css";

export const Title = (props) => {
  return <Text className={style.title}>{props.title}</Text>;
};
