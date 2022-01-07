/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from "react";
import {
  StyleSheet, Text, View, SectionList, Image
} from "react-native";
import { connect } from "react-redux";
import { hp, wp } from "../helper/validation";


class Tab2 extends PureComponent {
  renderTeacherList = () => {
    const { teacherData } = this.props;
    return (
      <SectionList
        sections={[
          {
            title: "A",
            data: teacherData
          },
        ]}
        renderItem={({ item }) => (

          <View style={styles.listItemWrap}>
            {
              item.gender === "male"
                ? <Image source={require("../images/man.jpg")} style={styles.profileImg} />
                : <Image source={require("../images/woman.png")} style={styles.profileImg} />
            }
            <View>
              <Text style={styles.itemText}>{`${item.firstname} ${item.lastname}`}</Text>
              <Text style={styles.itemText}>{item.email}</Text>
            </View>
          </View>

        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        keyExtractor={(item, index) => index}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderTeacherList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  rowDirection: {
    flexDirection: "row"
  },
  modalWrap: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 10,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  classHeader: {
    fontWeight: "bold",
    color: "#01a699",
    fontSize: 18
  },
  errText: { color: "red" },
  listItemWrap: {
    flex: 1,
    flexDirection: "row",
    height: hp(80),
    backgroundColor: "#b2e4e0",
    padding: 10
  },
  itemText: {
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: 5
  },
  actionsBtnWrap: {
    flex: 0.4,
    padding: 5,
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center"
  },
  updateBtn: {
    backgroundColor: "#e5f6f4",
    padding: 7,
    borderRadius: 5
  },
  deleteBtn: {
    backgroundColor: "#ff7f7f",
    marginLeft: 20,
    padding: 7,
    borderRadius: 5
  },
  itemSeparator: {
    height: 1,
    backgroundColor: "#000"
  },
  profileImg: {
    height: hp(60),
    width: wp(60),
    borderRadius: wp(30),
    alignSelf: "center",
  },
});

const mapStateToProps = state => ({
  teacherData: state.teacherReducer.teacher
});

export default connect(mapStateToProps, {})(Tab2);
