<<<<<<< HEAD
import {appendToMemberExpression} from '@babel/types';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation/navigation';
=======
import { appendToMemberExpression } from "@babel/types";
import React from "react";
import { Text, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/navigation'
>>>>>>> 5382d8bbad704b578c20fdbc4ce7452f38b8d907

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
export default App;
