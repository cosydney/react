import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import MainPage from './app/components/MainPage';
import CreateTask from './app/components/CreateTask';
import ResetApp from './app/components/ResetApp';
import styles from './app/styles/styles';

export default class TodosApp extends Component {
  renderScene(route, navigator) {
    if (route.name === 'MainPage') {
      return (
        <MainPage navigator={ navigator }  />
      );
    }
    else if (route.name === 'CreateTask') {
      return (
        <CreateTask navigator={ navigator } createTask={ route.createTask } />
      );
    }
    else if (route.name === 'ResetApp') {
    return (
      <ResetApp navigator={ navigator } deleteAllTasks={ route.deleteAllTasks } />
    );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'MainPage' }}
        renderScene={ this.renderScene }
      />
    );
  }
}

AppRegistry.registerComponent('TodosApp', () => TodosApp);
