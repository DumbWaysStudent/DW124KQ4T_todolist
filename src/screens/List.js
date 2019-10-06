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
    Body,
    Title,
    Right,
    View,
    Card,
    CardItem
} from 'native-base';

import { FlatList } from 'react-native';


import ListItemDetail from '../components/ListItemDetail';

class List extends React.Component{

    constructor(){
        super();
        this.state={
            todolist: [
                {
                    title: "work",
                    done: false
                }, {
                    title: "swim",
                    done: false
                }, {
                    title: "study",
                    done: false
                }, {
                    title: "sleep",
                    done: false
                }, {
                    title: "run",
                    done: false
                }
            ],
            textValue: null
        }
    }
    handlePress = () => {
        const { textValue } = this.state;
        if(textValue != '' && textValue != null ){
            const items = this.state.todolist;
            items.unshift({title: textValue, done: false});
            this.setState({
                textValue: '',
                todolist: items
            });
        }
    }
    handleChange = (text) => {
        this.setState({
            textValue: text
        });
    }
    deleteItem = (key) => {
        this.setState({
            todolist: this.state.todolist.filter((item, index) => index !== key)
        })
        
    }
    checkDone = (key) => {
        let items = this.state.todolist;
        items[key].done = !items[key].done
        this.setState({
            todolist: items
        });
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
                <Card>
                    <CardItem>
                    <Body>
                <Item style={{ flexDirection:'row' }}>
                    <Input placeholder="Add New Item" value={this.state.textValue} onChangeText={this.handleChange} />
                </Item>
                </Body>
                <Right>
                <Button success onPress={this.handlePress}>
                    <Text>Submit</Text>
                </Button></Right>
                </CardItem>
                </Card>
                {this.state.todolist.map((item, index) => {
                    return <ListItemDetail item={item} key={index} id={index} deleteItem={this.deleteItem} checkDone={this.checkDone} />
                })}
            </Content>
        </Container>
    );
  }
}



export default List;
