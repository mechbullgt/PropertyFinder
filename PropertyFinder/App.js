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

// Adding navigation to the application
import { createStackNavigator } from 'react-navigation';

//3 Define component that represents the UI
type Props = {};

// Search Page Class.
class SearchPage extends Component<Props> {
  static navigationOptions = {
    title: "Property Finder",
  };
  render() {
    return (
      <Text style={styles.description}>Search Now for Houses on SALE!!!</Text>
    );
  }
}
// Search Component Page
const App = createStackNavigator({
  Home: { screen: SearchPage },
});
export default App;

//4 Creates a style object that controls the component’s layout and appearance.
const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  }
},
);
