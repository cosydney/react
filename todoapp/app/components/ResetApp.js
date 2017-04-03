import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../styles/styles';

export default class ResetApp extends Component {
  delete() {
    this.props.deleteAllTasks()
    this.props.navigator.pop()
  }

  retour(){
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style= {{ flex: 1}}>
        <View>
        <TouchableHighlight
          style = { styles.retour }
          onPress={ this.retour.bind(this) }>
          <Text style={ styles.retourText }>Retour</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.delete }>
          <View>
            <TouchableHighlight
              style={ styles.deleteAllButton }
              onPress={ this.delete.bind(this) }>
              <Text style={ styles.buttonTextDelete }>Delete all Todos</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
