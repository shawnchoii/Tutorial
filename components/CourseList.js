import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import CourseSelector from "./CourseSelector";
import TermSelector from "./TermSelector";

const termMap = { F: "Fall", W: "Winter", S: "Spring" };
const terms = Object.values(termMap);

const getCourseTerm = (course) => termMap[course.id.charAt(0)];

const CourseList = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState("Fall");

  const termCourses = courses.filter(
    (course) => selectedTerm === getCourseTerm(course)
  );

  return (
    <ScrollView>
      <TermSelector
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <CourseSelector courses={termCourses} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CourseList;
