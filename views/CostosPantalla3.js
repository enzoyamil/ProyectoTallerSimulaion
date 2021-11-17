import React from "react";
import { Box, NativeBaseProvider, Text, Center, Stack, ScrollView, FormControl, Input, Select, Button } from "native-base"
import { DataTable } from 'react-native-paper';
import { useState } from "react";

export default function CostoPantalla3(props) {

    const { navigation, route } = props;
    const { alto, medio, bajo } = route.params;
    const [TableService, setTableService] = useState([]);
    const [FormManofactura, setFormManofactura] = useState({
        mes: '',
        rango: ''
    });
    function EstadoInputs(value, input) {
        setFormManofactura({ ...FormManofactura, [input]: value });
    }
    let { mes, rango } = FormManofactura;
    let [service, setService] = React.useState("");
    console.log(FormManofactura);
    function agregarFila() {
        setTableService([...TableService, FormManofactura]);
        setFormManofactura(
            {
                mes: '',
                rango: ''
            }
        );
    }
    console.log(alto, medio, bajo);
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
                    <FormControl>
                        <Stack direction="row" space={0} alignItems="center">
                            <FormControl.Label>Mes</FormControl.Label>
                            <Select placeholder="Mes" value={mes} variant="rounded" minWidth="150" selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
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
                            <Select placeholder="Rango" variant="rounded" minWidth="100" value={rango} variant="rounded" minWidth="150" selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                                onValueChange={(value) => EstadoInputs(value, 'rango')}>
                                <Select.Item label="Alto" value={alto} />
                                <Select.Item label="Medio" value={medio} />
                                <Select.Item label="Bajo" value={bajo} />
                            </Select>
                        </Stack>
                    </FormControl>
                    <Center>
                        <Box>
                            <Button onPress={agregarFila}>Añadir</Button>
                        </Box>
                    </Center>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Mes</DataTable.Title>
                            <DataTable.Title>Venta</DataTable.Title>
                            <DataTable.Title>Costo</DataTable.Title>
                        </DataTable.Header>
                        {
                            TableService.map((item, pos) => (
                                <DataTable.Row key={pos}>
                                    <DataTable.Cell>{item.mes}</DataTable.Cell>
                                    <DataTable.Cell>{item.rango}</DataTable.Cell>
                                    <DataTable.Cell>{item.rango}</DataTable.Cell>
                                </DataTable.Row>
                            ))
                        }
                    </DataTable>
                    <Box>
                        <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos4_2")}>Siguiente</Button>
                    </Box>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );

}