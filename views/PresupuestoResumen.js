import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack,  ScrollView, Divider, Box,
    NativeBaseProvider, Text
} from "native-base";
import { DataTable } from 'react-native-paper';

function PresupuestoResumen(props) {
    const { navigation,route } = props;
    const {
        montoPresupuesto,montoMano,totalAportMateriaP,totalInvMateriaP,totalAportePromo,totalInvPromo,
        totalPropioGasOpe,totalInvGasOpe,totalPropioInfra,totalInvInfra,maqPropTotal,maqInvTotal,
        totalReqLegPropio,totalReqLegInv
    } = route.params;
    // const [TableService, setTableService] = useState([]);
    // const [FormResumen, setFormResumen] = useState({
    //     efectivo: '',
    //     manoObra: '',
    //     materiaPrima: '',
    //     reqPromocionales: '',
    //     infraestructura: '',
    //     maquinaria: '',
    //     reqLegales: '',
    //     gastoOperativo:''
    // });
    // function EstadoInputs(value, input) {
    //     setFormResumen({ ...FormResumenInv, [input]: value });
    //     console.log(FormResumenInv);
    // }
    // let { efectivo,manoObra,materiaPrima,reqPromocionales,infraestructura,maquinaria,reqLegales,gastoOperativo} = FormResumen;
    function totalAportePropio(){
        let total = 0;
        total = montoPresupuesto + montoMano + totalAportMateriaP + totalAportePromo
        + totalPropioGasOpe + totalPropioInfra + maqPropTotal + totalReqLegPropio;
        return total;
    }

    let totalAporte = totalAportePropio();
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
                                        <DataTable.Cell>{montoPresupuesto}</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Mano de Obra del Emprendedor</DataTable.Cell>
                                        <DataTable.Cell>{montoMano}</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Materia Prima</DataTable.Cell>
                                        <DataTable.Cell>{totalAportMateriaP}</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Requerimientos Promocionales</DataTable.Cell>
                                        <DataTable.Cell>{totalAportePromo}</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>GastoOperativo</DataTable.Cell>
                                        <DataTable.Cell>{totalPropioGasOpe}</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Header>
                                <DataTable.Title>Aporte Propio K.I</DataTable.Title>
                                <DataTable.Title>Monto Total </DataTable.Title>
                            </DataTable.Header>
                            
                                
                                    <DataTable.Row>
                                        <DataTable.Cell>Infraestructura</DataTable.Cell>
                                        <DataTable.Cell>{totalPropioInfra}</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Maquinaria</DataTable.Cell>
                                        <DataTable.Cell>{maqPropTotal}</DataTable.Cell>
                                    </DataTable.Row>

                                    <DataTable.Row>
                                        <DataTable.Cell>Requerimientos Legales</DataTable.Cell>
                                        <DataTable.Cell>{totalReqLegPropio}</DataTable.Cell>
                                    </DataTable.Row>

                            <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>TOTAL </DataTable.Title>
                                <DataTable.Title>{totalAportePropio()} </DataTable.Title>
                            </DataTable.Header>
                            </DataTable>
                        </DataTable>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Plan Inversión",{
                    montoPresupuesto:montoPresupuesto,
                    montoMano:montoMano,
                    totalAportMateriaP:totalAportMateriaP,
                    totalInvMateriaP: totalInvMateriaP,
                    totalAportePromo:totalAportePromo,
                    totalInvPromo:totalInvPromo,
                    totalPropioGasOpe:totalPropioGasOpe,
                    totalInvGasOpe:totalInvGasOpe,
                    totalPropioInfra:totalPropioInfra,
                    totalInvInfra:totalInvInfra,
                    maqPropTotal:maqPropTotal,
                    maqInvTotal:maqInvTotal,
                    totalReqLegPropio:totalReqLegPropio,
                    totalReqLegInv:totalReqLegInv,
                    totalAporte:totalAporte
                })}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default PresupuestoResumen;