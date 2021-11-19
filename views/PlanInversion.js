import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select, FlatList, Text
} from "native-base";
import { DataTable } from 'react-native-paper';

function PlanInversion(props) {
    const { navigation } = props;
    const [TableService, setTableService] = useState([]);

    // const [FormManoObra, setFormManoObra] = useState({
    //     cantidad: '',
    //     unidad: 'Global',
    //     detalle: '',
    //     aportePropio: '',
    // });
    // useEffect(() => {
    //     setFormManoObra(FormManoObra);
    // }, [FormManoObra]);
    // function EstadoInputs(value, input) {
    //     setFormManoObra({ ...FormManoObra, [input]: value });
    //     console.log(FormManoObra);
    // }
    // function agregarFila() {
    //     setTableService([...TableService, FormManoObra]);
    //     console.log(TableService);
    // }
    // let { cantidad, unidad, detalle, aportePropio } = FormManoObra;
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
                        base: "100%",
                        md: "25%",
                    }}>
                    <Box>
                        <Text>Plan de Inversión</Text>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Plan Inversión K.O</DataTable.Title>
                                <DataTable.Title>Monto Total </DataTable.Title>
                                <DataTable.Title>Aporte Propio Efectivo</DataTable.Title>
                            </DataTable.Header>
                            
                                
                                    <DataTable.Row>
                                        <DataTable.Cell>Gastos Operativos</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Materia Prima</DataTable.Cell>
                                        <DataTable.Cell>200</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Requerimientos Promocionales</DataTable.Cell>
                                        <DataTable.Cell>300</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Header>
                                <DataTable.Title>Plan Inversión K.I</DataTable.Title>
                                
                            </DataTable.Header>
                            
                                
                                    <DataTable.Row>
                                        <DataTable.Cell>Infraestructura, Terrenos y/o Plantines</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Maquinaria, Equipos, Vehículos y/o Ganado</DataTable.Cell>
                                        <DataTable.Cell>200</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Requerimientos Legales</DataTable.Cell>
                                        <DataTable.Cell>300</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                    </DataTable.Row>

                            <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>TOTAL </DataTable.Title>
                                <DataTable.Title>Bs </DataTable.Title>
                                <DataTable.Title>Bs </DataTable.Title>
                            </DataTable.Header>
                            </DataTable>
                        </DataTable>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Datos Resumen")}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default PlanInversion;