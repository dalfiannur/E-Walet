import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Row, Col, Button, Icon, Text, View, Card, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Dashboard = () => {
  return (
    <Container>
      <ScrollView>
        <Row>
          <Col style={style.ColLeft}>
            <Button vertical style={style.Button} transparent bordered>
              <Icon name='ios-barcode' type='Ionicons' style={style.IconButton} />
              <Text style={style.Text}>Scan</Text>
            </Button>
          </Col>
          <Col style={style.ColCenter}>
            <Button vertical style={style.Button} transparent bordered onPressOut={() => Actions.push('Wallet')}>
              <Icon name='ios-wallet' type='Ionicons' style={style.IconButton} />
              <Text style={style.Text}>Dompet</Text>
            </Button>
          </Col>
          <Col style={style.ColRight}>
            <Button vertical style={style.Button} transparent bordered>
              <Icon name='solar-power' type='MaterialCommunityIcons' style={style.IconButton} />
              <Text style={style.Text}>Listrik</Text>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col style={style.ColLeft}>
            <Button vertical style={style.Button} transparent bordered>
              <Icon name='mobile-phone' type='FontAwesome' style={style.IconButton} />
              <Text style={style.Text}>Pulsa</Text>
            </Button>
          </Col>
          <Col style={style.ColCenter}>
            <Button vertical style={style.Button} transparent bordered>
              <Icon name='wifi' type='FontAwesome5' style={style.IconButton} />
              <Text style={style.Text}>Paket Data</Text>
            </Button>
          </Col>
          <Col style={style.ColRight}>
            <Button vertical style={style.Button} transparent bordered>
              <Icon name='hospital' type='FontAwesome5' style={style.IconButton} />
              <Text style={style.Text}>BPJS</Text>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col style={style.ColLeft}>
            <Button vertical style={style.Button} transparent bordered >
              <Icon name='payment' type='MaterialIcons' style={style.IconButton} />
              <Text style={style.Text}>Pembayaran</Text>
            </Button>
          </Col>
          <Col style={style.ColCenter}>
            <Button vertical style={style.Button} transparent bordered >
              <Icon name='car' type='FontAwesome5' style={style.IconButton} />
              <Text style={style.Text}>E-Tol</Text>
            </Button>
          </Col>
          <Col style={style.ColRight}>
            <Button vertical style={style.Button} transparent bordered >
              <Icon name='history' type='MaterialIcons' style={style.IconButton} />
              <Text style={style.Text}>Riwayat</Text>
            </Button>
          </Col>
        </Row>
      </ScrollView>
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name='shopping-cart' type='Entypo' />
            <Text>Grobak</Text>
          </Button>
          <Button vertical>
            <Icon name='shop' type='Entypo' />
            <Text>Warung</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

const style = StyleSheet.create({
  Card: {
    padding: 10
  },
  ColLeft: {
    paddingStart: 10
  },
  ColCenter: {
    paddingHorizontal: 10
  },
  ColRight: {
    paddingEnd: 10
  },
  Icon: {
  },
  IconButton: {
    fontSize: 50
  },
  Text: {
    alignSelf: 'center',
    fontSize: 12
  },
  Button: {
    height: 95,
    marginTop: 10,
  }
})

export default Dashboard;