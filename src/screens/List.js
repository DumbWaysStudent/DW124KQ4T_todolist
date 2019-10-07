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

    constructor(props){
        super(props);
        this.state={
            todolist: [
                {
                    title: "work",
                    isDone: false
                }, {
                    title: "swim",
                    isDone: false
                }, {
                    title: "study",
                    isDone: false
                }, {
                    title: "sleep",
                    isDone: false
                }, {
                    title: "run",
                    isDone: false
                }
            ],
            textValue: null,
            editedItem: null
        }
    }
    componentDidMount(){
        if(typeof this.props.navigation.state.params !== "undefined"){
            this.updateItem();
        }
    }
    componentDidUpdate(){
        if(typeof this.props.navigation.state.params !== "undefined" && this.props.navigation.state.params.title !== this.state.editedItem){
            this.updateItem();
        }
    }

    updateItem = () => {
        let items = this.state.todolist;
        items[this.props.navigation.state.params.row].title=this.props.navigation.state.params.title ;

        this.setState({
            todolist: items,
            editedItem: this.props.navigation.state.params.title
        });
    }
    

    handlePress = () => {
        const { textValue } = this.state;
        if(textValue != '' && textValue != null ){
            const items = this.state.todolist;
            items.unshift({title: textValue, isDone: false});
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
        items[key].isDone = !items[key].isDone
        this.setState({
            todolist: items
        });
    }
    redirectToEdit = (key) => {
        this.props.navigation.navigate("EditList",{
            row: key,
            title: this.state.todolist[key].title
        });
    }
  render() {
    return (
        <Container>
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
                    return <ListItemDetail item={item} key={index} id={index} deleteItem={this.deleteItem} checkDone={this.checkDone} redirectToEdit={this.redirectToEdit} />
                })}
            </Content>
        </Container>
    );
  }
}



export default List;
