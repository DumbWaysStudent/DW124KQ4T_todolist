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

class Item extends React.Component{

    constructor(){
        super();
        this.state={
            todolist: [
                'work',
                'swim',
                'study',
                'sleep',
                'run'
            ]
        }
    }
  render() {
    return (
        <View>
            <Text>{this.props.item}</Text>
        </View>
    );
  }
}



export default Item;
