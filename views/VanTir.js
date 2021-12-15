import React, { useState } from "react";
import { Stack, ScrollView, Box, Center, NativeBaseProvider, Button, Text } from "native-base";

function VanTir(props) {
    const { navigation, route } = props;
    const {montoFin, frecuencia, plazo, taza, utilidadOp} = route.params
    //parametros Tir
    var IRRval = [];
    let aux = (((parseFloat( utilidadOp)) / 12) * getVal_1(frecuencia));

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

    let { implementacionEst, desembolsoEst, anioDesembolso, anioImplement } = FormVan;

    function periodoMes() {
        let val = 0;
        val = plazo / getVal_1(frecuencia);
        return val;
    }
    function calcularVan() {
        let res = 0;
        let aux2 = 0;
        if (montoFin != 0) {
            aux2 = (parseFloat(taza) / 100) / parseInt(getVal_2(frecuencia));
            for (let index = 1; index <= periodoMes(); index++) {
                res = res + ((aux) / ((1 + aux2) ** index));
            }
        }
        return (res-montoFin).toFixed(0);
    }
    
    //Funcion TIR
    IRRval.push(-montoFin);
    for (var i = 0; i < periodoMes(); i++) {
        IRRval.push(aux);
    }
    var IRR = IRRCalc(IRRval, 0.001) * 0.01;
    function IRRCalc(CArray) {
        var r = 0
        var min = -1.0;
        var max = 10000.0;
        var guest = 0;
        var NPV = 0;
        do {
            guest = (min + max) / 2;
            NPV = 0;
            for (var j = 0; j < CArray.length; j++) {
                NPV += CArray[j] / Math.pow((1 + guest), j);
            }
            if (NPV > 0) {
                min = guest;
            }
            else {
                max = guest;
            }
            r++
        } while (r < 100);
        return (guest*getVal_2(frecuencia)*100);
    }
    let tir = IRRCalc(IRRval).toFixed(2);
    let [service, setService] = React.useState("");

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
                    {/* <FormControl.Label>Mes Implementacion Estimada</FormControl.Label>
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
                    <Input variant="rounded" keyboardType="numeric" borderColor="gray.400" value={anioDesembolso} onChangeText={(value) => EstadoInputs(value, 'anioDesembolso')} /> */}
                    <Box rounded="xl" p="5" borderWidth="1" bg="yellow.250">
                        <Text>VAN : {calcularVan()}</Text>
                        <Text>TIR : {tir}%</Text>
                    </Box>
                    <Button colorScheme="primary" onPress={() => navigation.navigate("Reporte")}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}
export default VanTir;