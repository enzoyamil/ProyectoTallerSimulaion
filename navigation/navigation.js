import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pantalla1 from '../views/Pantalla1'
import pantalla2 from '../views/Pantalla2'
import pantalla3 from '../views/Pantalla3'
import CostoPantalla1 from "../views/CostosPantalla1";
import CostoPantalla2 from "../views/CostosPantalla2";
import CostoPantalla3 from "../views/CostosPantalla3";
import CostoPantalla4 from "../views/CostosPantalla4";
import CostoPantalla4_2 from "../views/CostosPantalla4_2";
import pantalla4 from '../views/Pantalla4'
import pantalla5 from '../views/Pantalla5'
import pantalla6 from '../views/Pantalla6'
import pantallaPresupuesto from "../views/PantallaPresupuesto";
import pantallaManoEmprendedor from "../views/PantallaManoEmprendedor";
import materiaPrima from "../views/MateriaPrima";
import reqPromo from "../views/ReqPromo";
import gastosOperativos from "../views/GastosOperativos";
import infraestructura from "../views/Infraestructura";
import maquinaria from "../views/Maquinaria";
import reqLegales from "../views/ReqLegales";
import presupuestoResumen from "../views/PresupuestoResumen";
import planInversion from "../views/PlanInversion";
import datosResumen from "../views/DatosResumen";
import CostosOperativos from '../views/CostosOperativos';
import MargenBruto from "../views/MargenBruto";
import DatosCredito from "../views/DatosCredito";
import VanTir from "../views/VanTir";
import Report from "../views/Report";
import { ReporteContext } from "../components/ReporteContext";
import {getReporte,iniReporte,setReporteLocal,clearReporte} from "../helpers/ReportLocalFunciones"

const Stack = createNativeStackNavigator();

function navigation() {
  //clearReporte("ReporteLocal");
  iniReporte("ReporteLocal");
  const [reporte,setReporte]=useState({});
  useEffect(() => {
    getReporte("ReporteLocal").then(setReporte);

  },[setReporte]);



  useEffect(()=>{
    setReporteLocal("ReporteLocal",reporte);
  },[reporte]);

  
  return (
    <ReporteContext.Provider value={[reporte, setReporte]}>
      <Stack.Navigator>
        <Stack.Screen name="Información Personal" component={pantalla1} />
        <Stack.Screen name="Datos del Emprendimiento" component={pantalla2} />
        {/* <Stack.Screen name="Descripción del Negocio" component={pantalla3} /> */}
        <Stack.Screen options={{ title: "Hoja de costos" }} name="Hoja-de-Costos" component={CostoPantalla1} />
        <Stack.Screen options={{ title: "Hoja de costos" }} name="Hoja-de-Costos2" component={CostoPantalla2} />
        <Stack.Screen options={{ title: "Hoja de costos" }} name="Hoja-de-Costos3" component={CostoPantalla3} />
        <Stack.Screen options={{ title: "Hoja de costos" }} name="Hoja-de-Costos4" component={CostoPantalla4} />
        <Stack.Screen options={{ title: "Hoja de costos" }} name="Hoja-de-Costos4_2" component={CostoPantalla4_2} />
        {/* <Stack.Screen name="Descripción del Servicio" component={pantalla4} />  */}
        {/* <Stack.Screen name="Analisis Mercado" component={pantalla5} />  */}
        {/* <Stack.Screen name="Estrategia de mercado" component={pantalla6} /> */}
        <Stack.Screen options={{ title: 'Costos Operativos' }} name="Costos Operativos" component={CostosOperativos} />
        <Stack.Screen name="Presupuesto Emprendimiento" component={pantallaPresupuesto} />
        <Stack.Screen name="Mano Emprendedor" component={pantallaManoEmprendedor} />
        <Stack.Screen name="Materia Prima" component={materiaPrima} />
        <Stack.Screen name="Requerimientos Promocionales" component={reqPromo} />
        <Stack.Screen name="Gastos Operativos" component={gastosOperativos} />
        <Stack.Screen name="Infraestructura" component={infraestructura} />
        <Stack.Screen name="Maquinaria" component={maquinaria} />
        <Stack.Screen name="Requerimiento Legal" component={reqLegales} />
        <Stack.Screen name="Presupuesto Resumen" component={presupuestoResumen} />
        <Stack.Screen name="Plan Inversión" component={planInversion} />
        <Stack.Screen options={{ title: "Analisis Financiero" }} name="MargenBruto" component={MargenBruto} />
        <Stack.Screen options={{ title: "Datos del Credito" }} name="DatosCredito" component={DatosCredito} />
        <Stack.Screen name="Datos Resumen" component={datosResumen} />
        <Stack.Screen name="Resultados" component={VanTir} />
        <Stack.Screen name="Reporte" component={Report} />
      </Stack.Navigator>
    </ReporteContext.Provider>
  );
}

export default navigation;