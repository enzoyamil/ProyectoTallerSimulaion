import React, { useState } from "react";
import { FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, Center, NativeBaseProvider, Select, Text } from "native-base";
function Report() {
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
                    <Center><Text fontSize="20" bold>Reporte Emprendimiento</Text></Center>
                    <Text fontSize="12" bold>Nombre de la Empresa: xxxxx</Text>
                    <Text fontSize="12" bold>NIT:xxxxxxxx</Text>
                    <Text fontSize="12" bold>Nombre Propietario:xxxxxx</Text>

                    <Text fontSize="16" bold>Aporte Propio</Text>
                    <Text fontSize="12" bold>Efectivo:xxxxxx</Text>
                    <Text fontSize="12" bold>Mano de Obra:xxxxxx</Text>
                    <Text fontSize="12" bold>Materia Prima:xxxxxx</Text>
                    <Text fontSize="12" bold>Req. Promocioonales:xxxxxx</Text>
                    <Text fontSize="12" bold>Gasto Operativo:xxxxxx</Text>
                    <Text fontSize="12" bold>Infraestructura:xxxxxx</Text>
                    <Text fontSize="12" bold>Maquinaria:xxxxxx</Text>
                    <Text fontSize="12" bold>Req. Legales:xxxxxx</Text>
                    <Text fontSize="12" bold>Req. Promocioonales:xxxxxx</Text>

                    <Text fontSize="16" bold>Plan Inversión</Text>
                    <Text fontSize="12" bold>Gasto Operativo:xxxxxx</Text>
                    <Text fontSize="12" bold>Materia Prima:xxxxxx</Text>
                    <Text fontSize="12" bold>Infraestructura:xxxxxx</Text>
                    <Text fontSize="12" bold>Maquinaria:xxxxxx</Text>
                    <Text fontSize="12" bold>Req. Legales:xxxxxx</Text>

                    <Text fontSize="16" bold>Resumen</Text>
                    <Text fontSize="12" bold>Total Proyecto:xxxxxx</Text>
                    <Text fontSize="12" bold>Aporte Propio:xxxxxx</Text>
                    <Text fontSize="12" bold>Monto a Financiar:xxxxxx</Text>

                    <Text fontSize="16" bold>Tabla de Utilidad</Text>
                    <Text fontSize="12" bold>(+)Ingresos Totales:xxxxxx</Text>
                    <Text fontSize="12" bold>(-)Costos Directos:xxxxxx</Text>
                    <Text fontSize="12" bold>Margen:xx%</Text>
                    <Text fontSize="12" bold>(=)Utilidad Bruta:xxxxxx</Text>
                    <Text fontSize="12" bold>(-)Costos Operativo:xxxxxx</Text>
                    <Text fontSize="12" bold>(=)Utilidad Operativa:xxxxxx</Text>

                    <Text fontSize="16" bold>Datos Credito</Text>
                    <Text fontSize="12" bold>Tipo de Cuota:xx</Text>
                    <Text fontSize="12" bold>Actividad:xx</Text>
                    <Text fontSize="12" bold>Cuota Aprox:xx</Text>

                    <Text fontSize="16" bold>Flujo</Text>
                    <Text fontSize="12" bold>VAN:xxxxxx</Text>
                    <Text fontSize="12" bold>TIR:xxxxxx</Text>
                    <Center><Text fontSize="20" bold>FOCASE</Text></Center>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}
export default Report;