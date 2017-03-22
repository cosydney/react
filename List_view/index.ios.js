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
  View,
  ListView
} from 'react-native';

class ListViewBasics extends Component {
  // initialiwe the hardcoded data
  constructor(props) {
  super (props);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows([
      'John le meilleur', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
  };
  }

   render () {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        </View>
      )
  }
}

AppRegistry.registerComponent('List_view', () => ListViewBasics);
