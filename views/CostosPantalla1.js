import React from "react";
import { Box, NativeBaseProvider, Text, Center, Stack, ScrollView, FormControl, Input, Select, Button } from "native-base"
import { DataTable } from 'react-native-paper';
import { useState } from "react";

export default function CostoPantalla1(props) {

    const { navigation } = props;
    const [FormManofactura, setFormManofactura] = useState({
        alto: '',
        medio: '',
        bajo: '',
        mes: '',
        rango: ''
    });
    console.log(FormManofactura);
    function EstadoInputs(value, input) {
        setFormManofactura({ ...FormManofactura, [input]: value });
    }
    let { alto, medio, bajo, mes, rango } = FormManofactura;
    let [service, setService] = React.useState("");
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
                    <Center><Text fontSize="lg" bold>10. Hoja de Costos Directos</Text></Center>
                    <Center><Text fontSize="lg" bold>Manufactura y servicios</Text></Center>
                    <Text fontSize="md" bold>Comportamiento de Ventas mensuales</Text>
                    {/* <Text fontSize="md" >Ventas totales por mes (Bs)</Text> */}
                    {/* <Text fontSize="md" >Rangos de Ventas en Bs</Text> */}
                    <FormControl>
                        <FormControl.Label>Alto</FormControl.Label>
                        <Input size="md" variant="rounded" value={alto} onChangeText={(value) => EstadoInputs(value, 'alto')} keyboardType='numeric'
                            w={{
                                base: "50%"
                            }} />
                        <FormControl.Label>Medio</FormControl.Label>
                        <Input size="md" variant="rounded" value={medio} onChangeText={(value) => EstadoInputs(value, 'medio')} keyboardType='numeric'
                            w={{
                                base: "50%"
                            }} />
                        <FormControl.Label>Bajo</FormControl.Label>
                        <Input size="md" variant="rounded" value={bajo} onChangeText={(value) => EstadoInputs(value, 'bajo')} keyboardType='numeric'
                            w={{
                                base: "50%"
                            }} />
                    </FormControl>
                    <FormControl>
                        <Stack direction="row" space={1} alignItems="center">
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
                            <Select placeholder="Rango" variant="rounded" minWidth="100">
                                <Select.Item label="Alto" value="Alto" />
                                <Select.Item label="Medio" value="Medio" />
                                <Select.Item label="Bajo" value="Bajo" />
                            </Select>
                        </Stack>
                    </FormControl>
                    <Center>
                        <Box>
                            <Button>Añadir</Button>
                        </Box>
                    </Center>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Name</DataTable.Title>
                            <DataTable.Title>Email</DataTable.Title>
                            <DataTable.Title numeric>Age</DataTable.Title>
                        </DataTable.Header>
                    </DataTable>
                    <Box>
                        <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos2")}>Siguiente</Button>
                    </Box>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );

}