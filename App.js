/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';


import { Container, Header, Content, Button, Text } from 'native-base';

import List from "./src/screens/List"

class App extends React.Component{
  render() {
    return (
      <List />
    );
  }
}



export default App;
