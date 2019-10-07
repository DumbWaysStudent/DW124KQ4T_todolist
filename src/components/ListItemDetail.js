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
        <Button rounded info onPress={this.props.redirectToEdit.bind(this, this.props.id)}><Icon name='pencil'  type="FontAwesome" /></Button>
        <Button rounded danger onPress={this.props.deleteItem.bind(this, this.props.id)}><Icon name='trash' /></Button>
      </ListItem>  
    );
  }
}



export default ListItemDetail;
