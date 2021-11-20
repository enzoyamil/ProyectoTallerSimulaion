import React from "react";
import { Box, NativeBaseProvider, Center, Stack, ScrollView, FormControl, Input, Select, Button, Text } from "native-base"
import { DataTable } from 'react-native-paper';
import { useState } from "react";

export default function CostoPantalla2(props) {

    const { navigation } = props;
    const [TableService, setTableService] = useState([]);
    const [FormTablaProducto, setFormTablaProducto] = useState({
        producto_o_servicio: '',
        tipo: '',
        cantidad: '',
        unidad_de_venta: '',
        frecuencia: '',
        precio_c: '',
        precio_v: ''
    });
    console.log(FormTablaProducto);
    function EstadoInputs(value, input) {
        setFormTablaProducto({ ...FormTablaProducto, [input]: value });
    }
    function agregarFila() {
        setTableService([...TableService, FormTablaProducto]);
        setFormTablaProducto(
            {
                producto_o_servicio: '',
                tipo: '',
                cantidad: '',
                unidad_de_venta: '',
                frecuencia: '',
                precio_c: '',
                precio_v: ''
            }
        );
    }
    let { producto_o_servicio, tipo, cantidad, unidad_de_venta, frecuencia, precio_c, precio_v, mub } = FormTablaProducto;
    mub = MUBTotal();
    console.log(mub)
    let [service, setService] = React.useState("");
    function totalCompraMensual(item) {
        return (parseFloat(item.cantidad) * valorfrecuencia(item.frecuencia) * parseFloat(item.precio_c)).toFixed(2);
    }
    function totalVentaMensual(item) {
        return (parseFloat(item.cantidad) * valorfrecuencia(item.frecuencia) * parseFloat(item.precio_v)).toFixed(2);
    }
    function MUB(item) {
        let total_compra_mensual = totalCompraMensual(item);
        let total_venta_mensual = totalVentaMensual(item);
        return (100 * (total_venta_mensual - total_compra_mensual) / total_venta_mensual).toFixed(2);
    }
    function sumatoriaCompraMensuales() {
        let sum_total_compra = 0;
        TableService.map((item) => {
            sum_total_compra = sum_total_compra + parseFloat(totalCompraMensual(item));
        })
        return sum_total_compra;
    }
    function sumatoriaVentaMensuales() {
        let sum_total_venta = 0;
        TableService.map((item) => {
            sum_total_venta = sum_total_venta + parseFloat(totalVentaMensual(item));
        })
        return sum_total_venta;
    }
    function MUBTotal() {
        let mub_total = 0;
        if (parseFloat(sumatoriaVentaMensuales()) != 0 && parseFloat(sumatoriaCompraMensuales()) != 0) {
            mub_total = (100 * (parseFloat(sumatoriaVentaMensuales()) - parseFloat(sumatoriaCompraMensuales())) / parseFloat(sumatoriaVentaMensuales())).toFixed(2);
        }
        return mub_total;
    }
    function valorfrecuencia(cadena) {
        let valor_frecuencia = 0;
        if (cadena == "Diario") {
            valor_frecuencia = 25
        } else if (cadena == "Semanal") {
            valor_frecuencia = 4;
        } else if (cadena == "Quincenal") {
            valor_frecuencia = 2;
        } else if (cadena == "Mensual") {
            valor_frecuencia = 1;
        } else if (cadena == "Bimestral") {
            valor_frecuencia = 0.5;
        } else if (cadena == "Trimestral") {
            valor_frecuencia = 30 / 90;
        } else if (cadena == "Semestral") {
            valor_frecuencia = 30 / 180;
        } else if (cadena == "Anual") {
            valor_frecuencia = 30 / 360;
        }
        return valor_frecuencia;
    }
    return (
        <NativeBaseProvider style={{bg: "red"}}>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
                    <Center><Text fontSize="lg" bold>10. Hoja de Costos Directos</Text></Center>
                    <Center><Text fontSize="lg" bold>Manufactura y servicios</Text></Center>
                    <Text fontSize="md" bold>Comportamiento de Ventas mensuales</Text>
                    <FormControl>
                        <FormControl.Label>Producto o Servicio</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={producto_o_servicio} onChangeText={(value) => EstadoInputs(value, 'producto_o_servicio')} />
                        <FormControl.Label>Tipo</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={tipo} onChangeText={(value) => EstadoInputs(value, 'tipo')} />
                        <FormControl.Label>Cantidad</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={cantidad} onChangeText={(value) => EstadoInputs(value, 'cantidad')} />
                        <FormControl.Label>Unidad de Venta</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={unidad_de_venta} onChangeText={(value) => EstadoInputs(value, 'unidad_de_venta')} />
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
                        <Input variant="rounded" borderColor="gray.400" value={precio_c} onChangeText={(value) => EstadoInputs(value, 'precio_c')} />
                        <FormControl.Label>Precio Venta</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={precio_v} onChangeText={(value) => EstadoInputs(value, 'precio_v')} />
                    </FormControl>
                    <Center>
                        <Button onPress={agregarFila}>Añadir</Button>
                    </Center>
                    <ScrollView horizontal>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title style={{ width: 150 }}><Text bold>Producto o Servicio</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 80 }}><Text bold>Tipo</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 115 }}><Text bold>Unidad de venta</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 150 }}><Text bold>Total compra mensual</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 135 }}><Text bold>Total venta mensual</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 60 }}><Text bold>MUB</Text></DataTable.Title>
                            </DataTable.Header>
                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell style={{ width: 150 }}>{item.producto_o_servicio}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 80 }}>{item.tipo}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 115 }}>{item.unidad_de_venta}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 150 }}>{totalCompraMensual(item)}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 135 }}>{totalVentaMensual(item)}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 60 }}>{MUB(item)}%</DataTable.Cell>
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
                    <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos2", {
                        mub
                    })}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    )

}
