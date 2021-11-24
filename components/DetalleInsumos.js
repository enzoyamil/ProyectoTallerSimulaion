import React from "react";
import { NativeBaseProvider, Box, Text, Stack, Button } from 'native-base'

function DetalleInsumo({ producto_o_servico, unidad_medida, navigation, id,mub }) {
    return (
        <NativeBaseProvider>
            <Box rounded="xl" p="5" borderWidth="1">
                <Stack space={3}>
                    <Text>Producto o Servicio: {producto_o_servico}</Text>
                    <Text>Unidad de medida: {unidad_medida}</Text>
                    <Button colorScheme="primary" onPress={() => navigation.navigate("Hoja-de-Costos4_2", {id,mub})}>Detalles</Button>
                </Stack>
            </Box>
        </NativeBaseProvider>
    );
}
export default DetalleInsumo;