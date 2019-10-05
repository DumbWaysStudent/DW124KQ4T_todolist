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
  Text
} from 'native-base';

class ListItem extends React.Component{

    constructor(){
        super();
    }
  render() {
    return (
        <View>
            <Text>{this.props.item}</Text>
        </View>
    );
  }
}



export default ListItem;
