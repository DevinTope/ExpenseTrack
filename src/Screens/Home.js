import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Button,
  Platform,
  ReactNative,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'



export default class Home extends Component {
  static navigationOptions = { header: null };
  NewExpense = () =>
  {
     this.props.navigation.navigate('New');
  }

  render() {
    const data = [ 352.34, 32.34, 234 ];

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7);

    const pieData = data
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            color: randomColor(),
            key: `pie-${index}`,
            onPress: () => console.log(`${index} slice pressed`),
        }));

    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home Screen
        </Text>
        <PieChart
                style={ 
                  { height: 200,
                    width: 200,
                    margin: 10, }
                  }
                data={ pieData }/>
        <Button onPress = { this.NewExpense } title = 'Add a new expense'/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
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
  }
});