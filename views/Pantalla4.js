import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select
} from "native-base";

function Pantalla4(props) {
    const { navigation } = props;
    const [FormDescripServ, setFormDescripServ] = useState({
        nombServicio: '',
        elabServicio: '',
        caractServicio: ''
    });
    console.log(FormDescripServ);
    function EstadoInputs(value, input) {
        setFormDescripServ({ ...FormDescripServ, [input]: value });
        console.log(FormDescripServ);

    }
    let { nombServicio, elabServicio, caractServicio } = FormDescripServ;
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
                            <FormControl.Label> Nombre del Servicio</FormControl.Label>
                            <Input variant="rounded" value={nombServicio}
                                onChangeText={(value) => EstadoInputs(value, 'nombServicio')} />


                            <FormControl.Label >Proceso de elaboración</FormControl.Label>
                            <TextArea h={20}
                                placeholder="Descripción de la Actividad"
                                w={{ base: "100%", md: "25%", }} variant="rounded" value={elabServicio}
                                onChangeText={(value) => EstadoInputs(value, 'elabServicio')}
                            />

                            <FormControl.Label>Caracteristicas del Servicio</FormControl.Label>
                            <TextArea h={20} placeholder="Que inversiones nesecita"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }} variant="rounded" value={caractServicio} onChangeText={(value) => EstadoInputs(value, 'caractServicio')} />
                        </FormControl>
                        <Box>
                            <Button colorScheme="primary" onPress={() => navigation.navigate("")}>Añadir</Button>
                        </Box>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Analisis Mercado")}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>


    );
}
export default Pantalla4;