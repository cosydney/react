import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Style from '../style/Style';

export default class InputButton extends Component {
  render() {
    return(
      <View style={ Style.inputButton}>
        <Text style={ Style.inputButtonText}>{this.props.value}</Text>
      </View>
    )
  }
}
