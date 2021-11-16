import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
// import { NativeBaseProvider, Box,Button } from 'native-base';
import {
    FormControl, Button, Input, Stack, Text, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select
} from "native-base";
import { tamanioMaximo, tamanioMin, sinCaractEsp } from "../helpers/Validation"

function Pantalla1(props) {
    const { navigation } = props;
    const [FormPersonal, setFormPersonal] = useState({
        name: '',
        apellido: '',
        ci: '',
        extension: '',
        edad: '',
        telefono: '',
        direccion: ''
    });//estado inicial de usestate nullo.
    console.log(FormPersonal);

    function EstadoInputs(value, input) {
        setFormPersonal({ ...FormPersonal, [input]: value });
        console.log(FormPersonal);

    }
    function buttonPress() {

        if (name == '' || apellido == '' || ci == '' || extension == '' || edad == '' || telefono == '' || direccion == '') {
            console.log(name);
            Alert.alert("Error Campo Vacio");
        } else if (tamanioMaximo(name, 15)) {
            Alert.alert("Cadena nombre muy grande");
        } else if (tamanioMin(name, 2)) {
            Alert.alert("Cadena nombre muy pequeña");
        } else if (tamanioMaximo(apellido, 15)) {
            Alert.alert("Cadena apellido muy grande");
        } else if (tamanioMaximo(apellido, 15)) {
            Alert.alert("Cadena apellido muy grande");
        } else if (tamanioMin(apellido, 4)) {
            Alert.alert("Cadena apellido muy pequeña");
        } else if (edad < 0 || edad < 18) {
            Alert.alert("Edad no aceptada");
        } else if (telefono.length < 7) {
            Alert.alert("Telefono no aceptado");
        } else if (ci.length < 7) {
            Alert.alert("CI no aceptado");
        } else if (tamanioMaximo(direccion, 50)) {
            Alert.alert("Edad no aceptada");
        } else if (tamanioMin(direccion, 10)) {
            Alert.alert("Dirección muy corta");
        } else {
            Alert.alert("Succesfull");
            navigation.navigate("Informacón del Emprendimiento");
        }
    }

    let { name, apellido, ci, extension, edad, telefono, direccion } = FormPersonal;
    let [service, setService] = React.useState("");
    return (
        <NativeBaseProvider>
            <ScrollView
                w={{
                    base: "90%",
                    md: "90%",
                }}
            >
                <Stack
                    space={2.5}
                    alignSelf="center"
                    px="4"
                    safeArea
                    mt="4"
                    w={{
                        base: "100%",
                        md: "25%",
                    }}
                >
                    <Box>
                        <FormControl mb="5">
                            <FormControl.Label>Nombres</FormControl.Label>
                            <Input variant="rounded" value={name} onChangeText={(value) => EstadoInputs(value, 'name')} />



                            <FormControl.Label>Apellidos</FormControl.Label>
                            <Input variant="rounded" value={apellido} onChangeText={(value) => EstadoInputs(value, 'apellido')} />




                            <FormControl.Label>CI</FormControl.Label>
                            <Input variant="rounded" value={ci} onChangeText={(value) => EstadoInputs(value, 'ci')} keyboardType="numeric" />



                            <FormControl.Label>Extensión</FormControl.Label>
                            <Select placeholder="Extension" value={extension} variant="rounded" selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                                onChangeText={(value) => EstadoInputs(value, 'extension')}>
                                <Select.Item label="cbba" value="cochabamba" onPress={() => EstadoInputs('cochabamba', 'extension')} />
                                <Select.Item label="la paz" onPress={() => EstadoInputs('la paz', 'extension')} />
                                <Select.Item label="Santa Cruz" value="Santa Cruz" onPress={() => EstadoInputs('santacruz', 'extension')} />
                                <Select.Item label="Oruro" value="Oruro" onPress={() => EstadoInputs('oruro', 'extension')} />
                                <Select.Item label="Potosi" value="Potosi" onPress={() => EstadoInputs('potosi', 'extension')} />
                                <Select.Item label="Chuquisaca" value="Chuquisaca" onPress={() => EstadoInputs('chuquisaca', 'extension')} />
                                <Select.Item label="Pando" value="Pando" onPress={() => EstadoInputs('pando', 'extension')} />
                                <Select.Item label="Tarija" value="Tarija" onPress={() => EstadoInputs('Tarija', 'extension')} />
                                <Select.Item label="Beni" value="Beni" onPress={() => EstadoInputs('Beni', 'extension')} />
                            </Select>

                            <FormControl.Label>Edad</FormControl.Label>
                            <Input keyboardType='numeric' variant="rounded" value={edad} onChangeText={(value) => EstadoInputs(value, 'edad')} />




                            <FormControl.Label>Telefono</FormControl.Label>
                            <Input keyboardType='numeric' variant="rounded" value={telefono} onChangeText={(value) => EstadoInputs(value, 'telefono')} />




                            <FormControl.Label>Dirección</FormControl.Label>
                            <Input variant="rounded" value={direccion} onChangeText={(value) => EstadoInputs(value, 'direccion')} />

                        </FormControl>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                {/* <Button colorScheme="primary" onPress={() => navigation.navigate("Informacón del Emprendimiento")}>Siguiente</Button> */}
                <Button colorScheme="primary" onPress={() => buttonPress()}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default Pantalla1;
//style={estilos.texto}
const estilos = new StyleSheet.create({
    texto: {
        backgroundColor: ""
    },
    fondo: {
        backgroundColor: "red"
    }
});


