import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  BiDotsVerticalRounded,
  BiCircle,
  BiStar,
  BiCalendarExclamation,
} from "react-icons/bi";
import style from "./activities.module.css";

const ActivityItems = [
  {
    datetime: "08:42",
    group: "notification",
    description: "Pergi kepasar belajar sepeda motor",
  },
  {
    datetime: "21:42",
    group: "reminder",
    description: "Main genshin impact",
  },
  {
    datetime: "2022/04/23",
    group: "agenda",
    description: "Ater ater ke dampit",
  },
  {
    datetime: "2022/04/24",
    group: "agenda",
    description: "Ater ater ke gondanglegi",
  },
];

const ActivitiesHeader = () => {
  return (
    <Box className={style.activityHeader}>
      <Text className={style.title}>Activities</Text>
      <Text className={style.total}>
        <span>123 Unread</span> <BiDotsVerticalRounded /> 123456 Total
        Activities
      </Text>
    </Box>
  );
};

const ActivityGroup = (prop) => {
  if (prop.group === "notification")
    return <BiCircle style={{ color: "#38A169" }} />;

  if (prop.group === "reminder") return <BiStar style={{ color: "#ECC94B" }} />;

  if (prop.group === "agenda")
    return <BiCalendarExclamation style={{ color: "#E53E3E" }} />;

  return <BiCircle />;
};

const ActivitiesBody = () => {
  return (
    <Flex direction="column" gap={4}>
      {ActivityItems.map((activities, index) => {
        return (
          <Grid key={index} templateColumns="5rem 2rem auto" gap={4}>
            <GridItem
              className={`${style.activityCenter} ${style.activityDateTime}`}
            >
              {activities.datetime}
            </GridItem>
            <GridItem
              className={`${style.activityCenter} ${style.activityGroup}`}
            >
              <Spacer />
              <ActivityGroup group={activities.group} />
              <Spacer />
            </GridItem>
            <GridItem className={style.activityDesc}>
              <Text
                style={
                  (activities.group === "notification" && {}) ||
                  (activities.group === "reminder" && {
                    color: "#3182CE",
                  }) ||
                  (activities.group === "agenda" && {
                    color: "#F56565",
                  })
                }
              >
                {activities.description}
              </Text>
            </GridItem>
          </Grid>
        );
      })}
    </Flex>
  );
};

export const ActivitiesBoard = () => {
  return (
    <>
      <ActivitiesHeader />
      <ActivitiesBody />
    </>
  );
};
