import {appendToMemberExpression} from '@babel/types';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation/navigation';
import Cabeza from './views/Cabecera';
import CostosOperativos from './views/CostosOperativos';

function App() {
  return (
    <NavigationContainer>
      {/* <Cabeza/> */}
      <Navigation />
      {/* <CostosOperativos/> */}
    </NavigationContainer>
  );
}
export default App;
