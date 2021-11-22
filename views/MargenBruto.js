import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
// import { NativeBaseProvider, Box,Button } from 'native-base';
import {
    FormControl,
    Button,
    Input,
    Stack,
    Text,
    ScrollView,
    Divider,
    Box,
    WarningOutlineIcon,
    Center,
    NativeBaseProvider,
    Select,
} from 'native-base';
import { tamanioMaximo, tamanioMin, sinCaractEsp } from '../helpers/Validation';
import { DataTable } from 'react-native-paper';


function MargenBruto(props) {
    const { navigation } = props;
    const [FormPersonal, setFormPersonal] = useState({
        impuestos: 0,
    }); //estado inicial de usestate nullo.
    console.log(FormPersonal);

    function EstadoInputs(value, input) {
        setFormPersonal({ ...FormPersonal, [input]: value });
        console.log(FormPersonal);
    }

    function buttonPress() {
        // if (
        //     impuestos == ''
        // ) {
        //     console.log(impuestos);
        //     Alert.alert('error campo vacio');
        // } else if (tamanioMaximo(impuestos, 15)) {
        //     Alert.alert('cadena nombre muy grande');
        // } else if (tamanioMin(impuestos, 2)) {
        //     Alert.alert('cadena nombre muy pequeña');
        // } else {
        //     Alert.alert('succesfull');
        //     console.log('here');
        //     console.log(FormPersonal);
        //      navigation.navigate('DatosCredito');
        // }
        navigation.navigate('DatosCredito');
    }

    let {
        impuestos,
    } = FormPersonal;
    let [service, setService] = React.useState(0);
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
                        base: '100%',
                        md: '25%',
                    }}>
                    <Box>
                        {/* <FormControl mb="5">
                            <FormControl.Label>Impuestos</FormControl.Label>
                            <Input
                                keyboardType="numeric"
                                variant="rounded"
                                value={impuestos}
                                onChangeText={value => EstadoInputs(value, 'impuestos')}
                            />

                        </FormControl> */}
                        <Divider />

                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>
                                    <Text>DATOS ANUALES</Text>

                                </DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Header>
                                <DataTable.Title numeric></DataTable.Title>
                                <DataTable.Title numeric>Ventas</DataTable.Title>
                                <DataTable.Title numeric>Costos</DataTable.Title>
                                <DataTable.Title numeric>Margen</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row>
                                <DataTable.Cell>Manufactura</DataTable.Cell>
                                <DataTable.Cell numeric>123</DataTable.Cell>
                                <DataTable.Cell numeric>159</DataTable.Cell>
                                <DataTable.Cell numeric>6.0</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Agricola</DataTable.Cell>
                                <DataTable.Cell numeric>159</DataTable.Cell>
                                <DataTable.Cell numeric>237</DataTable.Cell>
                                <DataTable.Cell numeric>8.0</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Pecuario</DataTable.Cell>
                                <DataTable.Cell numeric>56</DataTable.Cell>
                                <DataTable.Cell numeric>856</DataTable.Cell>
                                <DataTable.Cell numeric>7.0</DataTable.Cell>
                            </DataTable.Row>
                            <Divider />

                            <DataTable.Row>
                                <DataTable.Cell>Total</DataTable.Cell>
                                <DataTable.Cell numeric>0</DataTable.Cell>
                                <DataTable.Cell numeric>0</DataTable.Cell>
                                <DataTable.Cell numeric>0</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>

                        {'\n'}
                        {'\n'}

                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>
                                    <Text>TABLA DE UTILIDAD</Text>
                                </DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row>
                                <DataTable.Cell>(+)Ingresos Totales</DataTable.Cell>
                                <DataTable.Cell numeric>123</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>(-)Costos Directos</DataTable.Cell>
                                <DataTable.Cell numeric>123</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>(=)Utilidad Bruta</DataTable.Cell>
                                <DataTable.Cell numeric>123</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>(-)Costo Operativo</DataTable.Cell>
                                <DataTable.Cell numeric>123</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>(=)Utilidad Operativa</DataTable.Cell>
                                <DataTable.Cell numeric>123</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>

                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                {/* <Button colorScheme="primary" onPress={() => navigation.navigate("DatosCredito")}>Siguiente</Button> */}
                <Button colorScheme="primary" onPress={() => buttonPress()}>
                    Siguiente
                </Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default MargenBruto;
//style={estilos.texto}
const estilos = new StyleSheet.create({
    texto: {
        backgroundColor: '',
    },
    fondo: {
        backgroundColor: 'red',
    },
});