import { Box, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Search } from "./search";
import { Notification } from "./notification";
import { Profile } from "./profile";
import { BiChevronsRight } from "react-icons/bi";
import style from "./header.module.css";

const TitleSection = (props) => {
  return <Text className={style.title}>{props.title}</Text>;
};

const BreadcrumbSection = (props) => {
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

export const Header = (props) => {
  return (
    <>
      <Grid
        templateColumns="auto 20rem"
        gap={4}
        className={style.wrapperHeader}
      >
        {/* Search section */}
        <GridItem>
          <Search />
        </GridItem>

        {/* Profile & notification section */}
        <GridItem display="flex">
          <Flex align="center" gap={4}>
            <Notification />
            <Profile />
          </Flex>
        </GridItem>
      </Grid>
      <Flex className={style.wrapperSubheader}>
        <TitleSection {...props} />
        <Spacer />
        <BreadcrumbSection {...props} />
      </Flex>
    </>
  );
};
