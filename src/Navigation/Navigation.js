import React from 'react';
import Text from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from '../Screens/Home';
import New from '../Screens/New';
import Details from '../Screens/Details';

export default Navigation = TabNavigator({
    Home: {
      screen: StackNavigator({
        Home: { 
          screen : Home
        },
        New: { 
          screen: New
        }  
      })
    },
    Details: { 
      screen: Details
     },
  }, {
    tabBarOptions: {
      showIcon: false
    }
  });