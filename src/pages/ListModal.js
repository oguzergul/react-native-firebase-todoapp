import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";

import PrimaryTitle from "../components/primarytitle";

export default class ListModal extends React.Component {
  state = {
    newTodo: "",
  };

  toggleTodoCompleted = (index) => {
    let list = this.props.list;
    list.todos[index].completed = !list.todos[index].completed;

    this.props.updateList(list);
  };

  addTodo = () => {
    let list = this.props.list;
    list.todos.push({ title: this.state.newTodo, completed: false });

    this.props.updateList(list);
    this.setState({ newTodo: "" });
  };

  renderTodo = (todo, index) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
          <Image
            source={
              todo.completed
                ? require("../icons/true.png")
                : require("../icons/false.png")
            }
            style={{ height: 30, width: 30 }}
          ></Image>
        </TouchableOpacity>

        <Text
          style={[
            styles.todo,
            {
              textDecorationLine: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "black",
            },
          ]}
        >
          {todo.title}
        </Text>
      </View>
    );
  };

  render() {
    const list = this.props.list;

    const taskCount = list.todos.length;
    const completedCount = list.todos.filter((todo) => todo.completed).length;

    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={this.props.closeModal}>
              <Image
                style={styles.image}
                source={require("../icons/back.png")}
              ></Image>
            </TouchableOpacity>
            <View>
              <PrimaryTitle titleText={list.name} />
            </View>
          </View>

          <View style={[styles.section, { flex: 6 }]}>
            <FlatList
              data={list.todos}
              renderItem={({ item, index }) => this.renderTodo(item, index)}
              keyExtractor={(_, index) => index.toString()}
              contentContainerStyle={{
                paddingHorizontal: 32,
                paddingVertical: 25,
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={styles.footer}>
            <TextInput
              style={[styles.input, { borderColor: "#000000", borderWidth: 2 }]}
              onChangeText={(text) => this.setState({ newTodo: text })}
              value={this.state.newTodo}
            />
            <TouchableOpacity
              style={[styles.addTodo, { backgroundColor: "#8A56DE" }]}
              onPress={() => this.addTodo()}
            >
              <Text style={{ fontSize: 30, color: "white" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingRight: 20,
  },
  image: {
    height: 30,
    width: 30,
    marginTop: 40,
    marginRight: 15,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "black",
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: "gray",
    fontWeight: "600",
  },
  footer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 55,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 10,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  addTodo: {
    borderRadius: 4,
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginBottom: 10,
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    color: "black",
    fontWeight: "700",
    fontSize: 22,
    marginLeft: 10,
  },
};
