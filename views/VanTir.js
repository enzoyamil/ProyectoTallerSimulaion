import React, { useState, useEffect } from "react";
import { Alert, StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select, Text
} from "native-base";
import { DataTable } from 'react-native-paper';



function VanTir(props) {
    const { navigation } = props;
    const [FormVan, setFormVan] = useState({
        implementacionEst: '',
        desembolsoEst: '',
        anioImplement: '',
        anioDesembolso: ''
    });

    function EstadoInputs(value, input) {
        setFormVan({ ...FormVan, [input]: value });
    }

    function getVal_1(divisionMes) {
        let valor = 0;
        if (divisionMes == 'mensual') {
            valor = 1;
        } else if (divisionMes == 'bimensual') {
            valor = 2;
        } else if (divisionMes == 'trimestral') {
            valor = 3;
        } else if (divisionMes == 'cuatrimestral') {
            valor = 4;
        } else if (divisionMes == 'semestral') {
            valor = 6;
        } else if (divisionMes == 'anual') {
            valor = 12;
        }
        return valor;
    }
    // console.log(getVal_1("anual"));

    function getVal_2(divisionMes) {
        let valor = 0;
        if (divisionMes == 'mensual') {
            valor = 12;
        } else if (divisionMes == 'bimensual') {
            valor = 6;
        } else if (divisionMes == 'trimestral') {
            valor = 4;
        } else if (divisionMes == 'cuatrimestral') {
            valor = 3;
        } else if (divisionMes == 'semestral') {
            valor = 2;
        } else if (divisionMes == 'anual') {
            valor = 1;
        }
        return valor;
    }
    // console.log(getVal_2("anual"));

    function valorFecha(mesEscogio) {
        let valor = 0;
        if (mesEscogio == 'Enero') {
            valor = 11;
        } else if (mesEscogio == 'Febrero') {
            valor = 10;
        } else if (mesEscogio == 'Marzo') {
            valor = 9;
        } else if (mesEscogio == 'Abril') {
            valor = 8;
        } else if (mesEscogio == 'Mayo') {
            valor = 7;
        } else if (mesEscogio == 'Junio') {
            valor = 6;
        } else if (mesEscogio == 'Julio') {
            valor = 5;
        } else if (mesEscogio == 'Agosto') {
            valor = 4;
        } else if (mesEscogio == 'Septiembre') {
            valor = 3;
        } else if (mesEscogio == 'Octubre') {
            valor = 2;
        } else if (mesEscogio == 'Noviembre') {
            valor = 1;
        }
        return valor;
    }
    let plazo = 84;
    function intervalo(variable) {
        let valor = 0;
        let num2=parseInt(valorFecha(variable));
        valor = (plazo-num2) / 12;
        return valor.toFixed(0);
    }

    // console.log("este es el intervalo"+ intervalo("Octubre"));

    let { implementacionEst, desembolsoEst, anioDesembolso, anioImplement } = FormVan;
    function periodoAnio() {
        let val = 0;
        val = parseInt(anioDesembolso) + parseInt(intervalo(desembolsoEst));
        return val;
    }
    console.log(periodoAnio());

        // nos tiene que mandar el plazo
        // tipo de pago mensual

    function periodoMes(){
        let val=0;
        val = plazo/getVal_1("mensual");
        return val;
    }
    console.log(periodoMes());


    

    
    let [service, setService] = React.useState("");
    let monto = -121990;
    
    let divisionMes = 'mensual';
    let periodoMesEstimado= periodoMes();
    let periodoAnioEstimado= periodoAnio();
    // console.log("este es el mes periodo"+periodoAnioEstimado);
    // console.log("este es el anio periodo"+periodoMesEstimado);

    return (
        <NativeBaseProvider>
            <ScrollView background="white">
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
                    <Center><Text fontSize="20" bold>Resultados VAN Y TIR.</Text></Center>

                    <FormControl.Label>Mes Implementacion Estimada</FormControl.Label>
                    <Select placeholder="Mes" borderColor="gray.400" variant="rounded" minWidth="100" value={implementacionEst} variant="rounded" minWidth="150" selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                        onValueChange={(value) => EstadoInputs(value, 'implementacionEst')}>
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
                    <FormControl.Label>Año Implementacion Estimada</FormControl.Label>
                    <Input variant="rounded" keyboardType="numeric" borderColor="gray.400" value={anioImplement} onChangeText={(value) => EstadoInputs(value, 'anioImplement')} />
                    <FormControl.Label>Desembolso Estimado</FormControl.Label>

                    <Select placeholder="Mes" borderColor="gray.400" variant="rounded" minWidth="100" value={desembolsoEst} variant="rounded" minWidth="150" selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                        onValueChange={(value) => EstadoInputs(value, 'desembolsoEst')}>
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
                    <FormControl.Label>Año Implementacion Estimada</FormControl.Label>
                    <Input variant="rounded" keyboardType="numeric" borderColor="gray.400" value={anioDesembolso} onChangeText={(value) => EstadoInputs(value, 'anioDesembolso')} />
                    <Box rounded="xl" p="5" borderWidth="1" bg="yellow.250">
                        <Text>VAN : TOTAL</Text>
                        <Text>TIR : TOTAL</Text>

                    </Box>

                    {/* <DataTable>
                            <DataTable.Header>
                            <DataTable.Title>VAN</DataTable.Title>
                                <DataTable.Title>TIR</DataTable.Title>
                            </DataTable.Header>
                                <DataTable.Row>
                                <DataTable.Cell>100</DataTable.Cell>
                                <DataTable.Cell>200</DataTable.Cell>
                                </DataTable.Row>
                                
                            </DataTable> */}
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}
export default VanTir;