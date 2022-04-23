import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { BiChevronsRight } from "react-icons/bi";
import style from "./breadcrumb.module.css";

export const Breadcrumb = (props) => {
  const { breadcrumb } = props;
  let lengthData = breadcrumb.length;
  return (
    <>
      {breadcrumb.map((item, index) => {
        return (
          <Flex
            key={index}
            gap={2}
            marginRight={2}
            className={`${style.breadcrumbItem} ${
              index === lengthData - 1 && style.lastBreadcrumbItem
            }`}
          >
            <Text>{item.text}</Text>
            {index !== lengthData - 1 && <BiChevronsRight />}
          </Flex>
        );
      })}
    </>
  );
};
