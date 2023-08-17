import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
// import { Link } from 'expo-router';

const backgroundImage = require('./../assets/background.png');
const CameraImage = require('./../assets/camera.png');
const StartImage = require('./../assets/Start.png');
const S1 = require('./../assets/S1.png');
const S2 = require('./../assets/S2.png');

const Home = () => {
  return (

    <View style={styles.container}>
    <ImageBackground source={backgroundImage} style={styles.image}>
      <Image source={CameraImage} style={styles.camimage} />
      <Image source={StartImage} style={styles.StartImage} />
      <Image source={S1} style={styles.S1} />
      <Image source={S2} style={styles.S2} />
      {/* <View>
      <Link href="/Cam">Cam</Link>
      </View> */}
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({

container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camimage: {
    height: 400,
    width: 400,
    top: -10,
  },
  StartImage: { 
    height: 110,
    width: 110,
    top: 110,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  S1: { 

    top: -95,
  },
  S2: { 

    top: -260,
  },

});

export default Home;