import React, { useState, useContext, useEffect } from "react";
import { FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, Center, NativeBaseProvider, Select, Text } from "native-base";
import { getReporte } from "../helpers/ReportLocalFunciones"
import { ReporteContext } from "../Components/ReporteContext";
function Report() {
    // const [listaReporte, setListaReporte] = useState({});
    const [reporte, setReporte] = useContext(ReporteContext);

    // useEffect(()=>{
    //     getReporte("ReporteLocal").then(setListaReporte);

    // },[setListaReporte]);
    


    const { nombre_empresa, nit, nombre_propietario, aporte_propio, plan_inversion, resumen,
        tabla_utilidad, datos_credito, van_tir } = reporte;
    console.log(reporte,"reporte final");
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
                    <Text fontSize="12" bold>Nombre de la Empresa:{nombre_empresa}</Text>
                    <Text fontSize="12" bold>NIT:{nit}</Text>
                    <Text fontSize="12" bold>Nombre Propietario:{nombre_propietario}</Text>

                    <Text fontSize="16" bold>Aporte Propio</Text>
                    {/* <Text fontSize="12" bold>Efectivo: {aporte_propio.efectivo}</Text> */}
                    <Text fontSize="12" bold>Mano de Obra:{aporte_propio.mano_obra}</Text>
                    <Text fontSize="12" bold>Materia Prima:{aporte_propio.materia_prima}</Text>
                    <Text fontSize="12" bold>Req. Promocioonales:{aporte_propio.req_promo}</Text>
                    <Text fontSize="12" bold>Gasto Operativo:{aporte_propio.gasto_operativo}</Text>
                    <Text fontSize="12" bold>Infraestructura:{aporte_propio.infraestructura}</Text>
                    <Text fontSize="12" bold>Maquinaria:{aporte_propio.maquinaria}</Text>
                    <Text fontSize="12" bold>Req. Legales:{aporte_propio.req_legales}</Text>


                    <Text fontSize="16" bold>Plan Inversión</Text>
                    <Text fontSize="12" bold>Gasto Operativo:{plan_inversion.gasto_operativo}</Text>
                    <Text fontSize="12" bold>Materia Prima:{plan_inversion.materia_prima}</Text>
                    <Text fontSize="12" bold>Infraestructura:{plan_inversion.req_promo}</Text>
                    <Text fontSize="12" bold>Maquinaria:{plan_inversion.infraestructura}</Text>
                    <Text fontSize="12" bold>Req. Legales:{plan_inversion.maquinaria}</Text>

                    <Text fontSize="16" bold>Resumen</Text>
                    <Text fontSize="12" bold>Total Proyecto:{resumen.total_proyecto}</Text>
                    <Text fontSize="12" bold>Aporte Propio:{resumen.aporte_propio}</Text>
                    <Text fontSize="12" bold>Monto a Financiar:{resumen.monto_financiar}</Text>

                    <Text fontSize="16" bold>Tabla de Utilidad</Text>
                    <Text fontSize="12" bold>(+)Ingresos Totales:{tabla_utilidad.ingresos_total}</Text>
                    <Text fontSize="12" bold>(-)Costos Directos:{tabla_utilidad.costos_directos}</Text>
                    <Text fontSize="12" bold>Margen:{tabla_utilidad.margen}%</Text>
                    <Text fontSize="12" bold>(=)Utilidad Bruta:{tabla_utilidad.utilidad_bruta}</Text>
                    <Text fontSize="12" bold>(-)Costos Operativo:{tabla_utilidad.costo_operativos}</Text>
                    <Text fontSize="12" bold>(=)Utilidad Operativa:{tabla_utilidad.utilidad_operativa}</Text>

                    <Text fontSize="16" bold>Datos Credito</Text>
                    <Text fontSize="12" bold>Tipo de Cuota:{datos_credito.tipo_cuota}</Text>
                    <Text fontSize="12" bold>Actividad:{datos_credito.actividad}</Text>
                    <Text fontSize="12" bold>Cuota Aprox:{datos_credito.cuota_aprox}</Text>

                    <Text fontSize="16" bold>Flujo</Text>
                    <Text fontSize="12" bold>VAN:{van_tir.van}</Text>
                    <Text fontSize="12" bold>TIR:{van_tir.tir}%</Text>
                    <Center><Text fontSize="20" bold>FOCASE</Text></Center>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}
export default Report;