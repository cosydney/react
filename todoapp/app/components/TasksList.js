import React, { Component } from 'react';
import {
  ListView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../styles/styles';

export default class TasksList extends Component {

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  renderRow(rowData, sectionID, rowID) {
    console.log(rowData)
    return (
      <View style={ styles.taskItem }>
      <View style={{ flex: 1}}>
        <Text>{ rowData.title }</Text>
        </View>
        <View style={ styles.remove}>
        <TouchableHighlight
          style={ styles.deleteTaskButton }
          onPress={ () => this.props.deleteTask(rowID) }
        >
          <Text style= { styles.removeText }>Remove</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }

  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.tasks);
    return (
      <ListView
        dataSource={ dataSource }
        renderRow={ this.renderRow.bind(this) }
        style={styles.listView}
        enableEmptySections
      />
    );
  }
}
