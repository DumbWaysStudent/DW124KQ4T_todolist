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
    Header
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
            ],
            textValue: null
        }
    }
    handlePress = () => {
        const { textValue } = this.state;
        const items = this.state.todolist;
        items.push(textValue);
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
  render() {
    return (
        <Container>
            <Header />
            <Content>
                <Item>
                    <Input placeholder="Add New Item" value={this.state.textValue} onChangeText={this.handleChange} />
                </Item>
                <Button success onPress={this.handlePress}>
                    <Text>Submit</Text>
                </Button>
                {this.state.todolist.map((item, index) => {
                    return <ListItem item={item} key={index} />
                })}
            </Content>
        </Container>
    );
  }
}



export default List;
