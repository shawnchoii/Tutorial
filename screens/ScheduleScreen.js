import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import CourseList from "../components/CourseList";
import UserContext from "../UserContext";
import CourseEditScreen from "./CourseEditScreen";

const Banner = ({ title }) => (
  <Text style={styles.bannerStyle}>{title || "[loading...]"}</Text>
);

const ScheduleScreen = ({ navigation }) => {
  const user = useContext(UserContext);
  const url = "https://courses.cs.northwestern.edu/394/data/cs-courses.php";
  const canEdit = user && user.role === "admin";

  const view = (course) => {
    navigation.navigate(canEdit ? "CourseEditScreen" : "CourseDetailScreen", {
      course,
    });
  };

  const [schedule, setSchedule] = useState({ title: "", courses: [] });

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    };
    fetchSchedule();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  bannerStyle: {
    color: "#888",
    fontSize: 32,
  },
});

export default ScheduleScreen;
