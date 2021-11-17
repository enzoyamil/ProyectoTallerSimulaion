import React from "react";
import { Box, NativeBaseProvider, Center, Stack, ScrollView, FormControl, Input, Button } from "native-base"
import { useState } from "react";
import DetalleInsumo from "../components/DetalleInsumos";

export default function CostoPantalla4(props) {

    const { navigation } = props;
    const [FormProducto, setFormProducto] = useState({
        producto_o_servicio: '',
        unidad_de_medida: ''
    });
    const [Detalles, setDetalles] = useState([

    ])
    console.log(FormProducto);
    function EstadoInputs(value, input) {
        setFormProducto({ ...FormProducto, [input]: value });
    }
    let { producto_o_servicio, unidad_de_medida } = FormProducto;
    function verDetalle() {
        setDetalles([...Detalles, {
            producto_o_servicio,
            unidad_de_medida
        }])
    }
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
                    <FormControl>
                        <FormControl.Label>Producto o Servicio</FormControl.Label>
                        <Input variant="rounded" value={producto_o_servicio} onChangeText={(value) => EstadoInputs(value, 'producto_o_servicio')} />
                        <FormControl.Label>Unidad de medida</FormControl.Label>
                        <Input variant="rounded" value={unidad_de_medida} onChangeText={(value) => EstadoInputs(value, 'unidad_de_medida')} />
                    </FormControl>
                    <Center>
                        <Button onPress={verDetalle}>Crear</Button>
                    </Center>
                    {
                        Detalles.map((item, pos) => (
                            <DetalleInsumo
                                key={pos}
                                navigation={navigation}
                                producto_o_servico={item.producto_o_servicio}
                                unidad_medida={item.unidad_de_medida}
                            />
                        ))
                    }
                    <Box>
                        {/* <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos3")}>Siguiente</Button> */}
                    </Box>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    )

}