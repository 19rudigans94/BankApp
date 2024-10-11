import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigate from './navigate';
import { AppProvider } from './AppContext'; 

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>
    </AppProvider>
  );
}