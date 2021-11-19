import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack,  ScrollView, Divider, Box,
    NativeBaseProvider, Text
} from "native-base";
import { DataTable } from 'react-native-paper';

function PresupuestoResumen(props) {
    const { navigation } = props;
    const [TableService, setTableService] = useState([]);

    const [FormResumen, setFormResumen] = useState({
        efectivo: '',
        manoObra: '',
        materiaPrima: '',
        reqPromocionales: '',
        infraestructura: '',
        maquinaria: '',
        reqLegales: '',
        gastoOperativo:''
    });
    function EstadoInputs(value, input) {
        setFormResumen({ ...FormResumenInv, [input]: value });
        console.log(FormResumenInv);
    }

    let { efectivo,manoObra,materiaPrima,reqPromocionales,infraestructura,maquinaria,reqLegales,gastoOperativo} = FormResumen;

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
                        <Text>Aporte Propio</Text>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Aporte Propio K.O</DataTable.Title>
                                <DataTable.Title>Monto Total </DataTable.Title>
                            </DataTable.Header>
                            
                                
                                    <DataTable.Row>
                                        <DataTable.Cell>Efectivo</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Mano de Obra del Emprendedor</DataTable.Cell>
                                        <DataTable.Cell>200</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Materia Prima, Insumos y/o Animales de Engorde</DataTable.Cell>
                                        <DataTable.Cell>300</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Requerimientos Promocionales</DataTable.Cell>
                                        <DataTable.Cell>400</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>GastoOperativo</DataTable.Cell>
                                        <DataTable.Cell>500</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Header>
                                <DataTable.Title>Aporte Propio K.I</DataTable.Title>
                                <DataTable.Title>Monto Total </DataTable.Title>
                            </DataTable.Header>
                            
                                
                                    <DataTable.Row>
                                        <DataTable.Cell>Infraestructura, Terrenos y/o Plantines</DataTable.Cell>
                                        <DataTable.Cell>100</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Maquinaria, Equipos, Vehículos y/o Ganado</DataTable.Cell>
                                        <DataTable.Cell>200</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Requerimientos Legales</DataTable.Cell>
                                        <DataTable.Cell>300</DataTable.Cell>
                                    </DataTable.Row>

                            <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>TOTAL </DataTable.Title>
                                <DataTable.Title>Bs </DataTable.Title>
                            </DataTable.Header>
                            </DataTable>
                        </DataTable>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Plan Inversión")}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default PresupuestoResumen;