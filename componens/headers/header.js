import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { Search } from "./search";
import { Notification } from "./notification";
import { Profile } from "./profile";
import style from "./header.module.css";

export const Header = () => {
  return (
    <Grid templateColumns="auto 20rem" gap={4} className={style.wrap}>
      <GridItem>
        {/* Search section */}
        <Search />
      </GridItem>

      {/* Profile section */}
      <GridItem display="flex">
        <Flex align="center" gap={4}>
          <Notification />
          <Profile />
        </Flex>
      </GridItem>
    </Grid>
  );
};
