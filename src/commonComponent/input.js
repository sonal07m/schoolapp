/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  StyleSheet, TextInput,
} from "react-native";
import { hp, wp } from "../helper/validation";

const Input = ({
  value, placeholder, keyboardType, handleInputChange
}) => (
  <TextInput
    style={styles.input}
    value={value}
    underlineColorAndroid="transparent"
    placeholder={placeholder}
    placeholderTextColor="#9EA0A4"
    autoCapitalize="none"
    keyboardType={keyboardType}
    onChangeText={handleInputChange}
  />
);

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: hp(40),
    width: wp(170),
    paddingLeft: 10,
    borderColor: "#01a699",
    borderWidth: 1,
    borderRadius: 5
  },
});
export default Input;
