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
    Input,
    Button,
    Item,
    Text,
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
            ],
            textValue: null
        }
    }
    handlePress = () => {
        const { textValue } = this.state;
        const items = this.state.todolist;
        items.unshift(textValue);
        this.setState({
            textValue: '',
            todolist: items
        });
    }
    handleChange = (text) => {
        this.setState({
            textValue: text
        });
    }
    deleteItem = (key) => {
        this.setState({
            todolist: [...this.state.todolist.filter((item, index) => index !== key)]
        })
        
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
                <Item style={{ flexDirection:'row' }}>
                    <Input placeholder="Add New Item" value={this.state.textValue} onChangeText={this.handleChange} />
                </Item>
                <Button success onPress={this.handlePress}>
                    <Text>Submit</Text>
                </Button>
                {this.state.todolist.map((item, index) => {
                    return <ListItem item={item} key={index} id={index} deleteItem={this.deleteItem} />
                })}
            </Content>
        </Container>
    );
  }
}



export default List;
