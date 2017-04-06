import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Style from '../style/Style';

export default class InputButton extends Component {
  render() {
    return(
      <TouchableHighlight style={[Style.inputButton,
        this.props.hightlight ? Style.inputButtonHighlighted : null]}
                          underlayColor="#193441"
                          onPress={this.props.onPress}>
        <Text style={ Style.inputButtonText}>{this.props.value}</Text>
        </TouchableHighlight>
    )
  }
}
