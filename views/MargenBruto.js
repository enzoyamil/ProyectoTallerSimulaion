import React, { useState,useContext } from 'react';
import {
    Button,
    Stack,
    Text,
    ScrollView,
    Divider,
    Box,
    NativeBaseProvider
} from 'native-base';
import { DataTable } from 'react-native-paper';
import { ReporteContext } from "../Components/ReporteContext";
function MargenBruto(props) {
    const { navigation, route } = props;
    const [reporte, setReporte] = useContext(ReporteContext);
    const { mub, ventas_anuales, costos_anuales, total, montoFin } = route.params
    const [FormPersonal, setFormPersonal] = useState({
        impuestos: 0,
    });

    function EstadoInputs(value, input) {
        setFormPersonal({ ...FormPersonal, [input]: value });
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
        //     navigation.navigate('DatosCredito');
        // }
        setReporte((obj) => ({
            ...obj, tabla_utilidad: {
                ingresos_total:ventas_anuales ,
                costos_directos:costos_anuales ,
                margen:mub. toFixed(2),
                utilidad_bruta: ventas_anuales - costos_anuales,
                costo_operativos: total * 12,
                utilidad_operativa:utilidadOp 
            }
        }));
        navigation.navigate('DatosCredito', { montoFin, utilidadOp });
    }

    let utilidadOp= ((ventas_anuales - costos_anuales) - (total * 12)).toFixed(2);
    let { impuestos } = FormPersonal;
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
                        <ScrollView horizontal>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>
                                    <Text>DATOS ANUALES</Text>
                                </DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Header>
                                <DataTable.Title style={{ width: 100 }} numeric></DataTable.Title>
                                <DataTable.Title style={{ width: 100 }} numeric>Ventas</DataTable.Title>
                                <DataTable.Title style={{ width: 100 }} numeric>Costos</DataTable.Title>
                                <DataTable.Title style={{ width: 100 }} numeric>Margen</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row>
                                <DataTable.Cell style={{ width: 100 }}>Manufactura</DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }} numeric>{ventas_anuales}</DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }} numeric>{costos_anuales}</DataTable.Cell>
                                <DataTable.Cell style={{ width: 100 }} numeric>{mub. toFixed(2)}</DataTable.Cell>
                            </DataTable.Row>
                            <Divider />
                        </DataTable>
                        </ScrollView>
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
                                <DataTable.Cell numeric>{ventas_anuales}</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>(-)Costos Directos</DataTable.Cell>
                                <DataTable.Cell numeric>{costos_anuales}</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>(=)Utilidad Bruta</DataTable.Cell>
                                <DataTable.Cell numeric>{ventas_anuales - costos_anuales}</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>(-)Costo Operativo</DataTable.Cell>
                                <DataTable.Cell numeric>{total * 12}</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>(=)Utilidad Operativa</DataTable.Cell>
                                <DataTable.Cell numeric>{utilidadOp}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>

                    </Box>
                    <Button colorScheme="primary" onPress={() => buttonPress()}>
                        Siguiente
                    </Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default MargenBruto;
