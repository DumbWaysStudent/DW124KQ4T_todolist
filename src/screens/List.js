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


import Item from './Item';

class List extends React.Component{

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
            {this.state.todolist.map((item, index) => {
                return <Item item={item} key={index} />
            })}
        </View>
    );
  }
}



export default List;
