/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';

class Greeting extends Component {
  render () {
    return (
      <Text> Coucou {this.props.name}!</Text>
      )
    // let pic = {
    //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // };
    // return (
    //   <View style={styles.container}>
    //   <Image source={pic} style={{width: 193, height: 110}}/>
    //   );
  }
}

class  props extends Component {
  render (){
    return (
      <View style={styles.container}>
      <Greeting name='Sydney'/>
      <Greeting name='Arthur'/>
      <Greeting name='Geoffrey'/>
      <Greeting/>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('props', () => props);
