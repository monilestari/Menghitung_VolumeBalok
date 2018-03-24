import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungVolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#D1C4E9' }}>

        <View style={{ backgroundColor: '#673AB7', height: 24 }} />
        <View style={{ backgroundColor: '#673AB7' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#EDE7F6' }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />

            <Button

              onPress={() => this.setState({
              volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              color="#673AB7"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#9575CD' }}>
          <Text style={{ padding: 10, fontSize: 20 }}>
              Panjang= {this.state.panjang}{'\n'}
              Lebar= {this.state.lebar} {'\n'}
              Tinggi= {this.state.tinggi} {'\n'}
              Volume= {this.state.volume}
          </Text>
         </View>
   </View>
    );
  }
}

AppRegistry.registerComponent('latihan3', () => HitungVolumeBalok);
