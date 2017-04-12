import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import TasksList from './TasksList';
import styles from '../styles/styles';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [{ name: '1st Todo', title: 'Make to do app', email:'arthur@gmail.com'}] };
    this.createTask = this.createTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.deleteAllTasks = this.deleteAllTasks.bind(this)
  }

  createTask(task) {
    let tasks = this.state.tasks;
    tasks.push(task)
    this.setState({ tasks: tasks })
  }

  deleteTask(index) {
  let tasks = this.state.tasks;
  tasks.splice(index, 1);
  this.setState({ tasks: tasks })
  }

  deleteAllTasks() {
    this.setState({ tasks: [] })
  }


  render() {
    return (
      <View style={{ flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around'
     }}>
        <View style={{ flex: 1 }}>
          <TouchableHighlight
          onPress={ () => this.props.navigator.push({ name: 'ResetApp', deleteAllTasks: this.deleteAllTasks }) }>
            <Text style={ styles.settings }> Settings </Text>
          </TouchableHighlight>
          <View style={{ flex: 1 }}>
          <TasksList
            tasks={ this.state.tasks }
            deleteTask={ this.deleteTask }
          />
          </View>
        </View>
        <View style={{ }}>
        <TouchableHighlight
          onPress={ () => this.props.navigator.push({ name: 'CreateTask', createTask: this.createTask }) }
          style={ styles.newTaskButton }
        >
          <Text style={ styles.newText}>New to do</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}
