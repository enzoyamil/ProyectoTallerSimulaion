import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select, FlatList, Text
} from "native-base";
import { DataTable } from 'react-native-paper';

function DatosResumen(props) {
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
            <ScrollView
                w={{
                    base: "90%",
                    md: "90%",
                }}>
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
                                <DataTable.Cell>Total Proyecto</DataTable.Cell>
                                <DataTable.Cell>Bs </DataTable.Cell>
                            </DataTable.Header>
                            
                                
                                    <DataTable.Row>
                                        <DataTable.Cell>Aporte Propio</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>%Aporte Propio</DataTable.Cell>
                                        <DataTable.Cell>200</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <Text>APORTE PROPIO PARA GARANTIA HIPOTECARIA DEBE SER 10% Y PARA OTRA GARANTIA 20%</Text>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>MONTO A FINANCIAR</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Primer Desembolso</DataTable.Cell>
                                        <DataTable.Cell>200</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Segundo Desembolso</DataTable.Cell>
                                        <DataTable.Cell>300</DataTable.Cell>
                                    </DataTable.Row>

                            <DataTable>
                            </DataTable>
                        </DataTable>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos")}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default DatosResumen;