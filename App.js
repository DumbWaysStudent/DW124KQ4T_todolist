/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';


import { Container, Header, Content, Button, Text } from 'native-base';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import List from "./src/screens/List"
import EditList from "./src/screens/EditList"


const AppNavigator = createStackNavigator({
  List: {
    screen: List,
    navigationOptions:{
      title: 'Todo'
    }
  },
  EditList: {
    screen: EditList,
    navigationOptions:{
      title: 'Edit'
    }
  },
},
{
  initialRouteName: 'List',
});

export default createAppContainer(AppNavigator);
