/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from "react";
import {
  StyleSheet, Text, View, SectionList, TouchableOpacity, Image
} from "react-native";
import Modal from "react-native-modal";
import RNPickerSelect from "react-native-picker-select";
import RadioForm from "react-native-simple-radio-button";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { validateEmail, hp, wp } from "../helper/validation";

import { addStudent, deleteStudent, editStudent } from "../actions/studentAction";
import FabIcon from "../commonComponent/fabIcon";
import Input from "../commonComponent/input";
import Button from "../commonComponent/button";

const intialState = {
  classnames: [],
  firstname: "",
  lastname: "",
  email: "",
  address: "",
  phone: "",
  stuId: "",
  classId: "",
  classIDs: [],
  edit: false,
  errMsg: "",
  gender: 0,
};

class Tab1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = intialState;
  }

  toggleModal = () => {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible, ...intialState });
  };

  handleInputChange = (key, text) => {
    this.setState({ [key]: text });
  };

  createStudent = () => {
    const {
      firstname, lastname, email, address, phone,
      classId, gender, edit, classIDs, isModalVisible, stuId
    } = this.state;
    const { editStudent, addStudent } = this.props;
    const emailValid = validateEmail(email);
    if (firstname && lastname && email && address && phone && classId) {
      if (emailValid) {
        if (edit) {
          if (!classIDs.includes(classId)) {
            classIDs.push(classId);
            const obj = {
              firstname,
              lastname,
              email,
              address,
              phone,
              classId: classIDs,
              gender: gender === 0 ? "female" : "male"
            };
            editStudent(stuId, obj);
            this.setState({
              edit: false,
              isModalVisible: !isModalVisible
            });
          } else {
            this.setState({
              errMsg: "Already in selected class",
            });
          }
        } else {
          const {
            firstname, lastname, email, address, phone, classId, gender
          } = this.state;
          const obj = {
            firstname,
            lastname,
            email,
            address,
            phone,
            classId: [classId],
            gender: gender === 0 ? "female" : "male"
          };
          addStudent(obj);
          this.setState({
            edit: false,
            isModalVisible: !isModalVisible
          });
        }
      } else {
        this.setState({
          errMsg: "Please enter valid Email"
        });
      }
    } else {
      this.setState({
        errMsg: "Please fill all data"
      });
    }
  };

  getClassNameFormId = classId => classId.map((number) => {
    const { classData } = this.props;
    const data = classData.find(data => data.id === number);
    return data && data.name;
  });

  editStudent = item => () => {
    const { isModalVisible } = this.state;

    this.setState({
      stuId: item.id,
      firstname: item.firstname,
      lastname: item.lastname,
      email: item.email,
      address: item.address,
      phone: item.phone,
      gender: item.gender === "female" ? 0 : 1,
      edit: true,
      classnames: this.getClassNameFormId(item.classId),
      classIDs: item.classId,
      isModalVisible: !isModalVisible
    });
  };

  deleteStudent = id => () => {
    const { deleteStudent } = this.props;
    deleteStudent(id);
  };

  getClassData = () => {
    const { classData } = this.props;
    return classData.map(data => ({
      label: data.name,
      value: data.id
    }));
  };

  renderClassList = () => {
    const { studentData, navigation } = this.props;
    return (
      <SectionList
        sections={[
          {
            title: "A",
            data: studentData
          },
        ]}
        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.listItemWrap}
            onPress={() => navigation.navigate("StudentDetail", {
              item,
              classname: this.getClassNameFormId(item.classId)
            })}
          >
            {
              item.gender === "male"
                ? <Image source={require("../images/stu_male.jpg")} style={styles.profileImg} />
                : <Image source={require("../images/stud_female.png")} style={styles.profileImg} />
            }
            <Text style={styles.itemText}>{item.firstname}</Text>
            <View style={styles.actionsBtnWrap}>
              <TouchableOpacity style={styles.updateBtn} onPress={this.editStudent(item)}>
                <Text>update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={this.deleteStudent(item.id)}
              >
                <Text>delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        keyExtractor={(item, index) => index}
      />
    );
  };

  renderStudentForm = () => {
    const classes = this.getClassData();
    const placeholder = {
      label: "Select a class...",
      value: null,
      color: "#9EA0A4",
    };
    const radioProps = [
      {
        label: "Female",
        value: 0
      },
      {
        label: "Male",
        value: 1
      }
    ];
    const {
      firstname, lastname, email, address, phone,
      classId, gender, classnames, edit, errMsg
    } = this.state;
    return (
      <View style={styles.modalWrap}>
        <Text style={styles.classHeader}>Add Student</Text>
        <View style={styles.formContent}>
          <Text style={styles.formLabel}>First Name</Text>
          <View style={{ width: wp(200) }}>
            <Input
              value={firstname}
              handleInputChange={value => this.handleInputChange("firstname", value)}
              placeholder="Enter student First Name"
            />
          </View>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formLabel}>Last Name</Text>
          <View style={{ width: wp(200) }}>
            <Input
              value={lastname}
              handleInputChange={value => this.handleInputChange("lastname", value)}
              placeholder="Enter student Last Name"
            />
          </View>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formLabel}>E-mail Id </Text>
          <View style={{ width: wp(200) }}>
            <Input
              value={email}
              handleInputChange={value => this.handleInputChange("email", value)}
              placeholder="Enter student Email"
            />
          </View>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formLabel}>Home Add</Text>
          <View style={{ width: wp(200) }}>
            <Input
              value={address}
              handleInputChange={value => this.handleInputChange("address", value)}
              placeholder="Enter student Address"
            />
          </View>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formLabel}>Mobile No</Text>
          <View style={{ width: wp(200) }}>
            <Input
              value={phone}
              handleInputChange={value => this.handleInputChange("phone", value)}
              placeholder="Enter student Mobile Number"
              keyboardType="numeric"
            />
          </View>
        </View>
        {classnames.length > 0
        && (
          <Text style={styles.classnames}>
            Include in
            {classnames.join(", ")}
            class(S)
          </Text>
        )}
        <RNPickerSelect
          placeholder={placeholder}
          items={classes}
          onValueChange={value => this.handleInputChange("classId", value)}
          style={pickerSelectStyles}
          value={classId}
        />
        <View style={styles.formContent}>
          <RadioForm
            radio_props={radioProps}
            initial={gender}
            formHorizontal
            labelHorizontal
            selectedButtonColor="#01a699"
            buttonColor="#01a699"
            onPress={value => this.handleInputChange("gender", value)}
            buttonSize={12}
            style={{ marginTop: 15 }}
            labelStyle={{ marginRight: 10 }}
          />
        </View>
        <View style={styles.rowDirection}>
          <Button text={edit ? "Edit" : "Create"} onClick={this.createStudent} />
          <Button text="cancel" onClick={this.toggleModal} />
        </View>
        <Text style={styles.errText}>{errMsg}</Text>
      </View>
    );
  };

  render() {
    const { isModalVisible } = this.state;
    return (
      <View style={styles.container}>
        {this.renderClassList()}
        <FabIcon onClick={this.toggleModal} />
        <Modal isVisible={isModalVisible}>
          {this.renderStudentForm()}
        </Modal>
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
    paddingVertical: hp(15),
    borderRadius: hp(10),
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  classHeader: {
    fontWeight: "bold",
    color: "#01a699",
    fontSize: wp(18),
  },
  errText: { color: "red" },
  listItemWrap: {
    flex: 1,
    flexDirection: "row",
    height: hp(80),
    backgroundColor: "#b2e4e0",
    padding: hp(10)
  },
  itemText: {
    flex: 0.6,
    alignSelf: "center",
    marginLeft: hp(10)
  },
  actionsBtnWrap: {
    flex: 0.4,
    padding: hp(5),
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginRight: hp(20)
  },
  updateBtn: {
    backgroundColor: "#e5f6f4",
    padding: hp(7),
    borderRadius: hp(5)
  },
  deleteBtn: {
    backgroundColor: "#ff7f7f",
    marginLeft: wp(20),
    padding: hp(7),
    borderRadius: hp(5)
  },
  itemSeparator: {
    height: 1,
    backgroundColor: "#000"
  },
  profileImg: {
    height: hp(60),
    width: wp(60),
    borderRadius: wp(60) / 2,
    alignSelf: "center",
  },
  formContent: {
    flexDirection: "row",
    alignItems: "center"
  },
  formLabel: {
    color: "#01a699",
    width: wp(90),
    fontSize: hp(15),
    marginLeft: wp(15),
  },
  classnames: {
    color: "#01a699",
    fontSize: wp(15),
    paddingLeft: hp(15),
  }
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginTop: hp(15),
    width: wp(170),
    height: hp(40),
    alignSelf: "center",
    fontSize: hp(16),
    padding: hp(10),
    borderWidth: 1,
    borderColor: "#01a699",
    borderRadius: hp(4),
    color: "black",
    paddingRight: wp(30), // to ensure the text is never behind the icon
  },
  inputAndroid: {
    width: wp(170),
    height: hp(40),
    fontSize: wp(16),
    borderWidth: wp(2),
    borderColor: "#01a699",
    borderRadius: wp(8),
    color: "black",
    alignSelf: "center",
    paddingRight: wp(30), // to ensure the text is never behind the icon
  },
});
const mapStateToProps = state => ({
  studentData: state.studentReducer.student,
  classData: state.classReducer.classData
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addStudent,
  editStudent,
  deleteStudent
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);
