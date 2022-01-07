import React from "react";
import {
  Image, StyleSheet, Text, View, ScrollView
} from "react-native";
import { hp, wp } from "../helper/validation";

const StudentDetail = (props) => {
  const { navigation } = props;
  const { item } = navigation.state.params;
  const classnames = navigation.state.params.classname;
  return (
    <ScrollView contentContainerStyle={styles.modalWrap}>
      {
        item.gender === "male"
          ? <Image source={require("../images/stu_male.jpg")} style={styles.profileImg}/>
          : <Image source={require("../images/stud_female.png")} style={styles.profileImg}/>
      }
      <View style={styles.viewWrap}>
        <Text style={styles.label}>First Name:-</Text>
        <View style={{ width: wp(225) }}>
          <Text style={styles.value}>{item.firstname}</Text>
        </View>
      </View>
      <View style={styles.viewWrap}>
        <Text style={styles.label}>Last Name:-</Text>
        <View style={{ width: wp(225) }}>
          <Text style={styles.value}>{item.lastname}</Text>
        </View>
      </View>
      <View style={styles.viewWrap}>
        <Text style={styles.label}>Email:-</Text>
        <View style={{ width: wp(225) }}>
          <Text style={styles.value}>{item.email}</Text>
        </View>
      </View>
      <View style={styles.viewWrap}>
        <Text style={styles.label}>Address:-</Text>
        <View style={{ width: wp(225) }}>
          <Text style={styles.value}>{item.address}</Text>
        </View>
      </View>
      <View style={styles.viewWrap}>
        <Text style={styles.label}>Mobile No.:-</Text>
        <View style={{ width: wp(225) }}>
          <Text style={styles.value}>{item.phone}</Text>
        </View>
      </View>
      <View style={styles.viewWrap}>
        <Text style={styles.label}>Class(S):-</Text>
        <View style={{ width: wp(225) }}>
          <Text style={styles.value}>{classnames.join(", ")}</Text>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalWrap: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 10,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  viewWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  label: {
    color: "#01a699",
    width: "40%",
    fontSize: 20,
    paddingLeft: 15,
  },
  value: {
    fontSize: 20,
    paddingLeft: 15,
  },
  profileImg: {
    height: hp(120),
    width: wp(120),
    borderRadius: wp(120) / 2,
    alignSelf: "center",
    borderColor: "#000",
    borderWidth: 1,
    padding: 20
  }
});
export default StudentDetail;
