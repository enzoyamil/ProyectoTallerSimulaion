import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Button, Input, Stack, ScrollView, Divider, Box, Center, NativeBaseProvider, Text } from "native-base";
import { DataTable } from 'react-native-paper';

function PlanInversion(props) {
    const { navigation, route } = props;
    const [TableService, setTableService] = useState([]);
    const {
        montoPresupuesto, montoMano, totalAportMateriaP, totalInvMateriaP, totalAportePromo, totalInvPromo,
        totalPropioGasOpe, totalInvGasOpe, totalPropioInfra, totalInvInfra, maqPropTotal, maqInvTotal,
        totalReqLegPropio, totalReqLegInv, totalAporte
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
    function sumaInversion() {
        let total = 0;
        total = parseInt(gastOperativo) + parseInt(materiaPrima) + parseInt(reqPromocionales) + parseInt(infraestructura) + parseInt(maquinaria) + parseInt(reqLegales);
        console.log(total);
        return total;
    }
    function validarSiguiente() {
        if (gastOperativo == 0 || materiaPrima == 0 || reqPromocionales == 0 || infraestructura == 0
            || maquinaria == 0 || reqLegales == 0) {
            Alert.alert("No se puede mandar campos Vacios o con 0");
        } else {
            navigation.navigate("Datos Resumen", {
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
                totalAporte: totalAporte,
                totalInv: totalInv,
                sumaEfectivo: suma
            })
        }
    }

    let { gastOperativo, materiaPrima, reqPromocionales, infraestructura, maquinaria, reqLegales } = FormInvEfectivo;
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
                        <Center><Text fontSize="20" bold>Plan de Inversión</Text></Center>
                        <DataTable style={{ padding: 10 }}>
                            <DataTable.Header>
                                <DataTable.Title style={{ width: 120 }}>Plan Inversión K.O </DataTable.Title>
                                <DataTable.Title style={{ width: 100 }}>Monto Total </DataTable.Title>
                                <DataTable.Title style={{ width: 80 }}>Aporte Efectivo</DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell style={{ width: 120 }}>Operativo </DataTable.Cell>
                                <DataTable.Cell style={{ width: 80 }}>{totalInvGasOpe}</DataTable.Cell>
                                <Input type="text" width="30%" value={gastOperativo} keyboardType="numeric"
                                    onChangeText={(value) => EstadoInputs(value, 'gastOperativo')}
                                ></Input>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell style={{ width: 120 }}>Materia Prima</DataTable.Cell>
                                <DataTable.Cell style={{ width: 80 }}>{totalInvMateriaP}</DataTable.Cell>
                                <Input type="text" width="30%" value={materiaPrima} keyboardType="numeric"
                                    onChangeText={(value) => EstadoInputs(value, 'materiaPrima')}
                                ></Input>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell style={{ width: 120 }}>Req. Promo</DataTable.Cell>
                                <DataTable.Cell style={{ width: 80 }}>{totalInvPromo}</DataTable.Cell>
                                <Input type="text" width="30%" value={reqPromocionales} keyboardType="numeric"
                                    onChangeText={(value) => EstadoInputs(value, 'reqPromocionales')}
                                ></Input>
                            </DataTable.Row>
                            <DataTable.Header>
                                <DataTable.Title>Plan Inversión K.I</DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell style={{ width: 120 }}>Infraestructura</DataTable.Cell>
                                <DataTable.Cell style={{ width: 80 }}>{totalInvInfra}</DataTable.Cell>
                                <Input type="text" width="30%" value={infraestructura} keyboardType="numeric"
                                    onChangeText={(value) => EstadoInputs(value, 'infraestructura')}
                                ></Input>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell style={{ width: 120 }}>Maquinaria</DataTable.Cell>
                                <DataTable.Cell style={{ width: 80 }}>{maqInvTotal}</DataTable.Cell>
                                <Input type="text" width="30%" value={maquinaria} keyboardType="numeric"
                                    onChangeText={(value) => EstadoInputs(value, 'maquinaria')}
                                ></Input>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell style={{ width: 120 }}>Req. Legales</DataTable.Cell>
                                <DataTable.Cell style={{ width: 80 }}>{totalReqLegInv}</DataTable.Cell>
                                <Input type="text" width="30%" value={reqLegales} keyboardType="numeric"
                                    onChangeText={(value) => EstadoInputs(value, 'reqLegales')}
                                ></Input>
                            </DataTable.Row>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title style={{ width: 120 }}>TOTAL </DataTable.Title>
                                    <DataTable.Title style={{ width: 100 }}>{sumaPlanInversion()}</DataTable.Title>
                                    <DataTable.Title style={{ width: 100 }}>{sumaInversion()}</DataTable.Title>
                                </DataTable.Header>
                            </DataTable>
                        </DataTable>
                        <Divider />

                    </Box>
                    <Button colorScheme="primary" onPress={() => validarSiguiente()}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default PlanInversion;