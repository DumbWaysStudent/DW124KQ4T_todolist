/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  Body,
  CardItem,
  Card
} from 'native-base';

class ListItem extends React.Component{

    constructor(){
        super();
    }
  render() {
    return (
      <Card>
      <CardItem>
        <Body>
            <Text>{this.props.item}</Text>
        </Body>
        </CardItem>
        </Card>
    );
  }
}



export default ListItem;
