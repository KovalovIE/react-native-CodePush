/* eslint-disable */
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import codePush from "react-native-code-push";
import Buttons from "./app/components/Buttons/button";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
   }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isShow: true})
    }, 3000)
  }

  render() {
    const { isShow } = this.state;
    return (
      isShow
      ? <View style={styles.container}>
          {/* <Text style={styles.welcome}>WORK Project</Text> */}
          <Text style={styles.welcome}>UPDATE</Text>
          {/* <TouchableOpacity onPress={this.onButtonPress}>
            <Text style={styles.welcome}>Click</Text>
          </TouchableOpacity> */}
          <Buttons btnRight='btnRight' btnLeft='btnLeft' />
        </View>
      : <Text style={styles.welcome}>SplashScreen</Text>
    );
  }
}

const codePushOptions = { 
  installMode: codePush.InstallMode.ON_NEXT_RESTART, 
  checkFrequency: codePush.CheckFrequency.ON_APP_START 
};

export default codePush(codePushOptions)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});