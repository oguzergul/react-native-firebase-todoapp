import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, title }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.buttontext}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 380,
    backgroundColor: "#8A56DE",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  buttontext: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Button;
