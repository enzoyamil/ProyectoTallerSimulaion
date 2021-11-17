import { appendToMemberExpression } from "@babel/types";
import React from "react";
import { Text, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/navigation'



function App(){
  return(
    <NavigationContainer>
      {/* <Cabeza/> */}
      <Navigation/>
    </NavigationContainer>
  );
}
export default App;