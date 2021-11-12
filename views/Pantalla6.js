import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select
} from "native-base";

function Pantalla6(props) {
    const { navigation } = props;
    const [FormEstMerc, setForEstmMerc] = useState({
        beneficiosServicio: '',
        productoEstrella: '',
        precioServicio: '',
        derterminacionPrecio: ''
    });

    console.log(FormEstMerc);
    function EstadoInputs(value, input) {
        setForEstmMerc({ ...FormEstMerc, [input]: value });
        console.log(FormEstMerc);

    }
    let { beneficiosServicio, productoEstrella, precioServicio, derterminacionPrecio } = FormEstMerc;

    return (

        <NativeBaseProvider>
            <ScrollView
                w={{
                    base: "90%",
                    md: "90%",
                }}
            >
                <Stack
                    space={2.5}
                    alignSelf="center"
                    px="4"
                    safeArea
                    mt="4"
                    w={{
                        base: "100%",
                        md: "25%",
                    }}
                >
                    <Box>
                        <FormControl mb="5">
                            <FormControl.Label >¿En que beneficia el producto o servicio al cliente?</FormControl.Label>
                            <TextArea h={20}
                                placeholder="Beneficio de tu servicio"
                                w={{ base: "100%", md: "25%", }} variant="rounded" value={beneficiosServicio}
                                onChangeText={(value) => EstadoInputs(value, 'beneficiosServicio')}
                            />

                            <FormControl.Label>¿Cual sera tu producto Estrella?</FormControl.Label>
                            <TextArea h={20} placeholder="Que inversiones nesecita"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }} variant="rounded" value={productoEstrella} onChangeText={(value) => EstadoInputs(value, 'productoEstrella')} />


                            <FormControl.Label>¿Cual sera el precio de tu producto o servicio y su forma de pago?</FormControl.Label>
                            <TextArea h={20} placeholder="Precio y forma de pago del servicio o producto"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }} variant="rounded" value={precioServicio} onChangeText={(value) => EstadoInputs(value, 'precioServicio')} />


                            <FormControl.Label>¿Como se detremino el precio de su servicio o producto?</FormControl.Label>
                            <TextArea h={20} placeholder="Descripcion de la determinacion del precio"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }} variant="rounded" value={derterminacionPrecio} onChangeText={(value) => EstadoInputs(value, 'derterminacionPrecio')} />

                        </FormControl>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("")}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>

    );
}
export default Pantalla6;