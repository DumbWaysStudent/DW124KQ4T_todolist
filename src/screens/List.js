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
    Left,
    Icon,
    Body,
    Title,
    Right
} from 'native-base';

import { FlatList } from 'react-native';


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
            <Header>
                <Body>
                    <Title>Todo</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                {this.state.todolist.map((item, index) => {
                    return <ListItem item={item} key={index}/>
                })}
            </Content>
        </Container>
    );
  }
}



export default List;
