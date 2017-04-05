import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import Style from '../style/Style';
import Button from './InputButton';

export default class calculator extends Component {
  render() {
    return (
      <View style={ Style.rootContainer }>
        <View style={ Style.displayContainer}></View>
        <View style={ Style.inputContainer }></View>
      </View>
    );
  }
}

AppRegistry.registerComponent('calculator', () => calculator);
