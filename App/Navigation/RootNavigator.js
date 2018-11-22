import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Routes from './Routes';

const Stack = createDrawerNavigator(
  {
    ...Routes,
  },
  {
    initialRouteName: 'Auth',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1F0808',
      },
    },
  },
);

export default class RootNavigator extends Component {
  render() {
    return <Stack />;
  }
}
