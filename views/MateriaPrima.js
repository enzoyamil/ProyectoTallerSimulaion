import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { FormControl, Button, Input, Stack, ScrollView, Divider, Box, NativeBaseProvider, Text, Center } from "native-base";
import { DataTable } from 'react-native-paper';


function MateriaPrima(props) {
    const { navigation, route } = props;
    const { montoPresupuesto, montoMano } = route.params;
    const [TableService, setTableService] = useState([]);
    const [FormateriaPrima, setFormateriaPrima] = useState({
        cantidad: '',
        unidad: '',
        detalle: '',
        aportePropio: '',
        seInvertira: ''
    });

    useEffect(() => {
        setFormateriaPrima(FormateriaPrima);
    }, [FormateriaPrima]);

    function EstadoInputs(value, input) {
        setFormateriaPrima({ ...FormateriaPrima, [input]: value });
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
            
        } else {
            setTableService([...TableService, FormateriaPrima]);
            setFormateriaPrima(
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
            Alert.alert("Error","No se puede agregar campos Vacíos");
            return isValid;
            
        }else if((parseInt(cantidad)*parseInt(unidad))!=(parseInt(aportePropio) + parseInt(seInvertira))){
            Alert.alert("Error","La suma de aporte propio y inversión no coincide con la cantidad por el precio unitario");
            return isValid;
        }
        else {
            return isValid = false;
        }
    }
    function validarSiguiente() {
        let tamanio = TableService.length;
        if (tamanio > 0) {
            navigation.navigate("Requerimientos Promocionales", {
                montoPresupuesto: montoPresupuesto,
                montoMano: montoMano,
                totalAportMateriaP: montoApor,
                totalInvMateriaP: montoInversion
            });
        } else {
            Alert.alert("Error","Error Tabla Vacía");
        }
    }

    let montoApor = sumAportePropio("aportePropio");
    let montoInversion = sumInversionPropio("seInvertira");
    let { cantidad, unidad, aportePropio, seInvertira } = FormateriaPrima;

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
                    <Box>
                        <Center><Text fontSize="20" bold >Materia Prima</Text></Center>
                        <FormControl mb="5">

                            <FormControl.Label >Unidad (Precio Unitario Bs.)(*)</FormControl.Label>
                            <Input variant="rounded" value={unidad} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'unidad')} />

                            <FormControl.Label >Cantidad(*)</FormControl.Label>
                            <Input variant="rounded" value={cantidad} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'cantidad')} />
                            {/* <FormControl.Label >Detalle</FormControl.Label>
                            <Input variant="rounded" value={detalle}
                                onChangeText={(value) => EstadoInputs(value, 'detalle')} /> */}
                            <FormControl.Label >Aporte Propio Bs.(*)</FormControl.Label>
                            <Input variant="rounded" value={aportePropio} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'aportePropio')} />
                            <FormControl.Label >Inversión Bs.(*)</FormControl.Label>
                            <Input variant="rounded" value={seInvertira} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'seInvertira')} />
                        </FormControl>
                        <Center>
                            <Button colorScheme="primary" onPress={agregarFila}>Añadir</Button>
                        </Center>
                        <Center><Text fontSize="15" bold margin="2">Capital Materia Prima</Text></Center>
                    <ScrollView horizontal>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title style={{ width: 80 }}>Cantidad</DataTable.Title>
                                <DataTable.Title style={{ width: 100 }}>Precio Unitario</DataTable.Title>
                                <DataTable.Title style={{ width: 100 }}>Aporte Propio</DataTable.Title>
                                <DataTable.Title style={{ width: 100 }}>Inversión</DataTable.Title>
                            </DataTable.Header>
                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell style={{ width: 80 }}>{item.cantidad}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 100 }}>{parseFloat(item.unidad).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 100 }}>{parseFloat(item.aportePropio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 100 }}>{parseFloat(item.seInvertira).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                        </DataTable>
                        </ScrollView>
                    </Box>
                    <Box rounded="xl" p="5" borderWidth="1" style={{ backgroundColor: '#FAF2B0'}}>
                        <Stack space={3}>
                            <Text>SUBTOTAL:</Text>
                            <Text>Aporte propio: {sumAportePropio("aportePropio").toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                            <Text>Inversion propia: {sumInversionPropio("seInvertira").toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                        </Stack>
                    </Box>
                    <Button colorScheme="primary" onPress={() => validarSiguiente()}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default MateriaPrima;