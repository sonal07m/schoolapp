/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  StyleSheet, Text, TouchableOpacity,
} from "react-native";
import { hp } from "../helper/validation";

const Button = ({ onClick, text }) => (
  <TouchableOpacity
    style={styles.submitButton}
    onPress={onClick}
  >
    <Text style={styles.submitButtonText}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#01a699",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 15,
    height: hp(40),
    borderRadius: hp(20)
  },
  submitButtonText: {
    color: "white"
  }
});
export default Button;
