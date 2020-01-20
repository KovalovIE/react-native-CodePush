import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   isShow: false
    }
   }

  onButtonPress = () => {
    alert('click')
  }

  render() {
    const { btnRight, btnLeft } = this.props;
    return (
      <View style={styles.container}>
          <TouchableOpacity  style={styles.btn} onPress={this.onButtonPress}>
            <Text>{btnLeft}</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.btn} onPress={this.onButtonPress}>
            <Text>{btnRight}</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Buttons;

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
    backgroundColor: "green"
  }
});