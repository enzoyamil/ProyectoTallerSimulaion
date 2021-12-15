import React, { useState } from "react";
import { Alert } from "react-native";

import { FormControl, Button, Input, Stack, ScrollView, Box, NativeBaseProvider, Select, Text, ImageBackground } from "native-base";
import { tamanioMaximo, tamanioMin, sinCaractEsp } from "../helpers/Validation"

function Home(props) {
    const { navigation } = props;
    function buttonPress() {
        navigation.navigate("Información Personal");
    }

    const img = './../icon/icono.png';

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
                        base: "100%",
                        md: "25%",
                    }}>


                    <Text>FOCASE</Text>

                    <Button colorScheme="primary" onPress={() => buttonPress()}>Iniciar</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default Home;