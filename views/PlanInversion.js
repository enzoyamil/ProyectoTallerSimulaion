import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select, FlatList, Text
} from "native-base";
import { DataTable } from 'react-native-paper';

function PlanInversion(props) {
    const { navigation, route } = props;
    const [TableService, setTableService] = useState([]);
    const {
        montoPresupuesto,montoMano,totalAportMateriaP,totalInvMateriaP,totalAportePromo,totalInvPromo,
        totalPropioGasOpe,totalInvGasOpe,totalPropioInfra,totalInvInfra,maqPropTotal,maqInvTotal,
        totalReqLegPropio,totalReqLegInv,totalAporte
    } = route.params;

    const [FormInvEfectivo, setFormInvEfectivo] = useState({
        gastOperativo: 0,
        materiaPrima: 0,
        reqPromocionales: 0,
        infraestructura: 0,
        maquinaria: 0,
        reqLegales: 0
    });
    
    useEffect(() => {
        setFormInvEfectivo(FormInvEfectivo);
    }, [FormInvEfectivo]);


    function sumaPlanInversion() {
        let numero = 0;
        numero = totalInvGasOpe + totalInvInfra + totalInvMateriaP + totalInvPromo + maqInvTotal + totalReqLegInv;
        return numero;
    }

    function EstadoInputs(value, input) {
        setFormInvEfectivo({ ...FormInvEfectivo, [input]: value });
        console.log(FormInvEfectivo);
    }

    function sumaInversion(){
        let total=0;
        total = parseInt(gastOperativo)+parseInt(materiaPrima)+parseInt(reqPromocionales)+parseInt(infraestructura)+parseInt(maquinaria)+parseInt(reqLegales);
        console.log(total);
        return total;
    }

    let { gastOperativo,materiaPrima,reqPromocionales,infraestructura,maquinaria,reqLegales} = FormInvEfectivo;
    let suma = sumaInversion();
    let totalInv = sumaPlanInversion();
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
                                <DataTable.Cell>{totalInvGasOpe}</DataTable.Cell>
                                <Input type="text" width="20%" value={gastOperativo}
                                onChangeText={(value) => EstadoInputs(value, 'gastOperativo')}
                                ></Input>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Materia Prima</DataTable.Cell>
                                <DataTable.Cell>{totalInvMateriaP}</DataTable.Cell>
                                <Input type="text"  width="20%" value={materiaPrima}
                                onChangeText={(value) => EstadoInputs(value, 'materiaPrima')}
                                ></Input>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Requerimientos Promocionales</DataTable.Cell>
                                <DataTable.Cell>{totalInvPromo }</DataTable.Cell>
                                <Input type="text"  width="20%" value={reqPromocionales}
                                onChangeText={(value) => EstadoInputs(value, 'reqPromocionales')}
                                ></Input>
                            </DataTable.Row>

                            <DataTable.Header>
                                <DataTable.Title>Plan Inversión K.I</DataTable.Title>

                            </DataTable.Header>


                            <DataTable.Row>
                                <DataTable.Cell>Infraestructura, Terrenos y/o Plantines</DataTable.Cell>
                                <DataTable.Cell>{totalInvInfra}</DataTable.Cell>
                                <Input type="text"  width="20%" value={infraestructura}
                                onChangeText={(value) => EstadoInputs(value, 'infraestructura')}
                                ></Input>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Maquinaria, Equipos, Vehículos y/o Ganado</DataTable.Cell>
                                <DataTable.Cell>{maqInvTotal}</DataTable.Cell>
                                <Input type="text"  width="20%" value={maquinaria}
                                onChangeText={(value) => EstadoInputs(value, 'maquinaria')}
                                ></Input>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Requerimientos Legales</DataTable.Cell>
                                <DataTable.Cell>{totalReqLegInv }</DataTable.Cell>
                                <Input type="text"  width="20%" value={reqLegales}
                                onChangeText={(value) => EstadoInputs(value, 'reqLegales')}
                                ></Input>
                            </DataTable.Row>

                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>TOTAL </DataTable.Title>
                                    <DataTable.Title>{sumaPlanInversion()}</DataTable.Title>
                                    <DataTable.Title>{sumaInversion()}</DataTable.Title>
                                </DataTable.Header>
                            </DataTable>
                        </DataTable>
                        <Divider />
                        {/* <Button colorScheme="primary" onPress={sumaInversion()}/> */}
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                
                <Button colorScheme="primary" onPress={() => navigation.navigate("Datos Resumen",{
                    montoPresupuesto: montoPresupuesto,
                    montoMano: montoMano,
                    totalAportMateriaP: totalAportMateriaP,
                    totalInvMateriaP: totalInvMateriaP,
                    totalAportePromo: totalAportePromo,
                    totalInvPromo: totalInvPromo,
                    totalPropioGasOpe: totalPropioGasOpe,
                    totalInvGasOpe: totalInvGasOpe,
                    totalPropioInfra: totalPropioInfra,
                    totalInvInfra: totalInvInfra,
                    maqPropTotal: maqPropTotal,
                    maqInvTotal: maqInvTotal,
                    totalReqLegPropio: totalReqLegPropio,
                    totalReqLegInv: totalReqLegInv,
                    totalAporte:totalAporte,
                    totalInv:totalInv,
                    sumaEfectivo:suma
                })
                    
                }>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default PlanInversion;