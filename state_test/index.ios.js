/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MyAppText extends Component {
  render() {
      <Text>
        {this.props.children}
      </Text>
  }
}

class MyAppHeaderText extends Component {
  render() {
    <MyAppText>
    <Text style={{fontSize: 20}}>
      {this.props.children}
      </Text>
    </MyAppText>
  }
}

class state_test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleText: "Birds Nest.",
      bodyText: "Birds likes to sings. "
    };
  }

  render() {
    return (
      <Text style={styles.baseText}>
      {'\n'}
        <Text style={styles.titleText} onPress={() => this.onPressTitle}>
          {this.state.titleText}{'\n'}
        </Text>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>{'\n'}
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>
      )
  }
}

const styles = StyleSheet.create({
  baseText: {fontFamily: 'cochin',},
  titleText: {fontSize: 20, fontWeight: 'bold',},
  onPressTitle: {color: 'red',}, //TODO search for this
});

AppRegistry.registerComponent('state_test', () => state_test);


// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {showText: true};

//     // Toggle the state every second
//     setInterval(() => {
//       this.setState({ showText: !this.state.showText });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.showText ? this.props.text : 'Yila';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

// export default class state_test extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           "Welcome to React Native!"
//         </Text>
//         <Text style={styles.instructions, styles.bigblue}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//         <Text style={styles.lightgrey}>
//           <Blink text='Yala'/>
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },

//   bigblue: {
//   color: 'blue',
//   },

//   lightgrey: {
//   color: 'red',
//   },

//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });