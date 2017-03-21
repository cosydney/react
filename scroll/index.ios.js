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
  ScrollView,
  Image,
} from 'react-native';

export default class scroll extends Component {
  render() {
    return (
      <ScrollView>
      <View style={{flex: 0,
      alignItems: 'center',
      }}>
        <Text style={{fontSize: 50, paddingTop: 20, color: 'steelblue'}}>Scroll me please</Text>
        <Text style={{fontSize: 20}}> Image para </Text>
        <Image style={{height: 100, width: 170}} source={require('./img/test.jpg')}/>
        <Text style={{fontSize: 20}}> Image 2 </Text>
        <Image style={{height: 100, width: 170}} source={require('./img/teste.jpg')}/>
        <Text style={{fontSize: 20}}> Image 3 </Text>
        <Image style={{height: 100, width: 170}} source={require('./img/tester.jpg')}/>
        <Text style={{fontSize: 20}}> Repeat </Text>
        <Text style={{fontSize: 50}}>Scroll yourself</Text>
        <Text style={{fontSize: 20}}> Image para </Text>
        <Image style={{height: 100, width: 170}} source={require('./img/test.jpg')}/>
        <Text style={{fontSize: 20}}> Image 2 </Text>
        <Image style={{height: 100, width: 170}} source={require('./img/teste.jpg')}/>
        <Text style={{fontSize: 20}}> Image 3 </Text>
        <Image style={{height: 100, width: 170}} source={require('./img/tester.jpg')}/>
        <Text style={{fontSize: 20}}> Repeat </Text>
        <Text style={{fontSize: 50}}>Enough scrolling</Text>
        <Text style={{fontSize: 20}}> Image para </Text>
        <Image style={{height: 100, width: 170}} source={require('./img/test.jpg')}/>
        <Text style={{fontSize: 20}}> Image 2 </Text>
        <Image style={{height: 100, width: 170}} source={require('./img/teste.jpg')}/>
        <Text style={{fontSize: 20}}> Image 3 </Text>
        <Image style={{height: 100, width: 170}} source={require('./img/tester.jpg')}/>
        <Text style={{fontSize: 20}}> Repeat </Text>
      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('scroll', () => scroll);
