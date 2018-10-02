'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Image,
    ActivityIndicator
} from 'react-native';

type Props = {};

export default class SearchPage extends Component<Props> {
    static navigationOptions = {
        title: 'Property Finder',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Search for houses to buy!
            </Text>
                <Text style={styles.description}>
                    Go ahead, search by Place name or Post code.
            </Text>
                <View style={styles.flowRight}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.searchInput}
                        placeholder='Search via name or postcode' />
                    <Button
                        onPress={() => { }}
                        color='#48BBEC'
                        title='Go'
                    />
                </View>
                <Image source={require('./Resources/house.png')} style={styles.image}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      searchInput: {
        height: 40,
        padding: 10,
        marginRight: 5,
        flexGrow: 3,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
      },
      image:{
          height:138,
          width: 217
      }
});