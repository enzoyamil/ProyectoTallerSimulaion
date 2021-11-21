import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, NativeBaseProvider, Center, Stack, ScrollView, FormControl, Input, Button, Text } from "native-base";
import { DataTable } from 'react-native-paper';

export default function CostoPantalla4_2(props) {

    const { navigation, route } = props;

    const { id } = route.params;

    const [TableService, setTableService] = useState([]);

    const [FormTablaInsumo, setFormTablaInsumo] = useState({
        insumo: '',
        cantidad_a: '',
        nro_unidades_b: '',
        precio_unitario_c: ''
    });

    useEffect(() => {
        getInsumos(id).then(async (res) => {
            const table_defecto = await res;
            setTableService(table_defecto);
        })
    }, []);

    function EstadoInputs(value, input) {
        setFormTablaInsumo({ ...FormTablaInsumo, [input]: value });
    }

    let { insumo, cantidad_a, nro_unidades_b, precio_unitario_c } = FormTablaInsumo;

    function agregarFila(id) {
        setTableService([...TableService, FormTablaInsumo]);
        setFormTablaInsumo({
            insumo: '',
            cantidad_a: '',
            nro_unidades_b: '',
            precio_unitario_c: '',
        }
        );
        guardartablaInsumo(id);
    }
    /*Funciones para guardar las tablas de insumos dentro los contenedores*/
    async function guardartablaInsumo(id) {
        let arr = await AsyncStorage.getItem("insumos");
        let arrjson = JSON.parse(arr);
        let { table } = arrjson[id];
        table = [...table, FormTablaInsumo];
        arrjson[id] = { table };
        arrjson = [...arrjson]
        await AsyncStorage.setItem("insumos", JSON.stringify(arrjson));
    }

    
    async function getInsumos(id) {
        let arr = await AsyncStorage.getItem("insumos");
        let arrjson = JSON.parse(arr);
        let { table } = arrjson[id];
        return table;
    }
    /*************************************************/
    // async function resetInsumos(){
    //     await AsyncStorage.setItem("insumos", "[]");
    // }
    /*Operaciones*/
    function operacionABC(item) {
        let res = 0;
        if (parseFloat(item.nro_unidades_b) != 0) {
            res = ((parseFloat(item.cantidad_a) / parseFloat(item.nro_unidades_b)) * parseFloat(item.precio_unitario_c)).toFixed(2);
        }
        return res;
    }

    function totalABC() {
        let res = 0;
        TableService.map((item) => {
            res = res + parseFloat(operacionABC(item));
        })
        return res;
    }
    /***********************************************/
    function buttonPress(id) {
        if (insumo == '' || cantidad_a == '' || nro_unidades_b == '' || precio_unitario_c == '') {
            Alert.alert("Error", "No se permiten campos vacios");
        } else {
            agregarFila(id);
        }
    }

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
                    <FormControl>
                        <FormControl.Label>Insumo</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={insumo} onChangeText={(value) => EstadoInputs(value, 'insumo')} />
                        <FormControl.Label>Cantidad (A)</FormControl.Label>
                        <Input variant="rounded" keyboardType="numeric" borderColor="gray.400" value={cantidad_a} onChangeText={(value) => EstadoInputs(value, 'cantidad_a')} />
                        {/* <FormControl.Label>Unidad</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={unidad} onChangeText={(value) => EstadoInputs(value, 'unidad')} /> */}
                        <FormControl.Label>N° de Unidades de Productos o Servicios (B)</FormControl.Label>
                        <Input variant="rounded" keyboardType="numeric" borderColor="gray.400" value={nro_unidades_b} onChangeText={(value) => EstadoInputs(value, 'nro_unidades_b')} />
                        <FormControl.Label>Precio Unitario (C)</FormControl.Label>
                        <Input variant="rounded" keyboardType="numeric" borderColor="gray.400" value={precio_unitario_c} onChangeText={(value) => EstadoInputs(value, 'precio_unitario_c')} />
                    </FormControl>
                    <Center>
                        <Button onPress={() => buttonPress(id)}>Añadir</Button>
                    </Center>
                    <ScrollView horizontal>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title style={{ width: 75 }}><Text bold>Insumo</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 100 }}><Text bold>Cantidad (A)</Text></DataTable.Title>
                                {/* <DataTable.Title style={{ width: 80 }}><Text bold>Unidad</Text></DataTable.Title> */}
                                <DataTable.Title style={{ width: 150 }}><Text bold>N° de Unidades (B)</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 135 }}><Text bold>Precio Unitario  (C)</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 90 }}><Text bold>Total (A/B)*C</Text></DataTable.Title>
                            </DataTable.Header>
                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell style={{ width: 75 }}>{item.insumo}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 100 }}>{item.cantidad_a}</DataTable.Cell>
                                        {/* <DataTable.Cell style={{ width: 80 }}>{item.unidad}</DataTable.Cell> */}
                                        <DataTable.Cell style={{ width: 150 }}>{item.nro_unidades_b}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 135 }}>{item.precio_unitario_c}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 90 }}>{operacionABC(item)}</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                        </DataTable>
                    </ScrollView>
                    <Box rounded="xl" p="5" borderWidth="1">
                        <Text>Total costo (D): {totalABC()}</Text>
                    </Box>
                    <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos4")}>Guardar</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    )

}