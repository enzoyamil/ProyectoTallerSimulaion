import { appendToMemberExpression } from "@babel/types";
import React from "react";
import { Text, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/navigation'
import CostosOperativos from "./views/CostosOperativos";
import MargenBruto from "./views/MargenBruto";
import DatosCredito from "./views/DatosCredito";

function App() {
  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      <CostosOperativos />
      {/* <MargenBruto/> */}
      {/* <DatosCredito/> */}
    </NavigationContainer>
  );
}
export default App;
