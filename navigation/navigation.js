import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pantalla1 from '../views/Pantalla1'
import pantalla2 from '../views/Pantalla2'
import pantalla3 from '../views/Pantalla3'
import CostoPantalla1 from "../views/CostosPantalla1";
import CostoPantalla2 from "../views/CostosPantalla2";
import CostoPantalla3 from "../views/CostosPantalla3";
import CostoPantalla4 from "../views/CostosPantalla4";
import CostoPantalla4_2 from "../views/CostosPantalla4_2";

const Stack = createNativeStackNavigator();

function navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Información Personal" component={pantalla1} />
            <Stack.Screen name="Informacón del Emprendimiento" component={pantalla2} />
            <Stack.Screen name="Descripción del Negocio" component={pantalla3} />
            <Stack.Screen options={{title: "Hoja de costos"}} name="Hoja-de-Costos" component={CostoPantalla1} />
            <Stack.Screen options={{title: "Hoja de costos"}} name="Hoja-de-Costos2" component={CostoPantalla2} />
            <Stack.Screen options={{title: "Hoja de costos"}} name="Hoja-de-Costos3" component={CostoPantalla3} />
            <Stack.Screen options={{title: "Hoja de costos"}} name="Hoja-de-Costos4" component={CostoPantalla4} />
            <Stack.Screen options={{title: "Hoja de costos"}} name="Hoja-de-Costos4_2" component={CostoPantalla4_2} />
        </Stack.Navigator>
    );
}
export default navigation;

