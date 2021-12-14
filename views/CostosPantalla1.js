import React, { useState } from "react";
import { Alert } from "react-native";
import { Box, NativeBaseProvider, Center, Stack, ScrollView, FormControl, Input, Select, Button, Text } from "native-base";
import { DataTable } from 'react-native-paper';

export default function CostoPantalla2(props) {

    const { navigation, route } = props;
    const { montoFin } = route.params;
    const [TableService, setTableService] = useState([]);
    const [FormTablaProducto, setFormTablaProducto] = useState({
        producto_o_servicio: '',
        cantidad: '',
        frecuencia: '',
        precio_c: '',
        precio_v: ''
    });

    function EstadoInputs(value, input) {
        setFormTablaProducto({ ...FormTablaProducto, [input]: value });
    }

    function agregarFila() {
        setTableService([...TableService, FormTablaProducto]);
        setFormTablaProducto({
            producto_o_servicio: '',
            cantidad: '',
            frecuencia: '',
            precio_c: '',
            precio_v: ''
        });
    }

    let { producto_o_servicio, cantidad, frecuencia, precio_c, precio_v } = FormTablaProducto;
    let [service, setService] = React.useState("");

    let mub = MUBTotal();

    function totalCompraMensual(item) {
        return (parseFloat(item.cantidad) * valorfrecuencia(item.frecuencia) * parseFloat(item.precio_c)).toFixed(2);
    }

    function totalVentaMensual(item) {
        return (parseFloat(item.cantidad) * valorfrecuencia(item.frecuencia) * parseFloat(item.precio_v)).toFixed(2);
    }

    function MUB(item) {
        let res = 0;
        if (parseInt(totalVentaMensual(item)) != 0) {
            res = (100 * (totalVentaMensual(item) - totalCompraMensual(item)) / totalVentaMensual(item));
        }
        return res;
    }

    function sumatoriaCompraMensuales() {
        let res = 0;
        TableService.map((item) => {
            res = res + parseFloat(totalCompraMensual(item));
        })
        return res;
    }

    function sumatoriaVentaMensuales() {
        let res = 0;
        TableService.map((item) => {
            res = res + parseFloat(totalVentaMensual(item));
        })
        return res;
    }

    function MUBTotal() {
        let res = 0;
        if (sumatoriaVentaMensuales() != 0) {
            res = (100 * (sumatoriaVentaMensuales() - sumatoriaCompraMensuales()) / sumatoriaVentaMensuales()).toFixed(2);
        }
        return res;
    }

    function valorfrecuencia(cadena) {
        let res = 0;
        if (cadena == "Diario") {
            res = 25
        } else if (cadena == "Semanal") {
            res = 4;
        } else if (cadena == "Quincenal") {
            res = 2;
        } else if (cadena == "Mensual") {
            res = 1;
        } else if (cadena == "Bimestral") {
            res = 0.5;
        } else if (cadena == "Trimestral") {
            res = 30 / 90;
        } else if (cadena == "Semestral") {
            res = 30 / 180;
        } else if (cadena == "Anual") {
            res = 30 / 360;
        }
        return res;
    }

    function buttonPress() {
        if (producto_o_servicio == '' || cantidad == '' || precio_c == '' || precio_v == '') {
            Alert.alert("Error", "No se permiten campos vacios");
        } else if (frecuencia == '') {
            Alert.alert("Error", "Debe de seleccionar un valor en frecuencia");
        } else {
            agregarFila();
        }
    }

    return (
        <NativeBaseProvider style={{ bg: "red" }}>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
                    <Center><Text fontSize="lg" bold>Manufactura y servicios</Text></Center>
                    <Text fontSize="md" bold>Comportamiento de Ventas mensuales</Text>
                    <FormControl>
                        <FormControl.Label>Producto o Servicio</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={producto_o_servicio} onChangeText={(value) => EstadoInputs(value, 'producto_o_servicio')} />
                        {/* <FormControl.Label>Tipo</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={tipo} onChangeText={(value) => EstadoInputs(value, 'tipo')} /> */}
                        <FormControl.Label>Cantidad</FormControl.Label>
                        <Input variant="rounded" keyboardType="numeric" borderColor="gray.400" value={cantidad} onChangeText={(value) => EstadoInputs(value, 'cantidad')} />
                        {/* <FormControl.Label>Unidad de Venta</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={unidad_de_venta} onChangeText={(value) => EstadoInputs(value, 'unidad_de_venta')} /> */}
                        <FormControl.Label>Frecuencia</FormControl.Label>
                        <Select placeholder="Frecuencia" borderColor="gray.400" variant="rounded" value={frecuencia} selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                            onValueChange={(value) => EstadoInputs(value, 'frecuencia')}>
                            <Select.Item label="Diario" value="Diario" />
                            <Select.Item label="Semanal" value="Semanal" />
                            <Select.Item label="Quincenal" value="Quincenal" />
                            <Select.Item label="Mensual" value="Mensual" />
                            <Select.Item label="Bimestral" value="Bimestral" />
                            <Select.Item label="Trimestral" value="Trimestral" />
                            <Select.Item label="Semestral" value="Semestral" />
                            <Select.Item label="Anual" value="Anual" />
                        </Select>
                        <FormControl.Label>Precio Compra</FormControl.Label>
                        <Input variant="rounded" keyboardType="numeric" borderColor="gray.400" value={precio_c} onChangeText={(value) => EstadoInputs(value, 'precio_c')} />
                        <FormControl.Label>Precio Venta</FormControl.Label>
                        <Input variant="rounded" keyboardType="numeric" borderColor="gray.400" value={precio_v} onChangeText={(value) => EstadoInputs(value, 'precio_v')} />
                    </FormControl>
                    <Center>
                        <Button onPress={buttonPress}>Añadir</Button>
                    </Center>
                    <ScrollView horizontal>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title style={{ width: 140 }}><Text bold>Producto o Servicio</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 90 }}><Text bold>Frecuencia</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 75 }}><Text bold>Precio C</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 75 }}><Text bold>Precio V</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 155 }}><Text bold>Total compra mensual</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 145 }}><Text bold>Total venta mensual</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 50 }}><Text bold>MUB</Text></DataTable.Title>
                            </DataTable.Header>
                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell style={{ width: 140 }}>{item.producto_o_servicio}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 90 }}>{item.frecuencia}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 75 }}>{item.precio_c}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 75 }}>{item.precio_v}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 155 }}>{totalCompraMensual(item)}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 145 }}>{totalVentaMensual(item)}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 50 }}>{MUB(item)}%</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                        </DataTable>
                    </ScrollView>
                    <Box rounded="xl" p="5" borderWidth="1">
                        <Stack space={3}>
                            <Text>Totales: </Text>
                            <Text>Sumatoria total compra mensual: {sumatoriaCompraMensuales()}</Text>
                            <Text>Sumatoria total venta mensual: {sumatoriaVentaMensuales()}</Text>
                            <Text>MUB total: {MUBTotal()}%</Text>
                        </Stack>
                    </Box>
                    <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos2", { mub, montoFin })}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    )

}
