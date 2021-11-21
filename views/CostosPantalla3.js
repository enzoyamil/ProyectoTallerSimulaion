import React, { useState } from "react";
import { Alert } from "react-native";
import { Box, NativeBaseProvider, Center, Stack, ScrollView, FormControl, Select, Button, Text } from "native-base";
import { DataTable } from 'react-native-paper';

export default function CostoPantalla3(props) {

    const { navigation, route } = props;

    const { alto, medio, bajo, mub } = route.params;

    const [TableService, setTableService] = useState([]);

    const [FormManofactura, setFormManofactura] = useState({
        mes: '',
        rango: '',
    });

    function EstadoInputs(value, input) {
        setFormManofactura({ ...FormManofactura, [input]: value });
    }

    let { mes, rango } = FormManofactura;

    let [service, setService] = React.useState("");

    function agregarFila() {
        setTableService([...TableService, FormManofactura]);
        setFormManofactura({
            mes: '',
            rango: ''
        });
    }
    /*Operaciones*/
    function ventasMensuales(cadena) {
        let res = 0;
        if (cadena == "Alto") {
            res = parseFloat(alto);
        } else if (cadena == "Medio") {
            res = parseFloat(medio);
        } else if (cadena == "Bajo") {
            res = parseFloat(bajo);
        }
        return res.toFixed(2);
    }

    function costoProduccionMensual(cadena) {
        return (parseFloat(ventasMensuales(cadena)) * (1 - (parseFloat(mub) / 100))).toFixed(2);
    }

    function sumVentasMensuales() {
        let res = 0;
        TableService.map((item) => {
            res = res + parseFloat(ventasMensuales(item.rango));
        })
        return res;
    }

    function sumCostoProduc() {
        let res = 0;
        TableService.map((item) => {
            res = res + parseFloat(costoProduccionMensual(item.rango));
        })
        return res;
    }
    /****************************************/
    function buttonPress() {
        if (mes == '') {
            Alert.alert("Error", "Debe seleccionar un valor en mes");
        } else if (rango == '') {
            Alert.alert("Error", "Debe seleccionar un valor en rango");
        } else {
            agregarFila();
        }
    }

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
                    <FormControl>
                        <Stack space={0} alignItems="center">
                            <FormControl.Label>Mes</FormControl.Label>
                            <Select placeholder="Mes" borderColor="gray.400" value={mes} variant="rounded" minWidth="150" selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                                onValueChange={(value) => EstadoInputs(value, 'mes')}>
                                <Select.Item label="Enero" value="Enero" />
                                <Select.Item label="Febrero" value="Febrero" />
                                <Select.Item label="Marzo" value="Marzo" />
                                <Select.Item label="Abril" value="Abril" />
                                <Select.Item label="Mayo" value="Mayo" />
                                <Select.Item label="Junio" value="Junio" />
                                <Select.Item label="Julio" value="Julio" />
                                <Select.Item label="Agosto" value="Agosto" />
                                <Select.Item label="Septiembre" value="Septiembre" />
                                <Select.Item label="Octubre" value="Octubre" />
                                <Select.Item label="Noviembre" value="Noviembre" />
                                <Select.Item label="Diciembre" value="Diciembre" />
                            </Select>
                            <FormControl.Label>Rango</FormControl.Label>
                            <Select placeholder="Rango" borderColor="gray.400" variant="rounded" minWidth="100" value={rango} variant="rounded" minWidth="150" selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                                onValueChange={(value) => EstadoInputs(value, 'rango')}>
                                <Select.Item label="Alto" value="Alto" />
                                <Select.Item label="Medio" value="Medio" />
                                <Select.Item label="Bajo" value="Bajo" />
                            </Select>
                        </Stack>
                    </FormControl>
                    <Center>
                        <Button onPress={buttonPress}>Añadir</Button>
                    </Center>
                    <ScrollView horizontal>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title style={{ width: 80 }} ><Text bold>Mes</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 80 }} ><Text bold>Rango</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 150 }}><Text bold>Ventas mensuales</Text></DataTable.Title>
                                <DataTable.Title style={{ width: 205 }}><Text bold>Costo de produccion mensuales</Text></DataTable.Title>
                            </DataTable.Header>
                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell style={{ width: 80 }}>{item.mes}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 80 }}>{item.rango}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 150 }}>{ventasMensuales(item.rango)}</DataTable.Cell>
                                        <DataTable.Cell style={{ width: 205 }}>{costoProduccionMensual(item.rango)}</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                        </DataTable>
                    </ScrollView>
                    <Box rounded="xl" p="5" borderWidth="1">
                        <Stack space={3}>
                            <Text>Anual: </Text>
                            <Text>Sumatoria ventas mensuales: {sumVentasMensuales()}</Text>
                            <Text>Sumatoria costo de produccion mensuales: {sumCostoProduc()}</Text>
                        </Stack>
                    </Box>
                    <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos4")}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );

}
