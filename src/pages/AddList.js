import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";

import Button from "../components/Button";
import PrimaryTitle from "../components/primarytitle";
import Input from "../components/Input";

export default class AddList extends React.Component {
  state = {
    name: "",
  };

  createTodo = () => {
    const { name } = this.state;

    const list = { name };

    this.props.addList(list);

    this.setState({ name: "" });
    this.props.closeModal();
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={this.props.closeModal}>
            <Image
              style={styles.image}
              source={require("../icons/back.png")}
            ></Image>
          </TouchableOpacity>

          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <PrimaryTitle titleText="Liste Ekle" />
          </View>
        </View>

        <View
          style={{ alignSelf: "center", alignSelf: "stretch", padding: 20 }}
        >
          <Input
            onChangeText={(text) => this.setState({ name: text })}
            style={styles.input}
            placeholder="Listenize İsim Verin"
          />
        </View>

        <Button title="Oluştur" onPress={this.createTodo} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  image: {
    marginLeft: 20,
    height: 40,
    width: 40,
    marginTop: 40,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "blue",
    borderRadius: 10,
    height: 60,
    marginTop: 10,
    paddingHorizontal: 16,
    fontSize: 18,
    width: "100%",
  },
  create: {
    marginTop: 24,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
};
