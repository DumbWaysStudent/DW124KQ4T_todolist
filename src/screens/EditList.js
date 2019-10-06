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

class EditList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            textValue: props.navigation.getParam('title')
        }
    }

    setTextValue = () => {
        this.setState({
            textValue: this.props.navigation.getParam('title')
        });
    }

    handleChange = (text) => {
        this.setState({
            textValue: text
        });
    }
    
    onUpdate = () => {
        this.props.navigation.navigate("List",{
            row: this.props.navigation.getParam("row"),
            title: this.state.textValue
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
                    <Input placeholder="Edit Item" value={this.state.textValue} onChangeText={this.handleChange} />
                </Item>
                </Body>
                <Right>
                <Button onPress={this.onUpdate} success>
                    <Text>Update</Text>
                </Button></Right>
                </CardItem>
                </Card>
            </Content>
        </Container>
    );
  }
}



export default EditList;
