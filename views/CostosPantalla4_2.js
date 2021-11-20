import React from "react";
import { Box, NativeBaseProvider, Center, Stack, ScrollView, FormControl, Input, Button, Text } from "native-base"
import { DataTable } from 'react-native-paper';
import { useState } from "react";
import { parse } from "react-native-svg";

export default function CostoPantalla4_2(props) {

    const { navigation } = props;
    const [TableService, setTableService] = useState([]);
    const [FormTablaInsumo, setFormTablaInsumo] = useState({
        insumo: '',
        cantidad_a: '',
        unidad: '',
        nro_unidades_b: '',
        precio_unitario_c: ''
    });
    console.log(FormTablaInsumo);
    function EstadoInputs(value, input) {
        setFormTablaInsumo({ ...FormTablaInsumo, [input]: value });
    }
    function agregarFila() {
        setTableService([...TableService, FormTablaInsumo]);
        setFormTablaInsumo(
            {
                insumo: '',
                cantidad_a: '',
                unidad: '',
                nro_unidades_b: '',
                precio_unitario_c: '',
            }
        );
    }
    function operacionABC(item) {
        return ((parseFloat(item.cantidad_a) / parseFloat(item.nro_unidades_b)) * parseFloat(item.precio_unitario_c)).toFixed(2)
    }
    function totalABC() {
        let total_abc = 0;
        TableService.map((item) => {
            total_abc = total_abc + parseFloat(operacionABC(item));
        })
        return total_abc;
    }
    let { insumo, cantidad_a, unidad, nro_unidades_b, precio_unitario_c } = FormTablaInsumo;
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
                        <Input variant="rounded" borderColor="gray.400" value={cantidad_a} onChangeText={(value) => EstadoInputs(value, 'cantidad_a')} />
                        <FormControl.Label>Unidad</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={unidad} onChangeText={(value) => EstadoInputs(value, 'unidad')} />
                        <FormControl.Label>N° de Unidades de Productos o Servicios (B)</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={nro_unidades_b} onChangeText={(value) => EstadoInputs(value, 'nro_unidades_b')} />
                        <FormControl.Label>Precio Unitario (C)</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={precio_unitario_c} onChangeText={(value) => EstadoInputs(value, 'precio_unitario_c')} />
                    </FormControl>
                    <Center>
                        <Button onPress={agregarFila}>Añadir</Button>
                    </Center>
                    <ScrollView horizontal>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title style={{ width: 75 }}><Text bold>Insumo</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 100 }}><Text bold>Cantidad (A)</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 80 }}><Text bold>Unidad</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 150 }}><Text bold>N° de Unidades de Productos o Servicios (B)</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 135 }}><Text bold>Precio Unitario  (C)</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 125 }}><Text bold>Total (A/B)*C</Text></DataTable.Title>
                            </DataTable.Header>
                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell style={{ width: 75 }}>{item.insumo}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 100 }}>{item.cantidad_a}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 80 }}>{item.unidad}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 150 }}>{item.nro_unidades_b}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 135 }}>{item.precio_unitario_c}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 125 }}>{operacionABC(item)}</DataTable.Cell>
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