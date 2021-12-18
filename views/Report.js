import React, { useState, useContext, useEffect } from "react";
import { FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, Center, NativeBaseProvider, Select, Text } from "native-base";
import { getReporte } from "../helpers/ReportLocalFunciones"
import { ReporteContext } from "../Components/ReporteContext";
import { yellow100 } from "react-native-paper/lib/typescript/styles/colors";
function Report() {
    // const [listaReporte, setListaReporte] = useState({});
    const [reporte, setReporte] = useContext(ReporteContext);

    // useEffect(()=>{
    //     getReporte("ReporteLocal").then(setListaReporte);

    // },[setListaReporte]);



    const { nombre_empresa, nit, nombre_propietario, aporte_propio, plan_inversion, resumen,
        tabla_utilidad, datos_credito, van_tir } = reporte;
    console.log(reporte, "reporte final");
    return (


        <NativeBaseProvider>
            <ScrollView>
                <Stack
                    space={2.5}
                    alignSelf="center"
                    px="4"
                    safeArea
                    mt="4"
                    w={{
                        base: '100%',
                        md: '25%',
                    }}>
                    <Center><Text fontSize="20" bold>Reporte Emprendimiento </Text></Center>
                    <Text fontSize="12" bold>Nombre de la Empresa: {nombre_empresa}</Text>
                    <Text fontSize="12" bold>NIT: {nit}</Text>
                    <Text fontSize="12" bold>Nombre Propietario: {nombre_propietario}</Text>

                    {/* <Text fontSize="16" bold>Aporte Propio</Text>
                    <Text fontSize="12" bold>Efectivo: {parseFloat(aporte_propio.efectivo).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Mano de Obra: {parseFloat(aporte_propio.mano_obra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Materia Prima: {parseFloat(aporte_propio.materia_prima).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Req. Promocionales: {parseFloat(aporte_propio.req_promo).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Gasto Operativo: {parseFloat(aporte_propio.gasto_operativo).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Infraestructura: {parseFloat(aporte_propio.infraestructura).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Maquinaria: {parseFloat(aporte_propio.maquinaria).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Req. Legales: {parseFloat(aporte_propio.req_legales).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>


                    <Text fontSize="16" bold>Plan Inversión</Text>
                    <Text fontSize="12" bold>Materia Prima: {parseFloat(plan_inversion.materia_prima).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Gasto Operativo: {parseFloat(plan_inversion.gasto_operativo).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Infraestructura: {parseFloat(plan_inversion.req_promo).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Maquinaria: {parseFloat(plan_inversion.infraestructura).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    <Text fontSize="12" bold>Req. Legales: {parseFloat(plan_inversion.maquinaria).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text> */}
                    <Box rounded="xl" p="5" borderWidth="1" style={{ backgroundColor: '#FAE63E'}}>
                        <Text fontSize="16" bold>Resumen</Text>
                        <Text fontSize="12" bold>Total Proyecto: {parseFloat(resumen.total_proyecto).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                        <Text fontSize="12" bold>Aporte Propio: {parseFloat(resumen.aporte_propio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                        <Text fontSize="12" bold>Monto a Financiar: {parseFloat(resumen.monto_financiar).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    </Box>
                    <Box rounded="xl" p="5" borderWidth="1" style={{ backgroundColor: '#FAE63E'}}>
                        <Text fontSize="16" bold>Tabla de Utilidad</Text>
                        <Text fontSize="12" bold>Margen: {parseFloat(tabla_utilidad.margen)}%</Text>
                        <Text fontSize="12" bold>(+)Ingresos Totales: {parseFloat(tabla_utilidad.ingresos_total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                        <Text fontSize="12" bold>(-)Costos Directos: {parseFloat(tabla_utilidad.costos_directos).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                        <Text fontSize="12" bold>(=)Utilidad Bruta: {parseFloat(tabla_utilidad.utilidad_bruta).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                        <Text fontSize="12" bold>(-)Costos Operativo: {parseFloat(tabla_utilidad.costo_operativos).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                        <Text fontSize="12" bold>(=)Utilidad Operativa: {parseFloat(tabla_utilidad.utilidad_operativa).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    </Box>
                    <Box rounded="xl" p="5" borderWidth="1" style={{ backgroundColor: '#FAE63E'}}>
                        <Text fontSize="16" bold>Datos Credito</Text>
                        <Text fontSize="12" bold>Tipo de Cuota: {datos_credito.tipo_cuota}</Text>
                        <Text fontSize="12" bold>Actividad: {datos_credito.actividad}</Text>
                        <Text fontSize="12" bold>Cuota Aprox: {parseFloat(datos_credito.cuota_aprox).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                    </Box>
                    <Box rounded="xl" p="5" borderWidth="1" style={{ backgroundColor: '#FAE63E'}}>
                        <Text fontSize="16" bold>Flujo</Text>
                        <Text fontSize="12" bold>VAN: {parseFloat(van_tir.van).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                        <Text fontSize="12" bold>TIR: {van_tir.tir}%</Text>
                    </Box>
                    <Center><Text fontSize="20" bold>FOCASE</Text></Center>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}
export default Report;