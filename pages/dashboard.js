import { Box, Grid, GridItem } from "@chakra-ui/react";

import { Sidebar } from "../componens/sidebars/sidebar";
import { Header } from "../componens/headers/header";
import { Footer } from "../componens/footers/footer";
import { ActivitiesBoard } from "../componens/activities/activities";

export default function Dashboard() {
  return (
    <>
      {/* Vertical sections */}
      <Box>
        {/* Notification on top */}
        <Box style={{ display: "none" }}>Notification on header</Box>
      </Box>
      <Box>
        {/* Horizontal section */}
        <Grid
          templateColumns="12rem auto"
          gap={4}
          style={{ minHeight: "100%" }}
        >
          {/* Sidebar */}
          <GridItem>
            <Sidebar />
          </GridItem>

          {/* Content */}
          <GridItem style={{ position: "relative" }}>
            {/* Search & Profile section */}
            <Header />

            <Grid templateColumns="auto 20rem" gap={4}>
              {/* Main content */}
              <GridItem>asd</GridItem>

              {/* Sub content, activities section */}
              <GridItem>
                <ActivitiesBoard />
              </GridItem>
            </Grid>

            <Footer />
          </GridItem>
        </Grid>
      </Box>
      <Box>
        {/* Notification on bottom */}
        <Box style={{ display: "none" }}>Notification on footer</Box>
      </Box>
    </>
  );
}
