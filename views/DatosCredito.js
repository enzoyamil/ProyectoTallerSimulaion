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


function DatosCredito(props) {
    const { navigation, route } = props;
    const { montoFin } = route.params
    const [FormPersonal, setFormPersonal] = useState({
        impuestos: 0,
    }); //estado inicial de usestate nullo.
    console.log(FormPersonal);
    //console.log(montoFin);

    function EstadoInputs(value, input) {
        setFormPersonal({ ...FormPersonal, [input]: value });
        console.log(FormPersonal);
    }

    function buttonPress() {
        if (
            frecuencia == '' ||
            poliza == ''
        ) {
            console.log(impuestos);
            Alert.alert('error campo vacio');
        } else if (tamanioMaximo(impuestos, 15)) {
            Alert.alert('cadena nombre muy grande');
        } else if (tamanioMin(impuestos, 2)) {
            Alert.alert('cadena nombre muy pequeña');
        } else {
            Alert.alert('succesfull');
            console.log('here');
            console.log(FormPersonal);
            // navigation.navigate('');
        }
    }

    let {
        frecuencia,
        poliza,
        monto,
        plazo,
        taza,
        cuota,
        actividad
    } = FormPersonal;
    let cuotaProx = 0;
    let calculo = 0;
    function cambioValor() {
        console.log("este es la cuota:" + calculo);
        if (actividad == 'servicios') {
            return calculo = 11.5;
            //console.log("este es la cuota:"+calculo);

        } else if (actividad == 'productiva') {
            return calculo = 7;
        }
    }

    function cambioCuota(val) {
        if (val == 'fija') {
            cuotaProx = calculateFixedLoanFee(cambioValor(), plazo, montoFin, frecuencia);

        } else if (val == 'variable') {
            cuotaProx = calculateVariableLoanFee(cambioValor(), plazo, montoFin, frecuencia);
        } else {
            cuotaProx = 0;
        }
        console.log(cuotaProx);
        return cuotaProx.toFixed(2);
    }


    //indice, periodo,monto
    const calculateFixedFee = (rate, period, amount) => {
        const fee = amount * ((((1 + rate) ** period) * rate) / (((1 + rate) ** period) - 1));
        return fee;
    };
    const calculateVariableFee = (period, loanAmount, rate) => {
        const fees = [];
        let amount = loanAmount;
        const amortization = amount / period;
        for (let i = 0; i < period; i += 1) {
            fees.push(amortization + (amount * rate));
            amount -= amortization;
        }
        return fees[0];
    };
    function calculateFixedLoanFee(rate, period, loanAmount, frequency) {
        const r = rate / 100;
        let fee;
        switch (frequency) {
            case 'mensual': {
                const rateMensual = (r / 12);
                const mensualPeriod = period;
                fee = calculateFixedFee(rateMensual, mensualPeriod, loanAmount);
                break;
            }
            case 'bimensual': {
                const rateBiMensual = (r / 6);
                const bimensualPeriod = period / 2;
                fee = calculateFixedFee(rateBiMensual, bimensualPeriod, loanAmount);
                break;
            }
            case 'trimestral': {
                const rateTrimestral = (r / 4);
                const trimPeriod = period / 3;
                fee = calculateFixedFee(rateTrimestral, trimPeriod, loanAmount);
                break;
            }
            case 'cuatrimestral': {
                const rateCuatrimestral = (r / 3);
                const cuatrimestalPeriod = period / 4;
                fee = calculateFixedFee(rateCuatrimestral, cuatrimestalPeriod, loanAmount);
                break;
            }
            case 'semestral': {
                const rateSemestral = (r / 2);
                const semestralPeriod = period / 6;
                fee = calculateFixedFee(rateSemestral, semestralPeriod, loanAmount);
                break;
            }
            case 'anual': {
                const anualPeriod = period / 12;
                fee = calculateFixedFee(r, anualPeriod, loanAmount);
                break;
            }
            default:
        }
        return fee;
    };

    function calculateVariableLoanFee(rate, period, loanAmount, frequency) {
        let fee;
        const r = rate / 100;
        switch (frequency) {
            case 'mensual': {
                const mensualPeriod = period;
                const rateMensual = (r / 12);
                fee = calculateVariableFee(mensualPeriod, loanAmount, rateMensual);
                break;
            }
            case 'bimensual': {
                const bimensualPeriod = period / 2;
                const rateBiMensual = (r / 6);
                fee = calculateVariableFee(bimensualPeriod, loanAmount, rateBiMensual);
                break;
            }
            case 'trimestral': {
                const trimestralPeriod = period / 3;
                const rateTrimestral = (r / 4);
                fee = calculateVariableFee(trimestralPeriod, loanAmount, rateTrimestral);
                break;
            }
            case 'cuatrimestral': {
                const cuatrimestalPeriod = period / 4;
                const rateCuatrimestral = (r / 3);
                fee = calculateVariableFee(cuatrimestalPeriod, loanAmount, rateCuatrimestral);
                break;
            }
            case 'semestral': {
                const semestralPeriod = period / 6;
                const rateSemestral = (r / 2);
                fee = calculateVariableFee(semestralPeriod, loanAmount, rateSemestral);
                break;
            }
            case 'anual': {
                const anualPeriod = period / 12;
                const rateAnual = (r / 1);
                fee = calculateVariableFee(anualPeriod, loanAmount, rateAnual);
                break;
            }
            default:
        }
        return fee;
    };


    // let montoFin = 121990;
    // let montoAprox = calculateFixedLoanFee (0.07, 84, 121990, "mensual");
    // console.log(montoAprox);
    let [service, setService] = React.useState(0);
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
                    <Box>
                        <FormControl.Label>Frecuencia</FormControl.Label>
                        <Select variant="rounded" value={frecuencia}
                            selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                            onValueChange={(value) => EstadoInputs(value, 'frecuencia')}
                        >
                            <Select.Item label="mensual" value="mensual" />
                            <Select.Item label="bimensual" value="bimensual" />
                            <Select.Item label="trimestral" value="trimestral" />
                            <Select.Item label="cuatrimestral" value="cuatrimestral" />
                            <Select.Item label="semestral" value="semestral" />
                            <Select.Item label="anual" value="anual" />

                        </Select>
                        <FormControl mb="5">
                            <FormControl.Label>poliza</FormControl.Label>
                            <Input
                                keyboardType="numeric"
                                variant="rounded"
                                value={poliza}
                                onChangeText={value => EstadoInputs(value, 'poliza')}
                            />
                        </FormControl>
                        <Divider />

                        <FormControl mb="5">
                            <FormControl.Label>monto</FormControl.Label>
                            <Text>{montoFin}</Text>
                            {/* <Input
                                keyboardType="numeric"
                                variant="rounded"
                                value={montoFin}
                                onChangeText={value => EstadoInputs(value, 'monto')}
                            /> */}
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>plazo (meses)</FormControl.Label>
                            <Input
                                keyboardType="numeric"
                                variant="rounded"
                                value={plazo}
                                onChangeText={value => EstadoInputs(value, 'plazo')}
                            />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>taza de interes</FormControl.Label>
                            <Text>{cambioValor()}%</Text>
                            {/* <Input
                                keyboardType="numeric"
                                variant="rounded"
                                value={calculo}
                                onChangeText={value => EstadoInputs(value, 'taza')}
                            /> */}
                        </FormControl>
                        <FormControl.Label>tipo de cuota</FormControl.Label>
                        <Select variant="rounded" value={cuota}
                            selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                            onValueChange={(value) => EstadoInputs(value, 'cuota')}
                        >
                            <Select.Item label="cuota fija" value="fija" />
                            <Select.Item label="cuota variable" value="variable" />
                            <Select.Item label="personalizada" value="personalizada" />

                        </Select>

                        {'\n'}<Divider />

                        <FormControl.Label>Actividad</FormControl.Label>
                        <Select variant="rounded" value={actividad}
                            selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                            onValueChange={(value) => EstadoInputs(value, 'actividad')}
                        >
                            <Select.Item label="Servicios" value="servicios" onChangeText={cambioValor()} />
                            <Select.Item label="Productiva" value="productiva" onChangeText={cambioValor()} />

                        </Select>
                        <Center>
                            <Box rounded="xl" p="5" borderWidth="1" bg="yellow.250">
                                {'\n'}<Text bold>CUOTA APROXIMADA: {cambioCuota(cuota)}</Text>
                            </Box>
                        </Center>
                    </Box>
                    {/* <Button colorScheme="primary" onPress={() => buttonPress()}>
                        Siguiente
                    </Button> */}
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}
export default DatosCredito;
//style={estilos.texto}
const estilos = new StyleSheet.create({
    texto: {
        backgroundColor: '',
    },
    fondo: {
        backgroundColor: 'red',
    },
});
