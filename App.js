import React, { Component } from "react";
import { View, FlatList, Modal, ActivityIndicator } from "react-native";

import Button from "./src/components/Button";
import List from "./src/pages/List";
import AddList from "./src/pages/AddList";
import Fire from "./src/utils/Fire";
import PrimaryTitle from "./src/components/primarytitle";

export default class App extends React.Component {
  state = {
    addTodoVisible: false,
    lists: [],
    user: {},
    loading: true,
  };

  componentDidMount() {
    firebase = new Fire((error, user) => {
      if (error) {
        return alert("Bir hata oldu");
      }

      firebase.getLists((lists) => {
        this.setState({ lists, user }, () => {
          this.setState({ loading: false });
        });
      });

      this.setState({ user });
    });
  }

  componentWillUnmount() {
    firebase.detach();
  }

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }

  renderList = (list) => {
    return <List list={list} updateList={this.updateList} />;
  };

  addList = (list) => {
    firebase.addList({
      name: list.name,
      todos: [],
    });
  };

  updateList = (list) => {
    firebase.updateList(list);
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}
        >
          <AddList
            closeModal={() => this.toggleAddTodoModal()}
            addList={this.addList}
          />
        </Modal>

        <PrimaryTitle titleText="Listelerim" />
        <View style={{ flex: 1, marginTop: 20, marginBottom: 20 }}>
          <FlatList
            data={this.state.lists}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
          />
        </View>

        <Button
          onPress={() => this.toggleAddTodoModal()}
          title="Yeni Liste Oluştur"
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
};
