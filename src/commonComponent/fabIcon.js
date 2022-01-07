/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  StyleSheet, TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { hp, wp } from "../helper/validation";

const FabIcon = ({ onClick }) => (
  <TouchableOpacity style={styles.fabIcon} onPress={onClick}>
    <Ionicons name="plus" size={wp(30)} color="#01a699" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  fabIcon: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: wp(60),
    position: "absolute",
    bottom: hp(10),
    right: wp(15),
    height: hp(60),
    backgroundColor: "#fff",
    borderRadius: wp(60) / 2,
  }
});
export default FabIcon;
