/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,StyleSheet, Text, View} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}> Hello World ! </Text>
      </View>
      );
  }
}

class Bananas extends Component {
  render(){
    let pic = {
      uri: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjejq_YpubSAhXqhVQKHUNFDg4QjRwIBw&url=https%3A%2F%2Fforum.wordreference.com%2Fthreads%2Fa-bunch-of-bananas.3233625%2F&psig=AFQjCNFq2y99djdY5Rlm1ziwkrjILI_k_g&ust=1490141193327368"
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
