import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { firebase } from "../firebase";
import Form from "../components/Form";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a valid email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Confirmation password must match password"
  ),
});

const SignInScreen = ({ navigation }) => {
  const [signInError, setSignInError] = useState("");

  async function handleOnSubmit(values) {
    const { email, password, confirmPassword } = values;
    if (confirmPassword === "") {
      console.log("successfully logging in");
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
          setSignInError(error.message);
        });
    } else {
      console.log("successfully signing up");
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          setSignInError(error.message);
        });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.formContainer}>
        <Form
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          <Form.Field
            name="email"
            leftIcon="email"
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Form.Field
            name="password"
            leftIcon="lock"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Field
            name="confirmPassword"
            leftIcon="lock"
            placeholder="Confirm password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Button
            title={(values) => (values.confirmPassword ? "Sign up" : "Log in")}
          />
          {<Form.ErrorMessage error={signInError} visible={true} />}
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccccb3",
  },
  formContainer: {
    width: 300,
  },
});

export default SignInScreen;
