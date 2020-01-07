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
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import codePush from "react-native-code-push";

type Props = {};

class App extends Component<Props> {
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

  onButtonPress = () => {
    this.setState({isShow: false})
  }

  render() {
    const {isShow} = this.state;
    return (
      isShow
      ? <View style={styles.container}>
          <Text style={styles.welcome}>Enjoy!!!</Text>
          <Text style={styles.welcome}>UPDATE DONE!!!</Text>
          <TouchableOpacity onPress={this.onButtonPress}>
            <Text>Click</Text>
          </TouchableOpacity>
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