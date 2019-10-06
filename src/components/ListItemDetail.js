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
  Button,
  ListItem,
  Right,
  Icon
} from 'native-base';

class ListItemDetail extends React.Component{

    constructor(){
        super();
    }

  render() {
    return (
      <ListItem>
        <Body>
        <Text>{this.props.item}</Text>
        </Body>
        <Right>
        <Button rounded danger onPress={this.props.deleteItem.bind(this, this.props.id)} danger><Icon name='trash' /></Button></Right>
      </ListItem>
    );
  }
}



export default ListItemDetail;
