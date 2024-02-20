import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home/home';
import Actions from './src/components/Actions/actions';
import Entry from './src/pages/Entries/entry';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Entry" component={Entry} />
        <Stack.Screen name="Actions" component={Actions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
