'use strict';

import React, {Component} from 'react';
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
    container :{
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    }
});