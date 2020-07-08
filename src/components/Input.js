import React from "react";
import { View, Text, TextInput } from "react-native";

const Input = ({ title, placeholder, onChangeText }) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={styles.input}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
};

const styles = {
  input: {
    height: 60,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    width: "100%",
    paddingLeft: 15,
  },
  label: {
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "1%",
    fontSize: 16,
  },
};

export default Input;
