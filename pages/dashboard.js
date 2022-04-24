import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

import { Sidebar } from "../componens/sidebars/sidebar";
import { Header } from "../componens/headers/header";
import { Footer } from "../componens/footers/footer";
import { DashboardWrapper } from "../componens/wrappers/dashboard";
import { ActivitiesBoard } from "../componens/activities/activities";
import { Card } from "../componens/cards/cards";
import { BiPlanet, BiRocket, BiPackage } from "react-icons/bi";

const BreadcrumbsData = [
  {
    link: "http://localhost:3000/dashboard",
    text: "Dashboard",
  },
  {
    text: "main",
  },
];

const CardsData = [
  {
    name: "Total Project",
    subname: "In History",
    total: "100",
    icon: BiPlanet,
  },
  {
    name: "Active Project",
    subname: "Total in this month",
    total: "5",
    percentage: "12 %",
    percentageType: "up",
    icon: BiRocket,
  },
  {
    name: "Finished Project",
    subname: "Total in this month",
    total: "95",
    percentage: "1 %",
    percentageType: "down",
    icon: BiPackage,
  },
];

const MainSection = () => {
  return (
    <>
      <Flex flexWrap="wrap">
        {CardsData.map((card, index) => {
          return (
            <Card
              key={index}
              name={card.name}
              subname={card.subname}
              total={card.total}
              percentage={card.percentage}
              percentageType={card.percentageType}
              icon={card.icon}
            />
          );
        })}
      </Flex>
    </>
  );
};

const RightSection = () => {
  return (
    <>
      <ActivitiesBoard />
    </>
  );
};

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
            <Header
              title="Dashboard"
              breadcrumb={BreadcrumbsData}
              userName="Andhika M. Wijaya"
              userPermissions="Super Inovator"
            />

            <DashboardWrapper
              mainSection={<MainSection />}
              rightSection={<RightSection />}
            />

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
