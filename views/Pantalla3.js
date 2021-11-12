import React from "react";
import {
    FormControl, Button, Input, Stack, ScrollView, Divider, Box,
    NativeBaseProvider, TextArea, Radio, HStack
} from "native-base";

function Pantalla3(props) {
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
                            <FormControl.Label >Descripción de la Actividad</FormControl.Label>
                            <TextArea h={20}
                                placeholder="Descripción de la Actividad"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }} variant="rounded" />
                            <FormControl.Label>La actividad esta funcionando</FormControl.Label>
                                <Radio.Group name="myRadioGroup">
                                    <Radio value="one" my={1} size="sm">
                                        One
                                    </Radio>
                                    <Radio value="two" my={1} size="sm">
                                        Two
                                    </Radio>
                                </Radio.Group>
                            <FormControl.Label>Tiempo de Funcionamieto</FormControl.Label>
                            <Input placeholder="Cuantos meses" keyboardType='numeric' variant="rounded" />
                            <FormControl.Label>Que inversiones nesecita</FormControl.Label>
                            <TextArea h={20}
                                placeholder="Que inversiones nesecita"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }} variant="rounded" />
                            <FormControl.Label>¿Por que el Proyecto es rentable?</FormControl.Label>
                            <TextArea
                                h={20}
                                placeholder="Rentabilidad del Proyecto"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }}
                                variant="rounded" />
                        </FormControl>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("")}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default Pantalla3;