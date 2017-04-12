
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Navigator,
  TouchableHighlight,
} from 'react-native';

export default class nav extends Component {
  render() {
    const routes = [
      {title: 'First Scene here', index: 0},
      {title: 'Second Scene here', index: 1},
      {title: 'Third scene', index: 2},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
          }}>
          <Text style={{
            backgroundColor: 'steelblue',
            padding: 10,
            color: 'white',
            opacity: 0.8}} >
          Hello {route.title}!</Text>
          </TouchableHighlight>
        }
        // configureScene={(route, routeStack) =>
        //   Navigator.SceneConfigs.VerticalUpSwipeJump}

        navigationBar={
         <Navigator.NavigationBar
           routeMapper={{
             LeftButton: (route, navigator, index, navState) =>
              {
                if (route.index === 0) {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                      <Text>Back</Text>
                    </TouchableHighlight>
                  );
                }
              },

         RightButton: (route, navigator, index, navState) =>
           {
             if (route.index === 1) {
               return null;
             } else {
               return (
               <TouchableHighlight onPress={() =>
                 navigator.push(routes[1])}>
                  <Text>Next</Text>
                 </TouchableHighlight>
                );
               }
           },
           Title: (route, navigator, index, navState) =>
             {
               return(
                 <TouchableHighlight onPress={() =>
                   navigator.push(routes[2])}>
                  <Text>Awesome Nav Bar</Text>
                </TouchableHighlight>)
             },
             }}
           style={{backgroundColor: 'lightgray'}}
            />
          }
        style={{padding: 100}}
      />
    );
  }
}

AppRegistry.registerComponent('nav', () => nav);
