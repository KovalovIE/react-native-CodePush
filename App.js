// class App extends Component<Props> {
  
//   onButtonPress() {
//     // codePush.sync({
//     //   updateDialog: true,
//     //   installMode: codePush.InstallMode.IMMEDIATE
//     // });
//     alert('Hello')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Enjoy!!!</Text>
//         <Text style={styles.welcome}>UHUHUHUH!!!</Text>
//         {/* <TouchableOpacity onPress={this.onButtonPress}>
//           <Text>Hello</Text>
//         </TouchableOpacity> */}
//       </View>
//     );
//   }
// }

// export default codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_START })(App);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import codePush from "react-native-code-push";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

class App extends Component<Props> {
  
  onButtonPress() {
    // codePush.sync({
    //   updateDialog: true,
    //   installMode: codePush.InstallMode.IMMEDIATE
    // });
    alert('Hello')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Enjoy!!!</Text>
        {/* <TouchableOpacity onPress={this.onButtonPress}>
          <Text>Hello</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

App = codePush(App);

export default App;

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
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});