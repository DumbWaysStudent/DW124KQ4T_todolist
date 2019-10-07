/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Text,
  Body,
  CheckBox,
  Button,
  ListItem,
  Icon,
  Right
} from 'native-base';

class ListItemDetail extends React.Component{

    constructor(){
        super();
    }

  render() {
    return (
      <ListItem>
      <CheckBox onPress={this.props.checkDone.bind(this, this.props.id)} checked={this.props.item.isDone} />
        <Body>
        <Text>{this.props.item.title}</Text>
        </Body>
        <Right  style={{flex:0.7}}>
        <Button rounded danger onPress={this.props.deleteItem.bind(this, this.props.id)} danger><Icon name='trash' /></Button></Right>
      </ListItem>  
    );
  }
}



export default ListItemDetail;
