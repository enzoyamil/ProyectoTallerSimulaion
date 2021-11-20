import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, ScrollView, Divider, Box, NativeBaseProvider, Select, Text
} from "native-base";
import { DataTable } from 'react-native-paper';

function PantallaPresupuesto(props) {
    const { navigation } = props;
    const [TableService, setTableService] = useState([]);

    const [FormPresupuesto, setFormPresupuesto] = useState({
        origenDinero: '',
        montoDinero: ''
        //montoTotal:''
    });
    // console.log(FormPresupuesto);
    let { origenDinero, montoDinero } = FormPresupuesto;
    let [service, setService] = React.useState("");
    
    useEffect(() => {
        setFormPresupuesto(FormPresupuesto);
    }, [FormPresupuesto]);


    function EstadoInputs(value, input) {
        setFormPresupuesto({ ...FormPresupuesto, [input]: value });
    }
    function agregarFila() {
        setTableService([...TableService, FormPresupuesto]);
        setFormPresupuesto(
            {
                origenDinero: '',
                montoDinero: ''
            }
        );
    }
    function sumatoria(obj) {
        let montoTotal = 0;
        TableService.map((item) => {
            let numero = parseInt(item[obj]);
            montoTotal = montoTotal + numero;
        })
        return montoTotal;
    }
    let monto = sumatoria("montoDinero");
    console.log("este es el monto presupuesto"+monto);
    return (
        <NativeBaseProvider>
            <ScrollView>
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
                            <Select placeholder="" variant="rounded" value={origenDinero}
                                selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                                onValueChange={(value) => EstadoInputs(value, 'origenDinero')}>
                                <Select.Item label="Efectivo" value="Efectivo" />
                                <Select.Item label="Banco" value="Banco" />
                                <Select.Item label="Otro" value="Otro" />
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
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Cell>SUBTOTAL</DataTable.Cell>
                                    <DataTable.Cell >{sumatoria("montoDinero")}</DataTable.Cell>
                                </DataTable.Header>
                            </DataTable>

                        </DataTable>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Mano Emprendedor",{montoPresupuesto:monto})}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>


    );
}
export default PantallaPresupuesto;