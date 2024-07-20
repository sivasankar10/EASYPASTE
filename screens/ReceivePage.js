import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const ReceivePage = () => {
  const [key, setKey] = useState('');
  const [receivedData, setReceivedData] = useState('');
  const [message, setMessage] = useState('');

  const handleConfirmPress = async () => {
    if (key.trim() === '') {
      setMessage('Please enter the Key!');
      setReceivedData(''); // Clear received data if key is not provided
      return;
    }

    try {
      const response = await axios.post('http://3.139.54.170:8000/get-note', {
        note_key: key,
      });

      console.log('API Response:', response.data);

      const { note_text } = response.data;

      if (note_text) {
        setReceivedData(note_text);
        setMessage('');
      } else {
        setMessage('No data found for this key.');
        setReceivedData(''); // Clear received data if no note_text is found
      }
    } catch (error) {
      console.error('API Error:', error); // Log the full error to understand the issue
      setMessage('Failed to fetch data. Please try again.');
      setReceivedData(''); // Clear received data on error
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.keyInput}
        placeholder="Enter Key"
        value={key}
        onChangeText={setKey}
      />
      <TouchableOpacity style={styles.button} onPress={handleConfirmPress}>
        <Text style={styles.buttonText}>CONFIRM</Text>
      </TouchableOpacity>
      {message ? (
        <Text style={styles.message}>{message}</Text>
      ) : (
        <TextInput
          style={styles.textInput}
          placeholder="Received Data"
          value={receivedData}
          editable={false}
          multiline
          scrollEnabled
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  keyInput: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#CDCBDE',
    marginBottom: 10,
    padding: 10,
    alignSelf: 'stretch',
  },
  button: {
    backgroundColor: '#003F88',
    padding: 10,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  textInput: {
    height: 280,
    borderColor: 'gray',
    backgroundColor: '#CDCBDE',
    borderRadius: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'stretch',
    textAlignVertical: 'top', 
  },
  message: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ReceivePage;
