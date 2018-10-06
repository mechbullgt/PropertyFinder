'use strict';

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
});
export default App;