import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../Containers/LoginScreen';
import HomeScreen from '../Containers/HomeScreen';
import FaqScreen from '../Containers/FaqScreen';

const NavigatorScreen = ({ navigation }) => (
  <Icon name="bars" size={30} color="#fff" onPress={() => navigation.openDrawer()} />
);

const optionsNav = ({ navigation }) => ({
  headerLeft: <NavigatorScreen navigation={navigation} />,
  headerStyle: {
    backgroundColor: '#001425',
  },
  headerTintColor: '#fff',
});

const AuthStack = createStackNavigator({
  Login: { screen: LoginScreen },
});

const Home = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: optionsNav,
  },
});

const FAQ = createStackNavigator({
  Contatos: {
    screen: FaqScreen,
    navigationOptions: optionsNav,
  },
});

const Routes = {
  Auth: { screen: LoginScreen },
  Home: { screen: Home },
  FAQ: { screen: FAQ },
};

export default Routes;
