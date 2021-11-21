import React, { useState } from "react";
import { Alert } from "react-native";
import { NativeBaseProvider, Stack, ScrollView, FormControl, Input, Button, Text } from "native-base";

export default function CostoPantalla1(props) {

    const { navigation, route } = props;
    const { mub } = route.params;
    const [FormManofactura, setFormManofactura] = useState({
        alto: '',
        medio: '',
        bajo: '',
    });

    function EstadoInputs(value, input) {
        setFormManofactura({ ...FormManofactura, [input]: value });
    }

    let { alto, medio, bajo } = FormManofactura;

    function buttonPress() {
        if (bajo == '' || medio == '' || alto == '') {
            Alert.alert("Error", "No se permiten campos vacios");
        } else if (parseInt(bajo) > parseInt(medio)) {
            Alert.alert("Error", "El valor de bajo no puede ser mayor al valor de medio");
        } else if (parseInt(medio) > parseInt(alto)) {
            Alert.alert("Error", "El valor de medio no puede ser mayor al valor de alto");
        } else {
            navigation.navigate("Hoja-de-Costos3", { alto, medio, bajo, mub })
        }
    }

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
                    <Text bold>Definir rango de ventas Alto, Medio y Bajo</Text>
                    <FormControl>
                        <FormControl.Label>Alto</FormControl.Label>
                        <Input size="md" variant="rounded" borderColor="gray.400" value={alto} onChangeText={(value) => EstadoInputs(value, 'alto')} keyboardType='numeric'
                            w={{
                                base: "50%"
                            }} />
                        <FormControl.Label>Medio</FormControl.Label>
                        <Input size="md" variant="rounded" borderColor="gray.400" value={medio} onChangeText={(value) => EstadoInputs(value, 'medio')} keyboardType='numeric'
                            w={{
                                base: "50%"
                            }} />
                        <FormControl.Label>Bajo</FormControl.Label>
                        <Input size="md" variant="rounded" borderColor="gray.400" value={bajo} onChangeText={(value) => EstadoInputs(value, 'bajo')} keyboardType='numeric'
                            w={{
                                base: "50%"
                            }} />
                    </FormControl>
                    <Button colorScheme="primary" onPress={() => buttonPress()}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );

}
