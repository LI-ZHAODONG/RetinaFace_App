import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';

const Cam = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={ref => setCameraRef(ref)} />
      <View style={styles.rectangle1}/>
      <View style={styles.rectangle2}/>

      {/* Add buttons or other UI components here */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  rectangle1: {
    height: 150,
    width: 15,
    backgroundColor: 'salmon',
    position: 'absolute', 
    top: '15%',
    left: '15%'
  },
 rectangle2: {
    height: 150,
    width: 15,
    backgroundColor: 'salmon',
    position: 'absolute', 
    top: '15%',
    left: '83%'
  },

});

export default Cam;