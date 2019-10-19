import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Icon, Text, Button, View, Grid, Col, Header } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const Wallet = () => {
  return (
    <View style={style.Container}>
      <LinearGradient colors={['#0575E6', '#021B79']}>
        <Icon name='ios-wallet' type='Ionicons' style={style.IconHeader} color='#fff' />
        <Text style={style.HeaderTitle}>Total Saldo</Text>
        <Text style={style.TextBalance}>Rp. 20,000</Text>
        <Grid style={style.ButtonContainer}>
          <Col>
            <Button style={style.HeaderLeftButton} transparent bordered hasText>
              <Text style={style.Text}>Topup</Text>
            </Button>
          </Col>
          <Col>
            <Button style={style.HeaderRightButton} transparent bordered hasText>
              <Text style={style.Text}>Withdraw</Text>
            </Button>
          </Col>
        </Grid>
        <Grid style={style.Content}>

        </Grid>
      </LinearGradient>
    </View>
  )
}

const style = StyleSheet.create({
  Container: {
    flexGrow: 1,
    flex: 1
  },
  IconHeader: {
    fontSize: 70,
    alignSelf: 'center',
    marginTop: 10
  },
  HeaderTitle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff'
  },
  TextBalance: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#fff'
  },
  HeaderLeftButton: {
    width: 100,
    alignSelf: 'flex-end',
    textAlign: 'center',
    marginEnd: 10,
    borderRadius: 10,
    borderColor: '#fff'
  },
  HeaderRightButton: {
    width: 100,
    marginStart: 10,
    borderRadius: 10,
    borderColor: '#fff'
  },
  ButtonContainer: {
    marginTop: 20
  },
  Text: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    width: '100%'
  },
  Content: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    minHeight: 200,
    flexGrow: 1,
    flex: 1
  }
})

export default Wallet;