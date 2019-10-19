import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Grid, Col, Button, Text, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Main = () => {
  return (
    <View>
      <Button primary style={style.Button}>
        <Text style={style.Text}>Pengguna</Text>
      </Button>
      <Button primary style={style.Button} onPress={() => Actions.push('Dashboard')}>
        <Text style={style.Text}>Warung</Text>
      </Button>
      <Button primary style={style.Button}>
        <Text style={style.Text}>Grobak</Text>
      </Button>
      <Button primary style={style.Button}>
        <Text style={style.Text}>Pengguna Baru</Text>
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  Button: {
    margin: 10
  },
  Text: {
    textAlign: 'center',
    width: '100%'
  }
})

export default Main;