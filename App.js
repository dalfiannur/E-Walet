import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux'
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Main from './src/Screens/Main';
import Dashboard from './src/Screens/Dashboard';
import Wallet from './src/Screens/Wallet';

export default function App() {
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
