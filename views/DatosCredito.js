import React, { useState,useContext } from 'react';
import { Alert } from 'react-native';
import { ReporteContext } from "../components/ReporteContext";
import {
    FormControl,
    Button,
    Input,
    Stack,
    Text,
    ScrollView,
    Box,
    Center,
    NativeBaseProvider,
    Select,
} from 'native-base';
import { tamanioMaximo, tamanioMin, sinCaractEsp } from '../helpers/Validation';

function DatosCredito(props) {
    const { navigation, route } = props;
    const [reporte, setReporte] = useContext(ReporteContext);
    const { montoFin, utilidadOp } = route.params
    const [FormPersonal, setFormPersonal] = useState({
        impuestos: 0,
    });

    function EstadoInputs(value, input) {
        setFormPersonal({ ...FormPersonal, [input]: value });
    }
    function buttonPress() {
        // if (frecuencia == '' || poliza == '') {
        //     console.log(impuestos);
        //     Alert.alert('error campo vacio');
        // } else if (tamanioMaximo(impuestos, 15)) {
        //     Alert.alert('cadena nombre muy grande');
        // } else if (tamanioMin(impuestos, 2)) {
        //     Alert.alert('cadena nombre muy pequeña');
        // } else {
        //     Alert.alert('succesfull');
        //     navigation.navigate('Resultados', { montoFin, frecuencia, plazo, taza });
        // }
        setReporte((obj) => ({
            ...obj, datos_credito: {
                tipo_cuota: cuota,
                actividad: actividad ,
                cuota_aprox:cambioCuota(cuota)
            }
        }));
        navigation.navigate('Resultados', { montoFin, frecuencia, plazo, taza, utilidadOp });
    }

    let {
        frecuencia,
        poliza = '0.395',
        plazo,
        taza,
        cuota,
        actividad
    } = FormPersonal;
    let cuotaProx = 0;
    let calculo = 0;
    taza = cambioValor();

    function cambioValor() {
        if (actividad == 'servicios') {
            return calculo = 11.5;
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
        return cuotaProx.toFixed(0);
    }
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
                            onValueChange={(value) => EstadoInputs(value, 'frecuencia')}>
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
                        <FormControl mb="5">
                            <FormControl.Label>monto</FormControl.Label>
                            <Text>{parseFloat(montoFin).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
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
                        <FormControl.Label>tipo de cuota</FormControl.Label>
                        <Select variant="rounded" value={cuota}
                            selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                            onValueChange={(value) => EstadoInputs(value, 'cuota')}>
                            <Select.Item label="cuota fija" value="fija" />
                            <Select.Item label="cuota variable" value="variable" />
                            <Select.Item label="personalizada" value="personalizada" />
                        </Select>
                        <FormControl.Label>Actividad</FormControl.Label>
                        <Select variant="rounded" value={actividad}
                            selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                            onValueChange={(value) => EstadoInputs(value, 'actividad')}>
                            <Select.Item label="Servicios" value="servicios" onChangeText={cambioValor()} />
                            <Select.Item label="Productiva" value="productiva" onChangeText={cambioValor()} />
                        </Select>
                        <FormControl mb="5">
                            <FormControl.Label>tasa de interes</FormControl.Label>
                            <Text>{cambioValor()}%</Text>
                            <Center>
                                <Box p="5" borderWidth="1">
                                    <Text bold>CUOTA APROXIMADA: {parseFloat(cambioCuota(cuota)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</Text>
                                </Box>
                            </Center>
                        </FormControl>
                    </Box>
                    <Button colorScheme="primary" onPress={() => buttonPress()}>
                        Siguiente
                    </Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default DatosCredito;