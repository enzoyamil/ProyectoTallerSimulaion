import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select, FlatList, Text
} from "native-base";
import { DataTable } from 'react-native-paper';


function PantallaPresupuesto(props) {
    const { navigation } = props;
    const [TableService, setTableService] = useState([]);

    const [FormPresupuesto, setFormPresupuesto] = useState({
        origenDinero: '',
        montoDinero: '',
    });


    useEffect(() => {
        setFormPresupuesto(FormPresupuesto);
    }, [FormPresupuesto]);


    function EstadoInputs(value, input) {
        setFormPresupuesto({ ...FormPresupuesto, [input]: value });
        console.log(FormPresupuesto);
    }


    function agregarFila() {
        setTableService([...TableService, FormPresupuesto]);
        console.log(TableService);
    }



    let { origenDinero,montoDinero } = FormPresupuesto;
    let [service, setService] = React.useState("");
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
                            <FormControl.Label>Procedencia</FormControl.Label>
                            <Select placeholder="" value={origenDinero} variant="rounded"
                            selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                                onChangeText={(value) => EstadoInputs(value, '')}>
                                <Select.Item label="Efectivo" value="" onPress={() => EstadoInputs('Efectivo', 'origenDinero')} />
                                <Select.Item label="Banco" value="" onPress={() => EstadoInputs('Banco', 'origenDinero')} />
                                <Select.Item label="Otro" value="" onPress={() => EstadoInputs('Otro', 'origenDinero')} />
                                </Select>


                            <FormControl.Label >Cantidad en Efectivo (Bs)</FormControl.Label>
                            <Input variant="rounded" value={montoDinero} keyboardType="numeric"
                            onChangeText={(value) => EstadoInputs(value, 'montoDinero')}
                            />

                        
                        </FormControl>
                        <Box>
                            {/* <Button colorScheme="primary" onPress={() => navigation.navigate("")}>Añadir</Button> */}
                            <Button colorScheme="primary" onPress={agregarFila}>Añadir</Button>
                        </Box>

                        <Text>Presupuesto</Text>



                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Origen</DataTable.Title>
                                <DataTable.Title>Efectivo</DataTable.Title>
                            </DataTable.Header>


                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell>{item.origenDinero}</DataTable.Cell>
                                        <DataTable.Cell>{item.montoDinero}</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                        </DataTable>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Mano Emprendedor")}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>


    );
}
export default PantallaPresupuesto;