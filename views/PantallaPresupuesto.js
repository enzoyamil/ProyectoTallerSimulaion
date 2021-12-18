import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { FormControl, Button, Input, Stack, ScrollView, Box, NativeBaseProvider, Select, Text, Center } from "native-base";
import { DataTable } from 'react-native-paper';

function PantallaPresupuesto(props) {
    const { navigation } = props;
    const [TableService, setTableService] = useState([]);
    const [FormPresupuesto, setFormPresupuesto] = useState({
        origenDinero: '',
        montoDinero: ''
    });

    let { origenDinero, montoDinero } = FormPresupuesto;
    let [service, setService] = React.useState("");

    useEffect(() => {
        setFormPresupuesto(FormPresupuesto);
    }, [FormPresupuesto]);

    function EstadoInputs(value, input) {
        setFormPresupuesto({ ...FormPresupuesto, [input]: value });
    }
    function agregarFila() {
        if (validacionAgregar()) {
            Alert.alert("Error","No se puede agregar campos vacíos");
        } else {
            setTableService([...TableService, FormPresupuesto]);
            setFormPresupuesto(
                {
                    origenDinero: '',
                    montoDinero: ''
                }
            );
        }
    }
    function sumatoria(obj) {
        let montoTotal = 0;
        TableService.map((item) => {
            let numero = parseInt(item[obj]);
            montoTotal = montoTotal + numero;
        })
        return montoTotal;
    }
    function validacionSiguiente() {
        let tamanio = TableService.length;
        if (tamanio > 0) {
            navigation.navigate("Mano Emprendedor", { montoPresupuesto: monto });
        } else {
            Alert.alert("Agregar datos a la tabla");
        }
    }
    function validacionAgregar() {
        let isVal = false;
        if (origenDinero == '' || montoDinero == '') {
            return isVal = true;
        } else {
            return isVal;
        }
    }

    let monto = sumatoria("montoDinero");

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack
                    space={5}
                    alignSelf="center"
                    px="4"
                    safeArea
                    mt="4"
                    w={{
                        base: "100%",
                        md: "25%",
                    }}>
                    <Box>
                        <FormControl mb="5">
                            <Center><Text fontSize="20" bold >Efectivo</Text></Center>
                            <FormControl.Label>Procedencia(*)</FormControl.Label>
                            <Select placeholder="" variant="rounded" value={origenDinero}
                                selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                                onValueChange={(value) => EstadoInputs(value, 'origenDinero')}>
                                <Select.Item label="Efectivo" value="Efectivo" />
                                <Select.Item label="Banco" value="Banco" />
                                <Select.Item label="Otro" value="Otro" />
                            </Select>
                            <FormControl.Label fontSize="20" bold >Cantidad en Efectivo (Bs.)(*)</FormControl.Label>
                            <Input variant="rounded" value={montoDinero} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'montoDinero')}
                            />
                        </FormControl>
                        <Center>
                            <Button colorScheme="primary" onPress={agregarFila}>Añadir</Button>
                        </Center>
                        <Center><Text fontSize="15" bold margin="2">Presupuesto</Text></Center>

                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Origen</DataTable.Title>
                                <DataTable.Title>Efectivo</DataTable.Title>
                            </DataTable.Header>
                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell>{item.origenDinero}</DataTable.Cell>
                                        <DataTable.Cell>{parseFloat(item.montoDinero).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                        </DataTable>
                    </Box>
                    <Box rounded="xl" p="5" borderWidth="1" style={{ backgroundColor: '#FAF2B0'}}>
                        <Stack space={3}>
                            <Text>SUBTOTAL: {sumatoria("montoDinero").toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                        </Stack>
                    </Box>
                    <Button colorScheme="primary" onPress={() => validacionSiguiente()}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default PantallaPresupuesto;