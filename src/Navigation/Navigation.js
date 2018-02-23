import React from 'react';
import Text from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from '../Screens/Home';
import Details from '../Screens/Details';

export default Navigation = TabNavigator({
    Home: {
      screen: Home
    },
    Details: {
      screen: Details
    }
  }, {
    tabBarOptions: {
      showIcon: true
    }
  });