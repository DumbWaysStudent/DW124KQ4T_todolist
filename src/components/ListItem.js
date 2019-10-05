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
  Card,
  Button
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
            <Button onPress={this.props.deleteItem.bind(this, this.props.id)} danger><Text>Delete</Text></Button>
        </Body>
        </CardItem>
        </Card>
    );
  }
}



export default ListItem;
