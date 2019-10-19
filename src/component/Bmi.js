import React from 'react';
import {View, Text, Button, TextInput, ImageBackground} from 'react-native';
import style from './Bmicss';

class Bmi extends React.Component {
  state = {Bb: 0, Tb: 0, Bmi: null, hasil: null};
  hitungBmi = () => {
    let Bb = parseInt(this.state.Bb);
    let Tb = parseInt(this.state.Tb) / 100;
    let Bmi = Bb / Tb / Tb;
    let hasil = null;
    if (Bmi < 18) {
      hasil = 'Underweight';
    } else if (Bmi >= 18.5 && Bmi <= 24.9) {
      hasil = 'Normal';
    } else if (Bmi >= 25 && Bmi <= 29.9) {
      hasil = 'Kelebihan';
    } else if (Bmi >= 30) {
      hasil = 'Kegendutan';
    } else {
      hasil = 0;
    }
    this.setState({Bb: Bb});
    this.setState({Tb: Tb});
    this.setState({Bmi: Bmi});
    this.setState({hasil: hasil});
    console.log(this.state);
  };
  render() {
    return (
      <View style={style.container}>
        <ImageBackground
          style={style.bgImage}
          source={require('../assets/background.png')}>
          <Text style={style.textBmi}>BMI</Text>

          <Text style={style.text}>Berat Badan</Text>
          <TextInput
            style={style.textInput}
            placeholder="Masukan Berat Badan"
            onChangeText={inputBb => this.setState({Bb: inputBb})}
            value={this.state.Bb}
          />
          <Text style={style.text}>Tinggi Badan</Text>
          <TextInput
            style={style.textInput}
            placeholder="Masukan Tinggi Badan"
            onChangeText={inputTb => this.setState({Tb: inputTb})}
            value={this.state.Tb}
          />
          <View style={style.buttonContainer}>
            <Button
              style={style.button}
              title="Hitung BMI"
              onPress={() => {
                this.hitungBmi();
              }}
            />
          </View>
          
          <Text style={style.textHasil}>{this.state.Bmi}</Text>
          <Text style={style.textHasil2}>{this.state.hasil}</Text>
         
        </ImageBackground>
      </View>
    );
  }
}
export default Bmi;
