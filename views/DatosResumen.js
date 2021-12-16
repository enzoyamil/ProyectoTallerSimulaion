import React, { useState, useContext } from "react";
import { FormControl, Button, Input, Stack, ScrollView, Divider, Box, Center, NativeBaseProvider, Text } from "native-base";
import { DataTable } from 'react-native-paper';
import { ReporteContext } from "../Components/ReporteContext";

function DatosResumen(props) {
    const { navigation, route } = props;
    const [reporte, setReporte] = useContext(ReporteContext);
    const { montoPresupuesto, totalAporte, totalInv, sumaEfectivo } = route.params;
    const [FormrDesembolso, setFormDesembolso] = useState({
        primerDesembolso: '',
        segundoDesembolso: ''
    });

    function EstadoInputs(value, input) {
        setFormDesembolso({ ...FormrDesembolso, [input]: value });
    }
    function totalProyecto() {
        let total_Proyecto = 0;
        total_Proyecto = (totalInv + totalAporte) - montoPresupuesto;
        return total_Proyecto;
    }
    function aportePropio() {
        let aporte_Propio = 0;
        aporte_Propio = totalAporte;
        return aporte_Propio.toFixed(2);
    }
    function porcentajeAporte() {
        let porcentaje_Aporte = 0;
        porcentaje_Aporte = (aportePropio() / totalProyecto()) * 100;
        return porcentaje_Aporte.toFixed(2);
    }
    function sumaAportes() {
        let total = 0;
        total = parseInt(primerDesembolso) + parseInt(segundoDesembolso);
        return total;
    }
    function montoFinanciar() {
        let monto_Financiar = 0;
        monto_Financiar = totalInv - montoPresupuesto;
        return monto_Financiar;
    }
    function validarAporte() {
        let mensaje = 'SIN DATOS';
        if (sumaEfectivo == montoPresupuesto) {
            mensaje = "APORTE CORRECTO"
        } else {
            mensaje = "EL TOTAL APORTE PROPIO DEBE SER IGUAL AL EFECTIVO";
        }
        return mensaje;
    }
    function validarDesembolso() {
        let mensaje = 'SIN APORTES';
        if (sumaAportes() == montoFinanciar()) {
            mensaje = "DESEMBOLSO CORRECTO"
        } else {
            mensaje = "REVISAR 1ER Y 2DO DESEMBOLSO"
        }
        return mensaje
    }
    function buttonPress() {
        setReporte((obj) => ({
            ...obj, resumen: {
                total_proyecto:totalProyecto() ,
                aporte_propio: aportePropio() ,
                monto_financiar: montoFinanciar()
            }
        }));
        navigation.navigate("Hoja-de-Costos", { montoFin })
    }
    let montoFin = montoFinanciar();
    let { primerDesembolso, segundoDesembolso } = FormrDesembolso;

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
                    }}>
                    <Box >
                        <Center ><Text fontSize="20" bold>Plan de Inversión</Text></Center>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Cell>Total Proyecto</DataTable.Cell>
                                <DataTable.Cell>{totalProyecto()} </DataTable.Cell>
                            </DataTable.Header>


                            <DataTable.Row>
                                <DataTable.Cell>Aporte Propio</DataTable.Cell>
                                <DataTable.Cell>{aportePropio()}</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Aporte Propio %</DataTable.Cell>
                                <DataTable.Cell>{porcentajeAporte()}</DataTable.Cell>
                            </DataTable.Row>

                            <Box rounded="xl" p="5" borderWidth="1" bg="yellow.250">
                                <Text>APORTE PROPIO PARA GARANTIA HIPOTECARIA DEBE SER 10% Y PARA OTRA GARANTIA 20%</Text>
                            </Box>

                            <DataTable.Row>
                                <DataTable.Cell>Monto a Financiar</DataTable.Cell>
                                <DataTable.Cell>{montoFinanciar()}</DataTable.Cell>
                            </DataTable.Row>

                        </DataTable>
                        <FormControl.Label>Primer Desembolso</FormControl.Label>
                        <Input variant="rounded" keyboardType="numeric" value={primerDesembolso} onChangeText={(value) => EstadoInputs(value, 'primerDesembolso')} />
                        <FormControl.Label>Segundo Desembolso</FormControl.Label>
                        <Input variant="rounded" keyboardType="numeric" value={segundoDesembolso} onChangeText={(value) => EstadoInputs(value, 'segundoDesembolso')} />
                        <Divider />
                    </Box>
                    <Box rounded="xl" p="5" borderWidth="1" bg="yellow.250">
                        <Text>{validarAporte()}</Text>
                    </Box>
                    <Box rounded="xl" p="5" borderWidth="1" bg="yellow.250">
                        <Text>{validarDesembolso()}</Text>
                    </Box>
                    <Button colorScheme="primary" onPress={() => buttonPress()}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default DatosResumen;