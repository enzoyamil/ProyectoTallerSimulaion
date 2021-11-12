import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pantalla1 from '../views/Pantalla1'
import pantalla2 from '../views/Pantalla2'
import pantalla3 from '../views/Pantalla3'
import Cabecera from "../views/Cabecera";

const Stack = createNativeStackNavigator();

function navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Información Personal" component={pantalla1} />
            <Stack.Screen name="Informacón del Emprendimiento" component={pantalla2} />
            <Stack.Screen name="Descripción del Negocio" component={pantalla3} />
            <Stack.Screen name="cabecera" component={Cabecera} />
        </Stack.Navigator>
    );
}
export default navigation;

