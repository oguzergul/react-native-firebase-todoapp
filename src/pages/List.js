import React, { Component } from "react";

import { View, Text, TouchableOpacity, Modal } from "react-native";

import ListModal from "./ListModal";

export default class List extends React.Component {
  state = {
    showListVisible: false,
  };

  toggleListModal() {
    this.setState({ showListVisible: !this.state.showListVisible });
  }

  render() {
    const list = this.props.list;

    return (
      <View>
        <Modal
          animationType="slide"
          visible={this.state.showListVisible}
          onRequestClose={() => this.toggleListModal}
        >
          <ListModal
            list={list}
            closeModal={() => this.toggleListModal()}
            updateList={this.props.updateList}
          />
        </Modal>

        <TouchableOpacity
          onPress={() => this.toggleListModal()}
          style={styles.listContainer}
        >
          <Text style={styles.listTitle}>{list.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  listContainer: {
    borderRadius: 10,
    marginVertical: 5,
    width: 360,
    height: 100,
    paddingLeft: 20,
    backgroundColor: "#E8DDF8",
    justifyContent: "center",
  },
  listTitle: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: "white",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "white",
  },
};
