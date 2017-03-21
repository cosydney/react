/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{padding: 15}}>
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fintSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🚀').join(' ')}
        </Text>
      </View>
      )
  }
}


class FixedDimensionBasics extends Component {
  render () {
    return (
      <View style={{flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      </View>
      );
  }
}

AppRegistry.registerComponent('width_height', () => PizzaTranslator);

