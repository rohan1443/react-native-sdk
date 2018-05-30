/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Checkbox
} from 'react-native';

import CheckBox from './src/components/vanilla-checkbox'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const checkBoxItems = [
  {
    itemName: 'Rohan',
    selected: true,
    disabled: true,
    controlled: false
  },
  {
    itemName: 'Rahul',
    selected: false,
    disabled: false,
    controlled: false
  },
  {
    itemName: 'Manoj',
    selected: true,
    disabled: false,
    controlled: true
  }
]

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          CHECKBOXES
        </Text>
        {
          checkBoxItems.map((item, key) => {
            return <CheckBox title={item.itemName} key={key} selected={item.selected} disabled={item.disabled} controlled={item.controlled} />
          })
        }

      </View>
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
