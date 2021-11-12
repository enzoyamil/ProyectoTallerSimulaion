import React from "react";
import { SafeAreaView } from "react-native";
import {
    FormControl, Button, Input, Stack, Text, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select
} from "native-base"

function Pantalla2(props) {
    const { navigation } = props;
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
                            <FormControl.Label>Razón Social</FormControl.Label>
                            <Input variant="rounded"/>
                            <FormControl.Label>NIT</FormControl.Label>
                            <Input keyboardType='numeric' variant="rounded" />
                            <FormControl.Label>Tipo de Sociedad</FormControl.Label>
                            <Select placeholder="Sociedad" variant="rounded">
                                <Select.Item label="S.R.L" value="Sociedad de Responsabilidad Limitada" />
                                <Select.Item label="S.A" value="Sociedad Anonima" />
                            </Select>
                            <FormControl.Label>Representante legal</FormControl.Label>
                            <Input variant="rounded"/>
                            <FormControl.Label>Nombre de la Empresa</FormControl.Label>
                            <Input variant="rounded"/>
                            <FormControl.Label>Departamento</FormControl.Label>
                            <Select placeholder="Departamento" variant="rounded">
                                <Select.Item label="cbba" value="cochabamba" />
                                <Select.Item label="la paz" value="la paz" />
                                <Select.Item label="Santa Cruz" value="Santa Cruz" />
                                <Select.Item label="Oruro" value="Oruro" />
                                <Select.Item label="Potosi" value="Potosi" />
                                <Select.Item label="Chuquisaca" value="Chuquisaca" />
                                <Select.Item label="Pando" value="Pando" />
                                <Select.Item label="Tarija" value="Tarija" />
                                <Select.Item label="Beni" value="Beni" />
                            </Select>
                            <FormControl.Label>Municipio</FormControl.Label>
                            <Input variant="rounded"/>
                            <FormControl.Label>Telefono</FormControl.Label>
                            <Input keyboardType='numeric' variant="rounded"/>
                            <FormControl.Label>Dirección de la Empresa</FormControl.Label>
                            <Input variant="rounded"/>
                        </FormControl>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
            <Button colorScheme="primary" onPress={() => navigation.navigate("Descripción del Negocio")}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default Pantalla2;