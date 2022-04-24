import { Grid, GridItem } from "@chakra-ui/react";
import style from "./dashboard.module.css";

export const DashboardWrapper = (props) => {
  const { mainSection, rightSection } = props;
  return (
    <Grid className={style.wrapper} gap={4}>
      {/* Main section */}
      <GridItem>{mainSection}</GridItem>
      {/* Right side section */}
      <GridItem>{rightSection}</GridItem>
    </Grid>
  );
};
