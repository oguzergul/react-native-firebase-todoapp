import React from "react";
import { Text, View } from "react-native";

const PrimaryTitle = (props) => {
  return (
    <View style={{ marginTop: 25 }}>
      <Text style={styles.textStyle}>{props.titleText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    color: "#484848",
    fontSize: 35,
    fontWeight: "bold",
  },
};

export default PrimaryTitle;
