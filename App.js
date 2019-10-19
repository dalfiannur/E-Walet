import React, { useEffect } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux'
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Main from './src/Screens/Main';
import Dashboard from './src/Screens/Dashboard';
import Wallet from './src/Screens/Wallet';

export default function App() {

  useEffect(async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  })

  return (
    <Router>
      <Stack key='root'>
        <Scene key="Main" component={Main} initial={true} title="E-Wallet" />
        <Scene key="Dashboard" component={Dashboard} title="Dashboard" />
        <Scene key="Wallet" component={Wallet} title="Dompet" />
      </Stack>
    </Router>
  );
}
