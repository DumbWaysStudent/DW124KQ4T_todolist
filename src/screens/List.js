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
    Card,
    CardItem
} from 'native-base';


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
            ],
            textValue: null
        }
    }
    handlePress = () => {
        const { textValue } = this.state;
        if(textValue != '' && textValue != null ){
            const items = this.state.todolist;
            items.unshift(textValue);
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
                    return <ListItemDetail item={item} key={index} id={index} deleteItem={this.deleteItem} />
                })}
            </Content>
        </Container>
    );
  }
}



export default List;
