import React from "react";
import { Box, NativeBaseProvider, Center, Stack, ScrollView, FormControl, Input, Button } from "native-base"
import { useState } from "react";

export default function CostoPantalla4_2(props) {

    const { navigation } = props;
    const [FormTablaInsumo, setFormTablaInsumo] = useState({
        insumo: '',
        cantidad_a: '',
        unidad: '',
        nro_unidades_b: '',
        precio_unitario_c: '',
    });
    console.log(FormTablaInsumo);
    function EstadoInputs(value, input) {
        setFormTablaInsumo({ ...FormTablaInsumo, [input]: value });
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
                        <Input variant="rounded" value={insumo} onChangeText={(value) => EstadoInputs(value, 'insumo')} />
                        <FormControl.Label>Cantidad (A)</FormControl.Label>
                        <Input variant="rounded" value={cantidad_a} onChangeText={(value) => EstadoInputs(value, 'cantidad_a')} />
                        <FormControl.Label>Unidad</FormControl.Label>
                        <Input variant="rounded" value={unidad} onChangeText={(value) => EstadoInputs(value, 'unidad')} />
                        <FormControl.Label>N° de Unidades de Productos o Servicios (B)</FormControl.Label>
                        <Input variant="rounded" value={nro_unidades_b} onChangeText={(value) => EstadoInputs(value, 'nro_unidades_b')} />
                        <FormControl.Label>Precio Unitario (C)</FormControl.Label>
                        <Input variant="rounded" value={precio_unitario_c} onChangeText={(value) => EstadoInputs(value, 'precio_unitario_c')} />
                    </FormControl>
                    <Center>
                        <Box>
                            <Button>Añadir</Button>
                        </Box>
                    </Center>
                    <Box>
                        <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos4")}>Guardar</Button>
                    </Box>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    )

}