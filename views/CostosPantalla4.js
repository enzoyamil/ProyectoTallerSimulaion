import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeBaseProvider, Center, Stack, ScrollView, FormControl, Input, Button, Text } from "native-base";
import DetalleInsumo from "../components/DetalleInsumos";

export default function CostoPantalla4(props) {

    useEffect(()=>{
        crearContenedorInsumo();
    }, []);

    const { navigation } = props;

    const [Detalles, setDetalles] = useState([])

    const [FormProducto, setFormProducto] = useState({
        producto_o_servicio: '',
        unidad_de_medida: '',
    });

    function EstadoInputs(value, input) {
        setFormProducto({ ...FormProducto, [input]: value });
    }

    let { producto_o_servicio, unidad_de_medida } = FormProducto;

    function verDetalle() {
        setDetalles([...Detalles, FormProducto]);
        setFormProducto({
            producto_o_servicio: '',
            unidad_de_medida: '',
        });
    }
    /*Funciones para guardar las tablas de insumos dentro los contenedores*/
    async function buttonPress() {
        if (producto_o_servicio == '' || unidad_de_medida == '') {
            Alert.alert("Error", "No se permiten campos vacios");
        } else {
            verDetalle();
            let arr = await AsyncStorage.getItem("insumos");
            let arrjson = JSON.parse(arr);
            arrjson = [...arrjson, {
                table: []
            }]
            let arrtext = JSON.stringify(arrjson);
            await AsyncStorage.setItem("insumos", arrtext);
        }
    }

    async function crearContenedorInsumo() {
        await AsyncStorage.setItem("insumos", "[]");
    }
    /*************************************************/

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
                    <Text bold>Hoja de control de insumos para los producto o servicios</Text>
                    <FormControl>
                        <FormControl.Label>Producto o Servicio</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={producto_o_servicio} onChangeText={(value) => EstadoInputs(value, 'producto_o_servicio')} />
                        <FormControl.Label>Unidad de medida</FormControl.Label>
                        <Input variant="rounded" borderColor="gray.400" value={unidad_de_medida} onChangeText={(value) => EstadoInputs(value, 'unidad_de_medida')} />
                        {/* <FormControl.Label>Precio de venta</FormControl.Label>
                        <Input variant="rounded" keyboardType="numeric" borderColor="gray.400" value={precio_venta} onChangeText={(value) => EstadoInputs(value, 'precio_venta')} /> */}
                    </FormControl>
                    <Center>
                        <Button onPress={buttonPress}>Crear</Button>
                    </Center>
                    {
                        Detalles.map((item, pos) => (
                            <DetalleInsumo
                                key={pos}
                                id = {pos}
                                navigation={navigation}
                                producto_o_servico={item.producto_o_servicio}
                                unidad_medida={item.unidad_de_medida}
                            />
                        ))
                    }
                    <Button colorScheme="primary" onPress={() => navigation.navigate("Costos Operativos")}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    )

}