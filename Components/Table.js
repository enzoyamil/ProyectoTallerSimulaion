import React from "react";
import {
    Stack,
    Center,
    Heading,
    ScrollView,
    VStack,
    Divider,
    NativeBaseProvider,
} from "native-base"

const Table = () => {
    return(
    <VStack space="2.5" mt="4">
        <Heading size="md">Servicios</Heading>
        <Stack direction="row">
            <Center
                size="100"
                bg="primary"
                rounded="sm"
                _text={{
                    color: "warmGray.50",
                    fontWeight: "medium",
                }}
                shadow={"3"}>
            Contenido
            </Center>
            
        </Stack>
        <Divider />
        </VStack>
);
}
            export default Table;