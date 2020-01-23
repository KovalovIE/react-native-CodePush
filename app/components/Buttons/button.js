/* eslint-disable */
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Buttons(props) {
  const { btnLeft, btnRight } = props;

  onButtonPress = () => {
    alert('click')
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity  style={styles.btn} onPress={onButtonPress}>
          <Text>{btnLeft}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.btn} onPress={onButtonPress}>
          <Text>{btnRight}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    
  },
  btn: {
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "green"
  }
});