'use strict';

import React from 'react-native';
import {Actions} from 'react-native-router-flux';
const {View, Text, StyleSheet, TouchableHighlight} = React;

class Dashboard extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Dashboard page</Text>
        <Text>This is the first page and it contains a dashboard</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

module.exports = Dashboard;