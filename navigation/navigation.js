import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pantalla1 from '../views/Pantalla1'
import pantalla2 from '../views/Pantalla2'
import pantalla3 from '../views/Pantalla3'

const Stack = createNativeStackNavigator();

function navigation () {
    return(
       <Stack.Navigator>
           <Stack.Screen name="pagina1" component={pantalla1}/>
           <Stack.Screen name="pagina2" component={pantalla2}/>
           <Stack.Screen name="pagina3" component={pantalla3}/>
       </Stack.Navigator> 
    );
}
export default navigation;

