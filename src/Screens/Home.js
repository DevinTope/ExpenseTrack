import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Button,
  Dimensions,
  Platform,
  ReactNative,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
const _ = require('lodash');
import { PieChart } from 'react-native-svg-charts'

export default class Home extends Component {
  static navigationOptions = { header: null };
  NewExpense = () =>
  {
     this.props.navigation.navigate('New');
  }

  render() {
    const scrnWidth = Dimensions.get('window').width;

    const dataArray = this.props.screenProps.itemArray;

    //type array creation
    var foodArray = (_.filter(dataArray, { type: 'food' }));
    var foodTotal = _.sumBy(foodArray,function(a){return a.price});

    var transArray = (_.filter(dataArray, { type: 'transportation' }));
    var transTotal = _.sumBy(transArray,function(a){return a.price});

    var persArray = (_.filter(dataArray, { type: 'personal' }));
    var persTotal = _.sumBy(persArray,function(a){return a.price});

    var otherArray = (_.filter(dataArray, { type: 'other' }));
    var otherTotal = _.sumBy(otherArray,function(a){return a.price});

    const data = [ foodTotal, transTotal, persTotal, otherTotal];

    var sum = data.reduce((a, b) => a + b, 0);
    const colours = ['#006bff', '#ffe38e', '#ff6700', '#85e266']

    const pieData = data
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            color: colours[index],
            key: `pie-${index}`,
            onPress: () => alert(`${value}`),
      })
    );

    return (

      <View style={styles.container}>

        <View style={styles.topRow}>

          <View style={styles.legend}>
            <View style={styles.row}>
              <View style={styles.blueCircle} />
              <Text style={styles.label}>
                Food
              </Text>
            </View>

            <View style={styles.row}>
              <View style={styles.yellowCircle} />
              <Text style={styles.label}>
                Transportation
              </Text>
            </View>

            <View style={styles.row}>
              <View style={styles.orangeCircle} />
              <Text style={styles.label}>
                Personal
              </Text>
            </View>

            <View style={styles.row}>
              <View style={styles.greenCircle} />
              <Text style={styles.label}>
                Other
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress = { this.NewExpense }>
            <Text style={{fontSize: 40}}>
            +
            </Text>
          </TouchableOpacity>
        </View>

          <PieChart
                  style={ 
                    { height: scrnWidth - 50,
                      width: scrnWidth - 50,
                      margin: 10, }
                    }
                  data={ pieData }
                  labelRadius={50}/>
          <Text style={styles.total}>
          ${sum.toFixed(2)}
          </Text>
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
  row:{
    flexDirection: 'row'
  },
  topRow:{
    flexDirection: 'row',
    width:'90%',
  },
  legend:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 15
  },
  button: {
    alignItems:'center',
    justifyContent: 'center',
    width:80,
    height:80,
    backgroundColor:'#5ec0db',
    borderRadius:80,
  },
  total: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  blueCircle: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    marginRight: 5,
    backgroundColor: '#006bff'
  },
  yellowCircle: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    marginRight: 5,
    backgroundColor: '#ffe38e'
  },
  orangeCircle: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    marginRight: 5,
    backgroundColor: '#ff6700'
  },
  greenCircle: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    marginRight: 5,
    backgroundColor: '#85e266'
  }
});