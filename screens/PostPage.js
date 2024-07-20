import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const PostPage = () => {
  const [data, setData] = useState('');
  const [key, setKey] = useState('');
  const [message, setMessage] = useState('');

  const handleConfirmPress = async () => {
    if (data.trim() === '' || key.trim() === '') {
      setMessage('Both fields are required!');
      return;
    }

    try {
      const response = await axios.post('http://3.139.54.170:8000/save-note', {
        note_text: data,
        note_key: key,
      });

      
      const { message } = response.data;

      if (message === 'Note saved successfully!') {
        setMessage('Message sent!');
      } else if (message === 'Note key already exists! Please use a different key.') {
        setMessage('Note key already exists! Please use a different key.');
      } else if (message === 'Missing required fields!') {
        setMessage('Missing required fields');
      } else {
        setMessage('Unexpected response from the server.');
      }
    } catch (error) {
      setMessage('Note key already exists! Please use a different key.');
    }
  };

  return (
    <View style={styles.container}>
      {message ? (
        <Text style={styles.message}>{message}</Text>
      ) : (
        <>
          <Text style={styles.text}>Enter your data:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type or paste your data here"
            multiline
            value={data}
            onChangeText={setData}
          />
          <TextInput
            style={styles.keyInput}
            placeholder="Create Key"
            value={key}
            onChangeText={setKey}
          />
          <TouchableOpacity style={styles.button} onPress={handleConfirmPress}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'flex-start',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    height: 240,
    backgroundColor: '#CDCBDE',
    borderColor: 'gray',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    alignSelf: 'stretch',
  },
  keyInput: {
    height: 40,
    borderRadius: 12,
    borderColor: 'gray',
    backgroundColor: '#CDCBDE',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    alignSelf: 'stretch',
  },
  button: {
    backgroundColor: '#003F88',
    padding: 10,
    borderRadius: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  message: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default PostPage;
