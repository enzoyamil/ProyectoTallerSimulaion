import React from "react";
import { Box, NativeBaseProvider, Center, Stack, ScrollView, FormControl, Input, Select, Button, Text } from "native-base"
import { DataTable } from 'react-native-paper';
import { useState } from "react";

export default function CostoPantalla2(props) {

    const { navigation } = props;
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
    let { producto_o_servicio, tipo, cantidad, unidad_de_venta, frecuencia, precio_c, precio_v } = FormTablaProducto;
    let [service, setService] = React.useState("");
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
                    <Center><Text fontSize="lg" bold>10. Hoja de Costos Directos</Text></Center>
                    <Center><Text fontSize="lg" bold>Manufactura y servicios</Text></Center>
                    <Text fontSize="md" bold>Comportamiento de Ventas mensuales</Text>
                    <FormControl>
                        <FormControl.Label>Producto o Servicio</FormControl.Label>
                        <Input variant="rounded" value={producto_o_servicio} onChangeText={(value) => EstadoInputs(value, 'producto_o_servicio')} />
                        <FormControl.Label>Tipo</FormControl.Label>
                        <Input variant="rounded" value={tipo} onChangeText={(value) => EstadoInputs(value, 'tipo')} />
                        <FormControl.Label>Cantidad</FormControl.Label>
                        <Input variant="rounded" value={cantidad} onChangeText={(value) => EstadoInputs(value, 'cantidad')} />
                        <FormControl.Label>Unidad de Venta</FormControl.Label>
                        <Input variant="rounded" value={unidad_de_venta} onChangeText={(value) => EstadoInputs(value, 'unidad_de_venta')} />
                        <Box>
                            <FormControl.Label>Frecuencia</FormControl.Label>
                            <Select placeholder="Frecuencia" variant="rounded" value={frecuencia} selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                                onValueChange={(value) => EstadoInputs(value, 'frecuencia')}>
                                <Select.Item label="Diario" value="Diario" />
                                <Select.Item label="Semanal" value="Semanal" />
                                <Select.Item label="Quincenal" value="Quincenal" />
                                <Select.Item label="Mensual" value="Mensual" />
                                <Select.Item label="Bimestral" value="Bimestral" />
                                <Select.Item label="Trimestral" value="Trimestral" />
                                <Select.Item label="Semestral" value="Semestral" />
                            </Select>
                        </Box>
                        <FormControl.Label>Precio Compra</FormControl.Label>
                        <Input variant="rounded" value={precio_c} onChangeText={(value) => EstadoInputs(value, 'precio_c')} />
                        <FormControl.Label>Precio Venta</FormControl.Label>
                        <Input variant="rounded" value={precio_v} onChangeText={(value) => EstadoInputs(value, 'precio_v')} />
                    </FormControl>
                    <Center>
                        <Box>
                            <Button>Añadir</Button>
                        </Box>
                    </Center>
                    <Box>
                        <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos2")}>Siguiente</Button>
                    </Box>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    )

}