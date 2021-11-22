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
                            <Input
                                keyboardType="numeric"
                                variant="rounded"
                                value={monto}
                                onChangeText={value => EstadoInputs(value, 'monto')}
                            />
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
                            <Input
                                keyboardType="numeric"
                                variant="rounded"
                                value={taza}
                                onChangeText={value => EstadoInputs(value, 'taza')}
                            />
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
                            <Select.Item label="Servicios" value="servicios" />
                            <Select.Item label="Productiva" value="productiva" />

                        </Select>

                        {'\n'}<Text>CUOTA APROXIMADA: { }</Text>

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
//style={estilos.texto}
const estilos = new StyleSheet.create({
    texto: {
        backgroundColor: '',
    },
    fondo: {
        backgroundColor: 'red',
    },
});
