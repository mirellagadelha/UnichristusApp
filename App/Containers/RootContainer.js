import React, { Component } from 'react';
import { StatusBar, View, Text } from 'react-native';
import RootNavigator from '../Navigation/RootNavigator'

class RootContainer extends Component {
	render() {
		return (<RootNavigator />);
	}
}

export default RootContainer;