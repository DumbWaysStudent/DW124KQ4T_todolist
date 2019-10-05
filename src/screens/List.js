/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Container
} from 'native-base';


import ListItem from '../components/ListItem';

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
        <Container>
            {this.state.todolist.map((item, index) => {
                return <ListItem item={item} key={index} />
            })}
        </Container>
    );
  }
}



export default List;
