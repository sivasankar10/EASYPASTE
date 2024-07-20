import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../easypaste/screens/HomeScreen.js';
import PostPage from './screens/PostPage.js';
import ReceivePage from './screens/ReceivePage.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PostPage" component={PostPage} />
        <Stack.Screen name="ReceivePage" component={ReceivePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
