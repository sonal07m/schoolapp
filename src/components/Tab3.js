/* eslint-disable react/destructuring-assignment */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from "react";
import {
  StyleSheet, Text, View, SectionList, TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Modal from "react-native-modal";
import { addClass, editClass, deleteClass } from "../actions/classActions";
import FabIcon from "../commonComponent/fabIcon";
import Input from "../commonComponent/input";
import Button from "../commonComponent/button";
import { hp } from "../helper/validation";

const intialState = {
  className: "",
  edit: false,
  errMsg: "",
};

class Tab3 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = intialState;
  }

  toggleModal = () => {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible, ...intialState });
  };

  handleClassName = (text) => {
    this.setState({ className: text });
  }

  createClass = () => {
    if (this.state.className) {
      if (this.state.edit) {
        this.props.editClass(this.state.classId, this.state.className);
      } else {
        this.props.addClass(this.state.className);
      }
      this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible, edit: false }));
    } else {
      this.setState({
        errMsg: "Please enter Class name"
      });
    }
  }

  editClass = item => () => {
    this.setState(prevState => ({
      classId: item.id,
      className: item.name,
      edit: true,
      isModalVisible: !prevState.isModalVisible
    }));
  }

  deleteClass = id => () => {
    this.props.deleteClass(id);
  }

  renderClassList = () => (
    <SectionList
      sections={[
        { title: "A", data: this.props.classData },
      ]}
      renderItem={({ item }) => (

        <View style={styles.listItemWrap}>
          <Text style={styles.itemText}>{item.name}</Text>
          <View style={styles.actionsBtnWrap}>
            <TouchableOpacity style={styles.updateBtn} onPress={this.editClass(item)}>
              <Text>update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={this.deleteClass(item.id)}
            >
              <Text>delete</Text>
            </TouchableOpacity>
          </View>
        </View>

      )}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      keyExtractor={(item, index) => index}
    />
  )

  renderClassForm = () => (
    <View style={styles.modalWrap}>
      <Text style={styles.classHeader}>Add Class</Text>
      <Input
        value={this.state.className}
        handleInputChange={this.handleClassName}
        placeholder="Enter class name"
      />
      <View style={styles.rowDirection}>
        <Button text={this.state.edit ? "Edit" : "Create"} onClick={this.createClass} />
        <Button text="cancel" onClick={this.toggleModal} />
      </View>
      <Text style={styles.errText}>{this.state.errMsg}</Text>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        {this.renderClassList()}
        <FabIcon onClick={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          {this.renderClassForm()}
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
    backgroundColor: "white", paddingVertical: 15, borderRadius: 10, height: "auto", alignItems: "center", justifyContent: "center",
  },
  classHeader: { fontWeight: "bold", color: "#01a699", fontSize: 18 },
  errText: { color: "red" },
  listItemWrap: {
    flex: 1, flexDirection: "row", height: hp(80), backgroundColor: "#b2e4e0", padding: 10
  },
  itemText: { flex: 0.6, alignSelf: "center" },
  actionsBtnWrap: {
    flex: 0.4, padding: 5, height: "auto", flexDirection: "row", justifyContent: "center", alignSelf: "center"
  },
  updateBtn: { backgroundColor: "#e5f6f4", padding: 7, borderRadius: 5 },
  deleteBtn: {
    backgroundColor: "#ff7f7f", marginLeft: 20, padding: 7, borderRadius: 5
  },
  itemSeparator: { height: 1, backgroundColor: "#000" }
});

const mapStateToProps = state => ({
  classData: state.classReducer.classData
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addClass,
  editClass,
  deleteClass
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Tab3);
