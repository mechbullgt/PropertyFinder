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

// Toggle Switch
import ToggleSwitch from 'toggle-switch-react-native';

type Props = {};

function urlForQueryAndPage(key, value, pageNumber) {
    const data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber,
    };
    data[key] = value;

    const querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');
    console.log("Function: QueryString:" + querystring);
    return 'https://api.nestoria.co.uk/api?' + querystring;
};

// SearchPage Class 
export default class SearchPage extends Component<Props> {
    static navigationOptions = {
        title: 'Property Finder',
    };

    constructor(props) {
        super(props);
        this.state = {
            searchString: 'London',
            isLoading: false,
            message: '',
            defaultSwitchOn: true,
            swithIsOff: false
        };
    }

    // Below is a Private method, indicated with a start using 'underscore'
    _onSearchTextChanged = (event) => {
        console.log('Private Method onSearchTextChanged is called');
        this.setState({
            searchString: event.nativeEvent.text
        });
        console.log('Current: ' + this.state.searchString + ', Next:' + event.nativeEvent.text);
    };

    // Private method to execute query
    _executeQuery = (query) => {
        console.log("Query: " + query);
        this.setState({
            isLoading: true
        })
        fetch(query)
            .then(response => response.json())
            .then(json => this._handleResponse(json.response))
            .catch(error => this.setState({
                isLoading: false,
                message: 'Something Bad Happened while fetching data ERROR: ' + error
            }))
    };

    // Private method to handle API response
    _handleResponse = (response) => {
        this.setState({ isLoading: false, message: '' });
        if (response.application_response_code.substr(0, 1) === '1') {
            this.props.navigation.navigate(
                'Results', { listings: response.listings }
            )
            console.log('Properties found: ' + response.listings.length);
        } else {
            this.setState({ message: 'Location not recognized; please try again.' });
        }
    };

    // Private method to be executed when the "Search" button is pressed.
    _onSearchPressed = () => {
        console.log("Seach Icon is pressed.");
        const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
        this._executeQuery(query);
    }

    // Private method to operate toggle
    _toggleSwitchPressed () {
        console.log("Toggle Switch Pressed");
    }

    render() {
        console.log('SearchPage.render');
        var myToggle = <ToggleSwitch
            isOn={this.state.defaultSwitchOn}
            onColor='green'
            offColor='blue'
            label='Expert Mode'
            labelStyle={{ color: 'black', fontWeight: '900' }}
            size='small'
            onToggle={defaultSwitchOn => {
                alert('Expert Mode 1: ' + this.state.defaultSwitchOn);
                this.setState({ defaultSwitchOn });
                alert('Expert Mode 2: ' + this.state.defaultSwitchOn);
                this._toggleSwitchPressed({ defaultSwitchOn });
            }}
        />;


        // Show a loading indicator if is loading is happening. 
        const spinner = this.state.isLoading ? <ActivityIndicator size='large' /> : null;
        return (
            <View style={styles.container}>
                <View style={styles.switchContainer}>
                    {myToggle}
                </View>
                <View style={styles.contentContainer}>
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
                            value={this.state.searchString}
                            onChange={this._onSearchTextChanged}
                            placeholder='Search via name or postcode' />
                        <Button
                            onPress={this._onSearchPressed}
                            color='#48BBEC'
                            title='Search'
                        />
                    </View>
                    <Image source={require('./Resources/house.png')} style={styles.image}></Image>
                    {spinner}
                    <Text style={styles.description}>{this.state.message}</Text>
                </View>
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
    switchContainer: {
        padding: 10,
        marginTop: 0,
        flexDirection:'row'
    },
    contentContainer: {
        padding: 30,
        marginTop: 20,
        alignItems: 'center'
    },
    container: {
        padding: 0,
        marginTop: 0
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
    image: {
        height: 138,
        width: 217
    }
});