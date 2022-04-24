import { Grid, GridItem } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Search } from "./search";
import { Notification } from "./notification";
import { Profile } from "./profile";
import { Breadcrumb } from "./breadcrumb";
import { Title } from "./title";
import style from "./header.module.css";

export const Header = (props) => {
  return (
    <>
      <Grid gap={4} className={style.wrapperHeader}>
        {/* Search section */}
        <GridItem>
          <Search />
        </GridItem>

        {/* Profile & notification section */}
        <GridItem display="flex">
          <Flex align="center" gap={4}>
            <Notification />
            <Profile {...props} />
          </Flex>
        </GridItem>
      </Grid>
      <Flex className={style.wrapperSubheader}>
        <Title {...props} />
        <Spacer />
        <Breadcrumb {...props} />
      </Flex>
    </>
  );
};
