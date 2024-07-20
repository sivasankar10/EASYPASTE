import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handlePostPress = () => {
    navigation.navigate('PostPage');
  };

  const handleReceivePress = () => {
    navigation.navigate('ReceivePage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Page!</Text>
      <TouchableOpacity style={styles.button} onPress={handlePostPress}>
        <Text style={styles.buttonText}>POST</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReceivePress}>
        <Text style={styles.buttonText}>RECEIVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#003F88',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
