import React from "react";
import { Box, NativeBaseProvider, Text, Center, Stack, ScrollView, FormControl, Input, Select, Button } from "native-base"
import { useState } from "react";

export default function CostoPantalla1(props) {

    const { navigation } = props;
    const [FormManofactura, setFormManofactura] = useState({
        alto: '',
        medio: '',
        bajo: '',
    });
    function EstadoInputs(value, input) {
        setFormManofactura({ ...FormManofactura, [input]: value });
    }
    let { alto, medio, bajo } = FormManofactura;
    console.log(FormManofactura);
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack space={5}
                    px="4"
                    mt="4">
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
                    <Box>
                        <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos3", {
                            alto, medio, bajo
                        })}>Siguiente</Button>
                    </Box>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );

}