/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Container,
    Content,
    Header,
    Body,
    Title,
    Right
} from 'native-base';

import { FlatList } from 'react-native';


import ListItemDetail from '../components/ListItemDetail';

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
            <Header>
                <Body>
                    <Title>Todo</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                {this.state.todolist.map((item, index) => {
                    return <ListItemDetail item={item} key={index}/>
                })}
            </Content>
        </Container>
    );
  }
}



export default List;
