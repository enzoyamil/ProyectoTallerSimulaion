import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select, FlatList, Text
} from "native-base";
import { DataTable } from 'react-native-paper';


function ReqLegales(props) {
    const { navigation,route } = props;
    const [TableService, setTableService] = useState([]);

    const [FormReqLegal, setFormReqLegal] = useState({
        cantidad: '',
        unidad: '',
        detalle: '',
        aportePropio: '',
        seInvertira: ''
    });
    const {
        montoPresupuesto,montoMano,totalAportMateriaP,totalInvMateriaP,totalAportePromo,totalInvPromo,
        totalPropioGasOpe,totalInvGasOpe,totalPropioInfra,totalInvInfra,maqPropTotal,maqInvTotal
    } = route.params;

    useEffect(() => {
        setFormReqLegal(FormReqLegal);
    }, [FormReqLegal]);


    function EstadoInputs(value, input) {
        setFormReqLegal({ ...FormReqLegal, [input]: value });
        console.log(FormReqLegal);
    }

    function sumAportePropio(obj) {
        let invPropia = 0;
        TableService.map((item) => {
            let numero = parseInt(item[obj]);
            invPropia = invPropia + numero;
        })
        return invPropia;
    }

    function sumInversionPropio(obj) {
        let invPropioTotal = 0;
        TableService.map((item) => {
            let numero = parseInt(item[obj]);
            invPropioTotal = invPropioTotal + numero;
        })
        return invPropioTotal;
    }
    let totalReqLegPropio= sumAportePropio("aportePropio");
    let totalReqLegInv= sumInversionPropio("seInvertira");
    function agregarFila() {
        setTableService([...TableService, FormReqLegal]);
        setFormReqLegal(
            {
                cantidad: '',
                unidad: '',
                detalle: '',
                aportePropio: '',
                seInvertira: ''
            }
        );
        // console.log(TableService);
    }

    function totalCapitalInvProp(){
        let total=0
        return  total= totalPropioInfra+maqPropTotal+ totalReqLegPropio;
    }
    function totalCapitalInvInv(){
        let total=0
        return  total= totalInvInfra + maqInvTotal + totalReqLegInv;
    }

    let sumaCapitalInvProp= totalCapitalInvProp();
    let sumaCapitalInvInv= totalCapitalInvInv();
    let { cantidad, unidad, detalle, aportePropio, seInvertira } = FormReqLegal;
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
                    }}
                >
                    <Box>
                        <Text> Capital Inversión</Text>
                        <FormControl mb="5">
                            <FormControl.Label >Cantidad</FormControl.Label>
                            <Input variant="rounded" value={cantidad} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'cantidad')} />

                            <FormControl.Label >Unidad</FormControl.Label>
                            <Input variant="rounded" value={unidad} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'unidad')} />

                            <FormControl.Label >Detalle</FormControl.Label>
                            <Input variant="rounded" value={detalle}
                                onChangeText={(value) => EstadoInputs(value, 'detalle')} />

                            <FormControl.Label >Aporte Propio</FormControl.Label>
                            <Input variant="rounded" value={aportePropio} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'aportePropio')} />

                            <FormControl.Label >Inversión</FormControl.Label>
                            <Input variant="rounded" value={seInvertira} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'seInvertira')} />



                        </FormControl>
                        <Box>
                            <Button colorScheme="primary" onPress={agregarFila}>Añadir</Button>
                        </Box>

                        <Text>Capital Operativo</Text>

                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Cantidad</DataTable.Title>
                                <DataTable.Title>Unidad </DataTable.Title>
                                {/* <DataTable.Title>Detalle</DataTable.Title> */}
                                <DataTable.Title>Aporte Propio</DataTable.Title>
                                <DataTable.Title>Inversión</DataTable.Title>
                            </DataTable.Header>

                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell>{item.cantidad}</DataTable.Cell>
                                        <DataTable.Cell>{item.unidad}</DataTable.Cell>
                                        {/* <DataTable.Cell>{item.detalle}</DataTable.Cell> */}
                                        <DataTable.Cell>{item.aportePropio}</DataTable.Cell>
                                        <DataTable.Cell>{item.seInvertira}</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                            <DataTable>
                                <DataTable.Row>
                                    <DataTable.Cell> SUBTOTAL</DataTable.Cell>
                                    <DataTable.Cell> {sumAportePropio("aportePropio")}</DataTable.Cell>
                                    <DataTable.Cell>{sumInversionPropio("seInvertira")}</DataTable.Cell>
                                </DataTable.Row>

                            </DataTable>
                            <DataTable>
                                <DataTable.Row>
                                    <DataTable.Cell> TOTAL</DataTable.Cell>
                                    <DataTable.Cell> {sumaCapitalInvProp}</DataTable.Cell>
                                    <DataTable.Cell> {sumaCapitalInvInv}</DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                        </DataTable>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Presupuesto Resumen")}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default ReqLegales;