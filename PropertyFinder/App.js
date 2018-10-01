/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 //String Mode, for better Error handling.
 'use strict';

//1 Importing modules
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native';

//2 Setting up platform-specific display message
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//3 Define component that represents the UI
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button style={styles.developer} title="byMacbool"></Button>
      </View>
    );
  }
}

//4 Creates a style object that controls the component’s layout and appearance.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc',
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
  developer:{
    textAlign:'center',
    color: '#E91E63',
    marginBottom:10,
    backgroundColor:"#FFEB3B"
  },
});
