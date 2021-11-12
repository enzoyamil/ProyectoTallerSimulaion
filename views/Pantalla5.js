import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select
} from "native-base";

function Pantalla5(props) {
    const { navigation } = props;
    const [FormMerc, setFormMerc] = useState({
        clientes: '',
        clientesPotenciales: '',
        relacionesClientes: ''
    });

console.log(FormMerc);
function EstadoInputs(value, input) {
    setFormMerc({ ...FormMerc, [input]: value });
    console.log(FormMerc);

}
let { clientes, clientesPotenciales, relacionesClientes } = FormMerc;
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
                        <FormControl.Label >¿Quienes seran tus clientes que compraran tu servicio?</FormControl.Label>
                        <TextArea h={20}
                            placeholder="Clientes que adquiriran tu servicio"
                            w={{ base: "100%", md: "25%", }} variant="rounded" value={clientes}
                            onChangeText={(value) => EstadoInputs(value, 'clientes')}
                        />

                        <FormControl.Label>¿Quienes seran tus clientes potenciales?</FormControl.Label>
                        <TextArea h={20} placeholder="Que inversiones nesecita"
                            w={{
                                base: "100%",
                                md: "25%",
                            }} variant="rounded" value={clientesPotenciales} onChangeText={(value) => EstadoInputs(value, 'clientesPotenciales')} />


                        <FormControl.Label>¿Tienes ctuales clientes Potenciales?¿Quienes son?</FormControl.Label>
                        <TextArea h={20} placeholder="Que inversiones nesecita"
                            w={{
                                base: "100%",
                                md: "25%",
                            }} variant="rounded" value={relacionesClientes} onChangeText={(value) => EstadoInputs(value, 'relacionesClientes')} />

                    </FormControl>
                    <Box>
                        <Button colorScheme="primary" onPress={() => navigation.navigate("")}>Añadir</Button>
                    </Box>
                    <Divider />
                </Box>
            </Stack>
        </ScrollView>
        <Box>
            <Button colorScheme="primary" onPress={() => navigation.navigate("Estrategia de mercado")}>Siguiente</Button>
        </Box>
    </NativeBaseProvider>
    );
}
export default Pantalla5;