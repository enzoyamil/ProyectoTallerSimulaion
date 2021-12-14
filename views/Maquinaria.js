import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { FormControl, Button, Input, Stack, ScrollView, Divider, Box, Center, NativeBaseProvider, Text } from "native-base";
import { DataTable } from 'react-native-paper';

function Maquinaria(props) {
    const { navigation, route } = props;
    const [TableService, setTableService] = useState([]);
    const [FormMaquinaria, setFormMaquinaria] = useState({
        cantidad: '',
        unidad: '',
        detalle: '',
        aportePropio: '',
        seInvertira: ''
    });
    const { montoPresupuesto, montoMano, totalAportMateriaP, totalInvMateriaP, totalAportePromo, totalInvPromo, totalPropioGasOpe, totalInvGasOpe, totalPropioInfra, totalInvInfra } = route.params;

    useEffect(() => {
        setFormMaquinaria(FormMaquinaria);
    }, [FormMaquinaria]);


    function EstadoInputs(value, input) {
        setFormMaquinaria({ ...FormMaquinaria, [input]: value });
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
    function agregarFila() {
        if (validarAgregar()) {
            Alert.alert("Eror Campos Vacíos");
        } else {
            setTableService([...TableService, FormMaquinaria]);
            setFormMaquinaria(
                {
                    cantidad: '',
                    unidad: '',
                    detalle: '',
                    aportePropio: '',
                    seInvertira: ''
                }
            );
        }
    }
    function validarAgregar() {
        let isValid = true;
        if (cantidad == '' || unidad == '' || aportePropio == '' || seInvertira == '') {
            return isValid;
        } else {
            return isValid = false;
        }
    }
    function validarSiguiente() {
        let tamanio = TableService.length;
        if (tamanio > 0) {
            navigation.navigate("Requerimiento Legal", {
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
                maqInvTotal: maqInvTotal

            })
        } else {
            Alert.alert("Error Tabla Vacía");
        }
    }

    let maqPropTotal = sumAportePropio("aportePropio");
    let maqInvTotal = sumInversionPropio("seInvertira");
    let { cantidad, unidad, detalle, aportePropio, seInvertira } = FormMaquinaria;

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack
                    space={5}
                    alignSelf="center"
                    px="4"
                    safeArea
                    mt="4"
                    w={{
                        base: "100%",
                        md: "25%",
                    }}>
                        <Center><Text fontSize="22" bold > Capital Inversión</Text></Center>
                    <Center><Text fontSize="20" bold >Maquinaria</Text></Center>
                    <Box>
                        <FormControl mb="5">
                        <FormControl.Label >Unidad (Precio Unitario)*</FormControl.Label>
                            <Input variant="rounded" value={unidad} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'unidad')} />

                            <FormControl.Label >Cantidad*</FormControl.Label>
                            <Input variant="rounded" value={cantidad} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'cantidad')} />
                            
                            {/* <FormControl.Label >Detalle</FormControl.Label>
                            <Input variant="rounded" value={detalle}
                                onChangeText={(value) => EstadoInputs(value, 'detalle')} /> */}
                            <FormControl.Label >Aporte Propio*</FormControl.Label>
                            <Input variant="rounded" value={aportePropio} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'aportePropio')} />
                            <FormControl.Label >Inversión*</FormControl.Label>
                            <Input variant="rounded" value={seInvertira} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'seInvertira')} />
                        </FormControl>
                        <Center>
                            <Button colorScheme="primary" onPress={agregarFila}>Añadir</Button>
                        </Center>
                        <Text>Capital Operativo</Text>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Cantidad</DataTable.Title>
                                <DataTable.Title>Unidad </DataTable.Title>
                                <DataTable.Title>Aporte Propio</DataTable.Title>
                                <DataTable.Title>Inversión</DataTable.Title>
                            </DataTable.Header>
                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell>{item.cantidad}</DataTable.Cell>
                                        <DataTable.Cell>{item.unidad}</DataTable.Cell>
                                        <DataTable.Cell>{item.aportePropio}</DataTable.Cell>
                                        <DataTable.Cell>{item.seInvertira}</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                        </DataTable>
                    </Box>
                    <Box rounded="xl" p="5" borderWidth="1">
                        <Stack space={3}>
                            <Text>SUBTOTAL:</Text>
                            <Text>Aporte propio: {sumAportePropio("aportePropio")}</Text>
                            <Text>Inversion propia: {sumInversionPropio("seInvertira")}</Text>
                        </Stack>
                    </Box>
                    <Button colorScheme="primary" onPress={() => validarSiguiente()}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default Maquinaria;