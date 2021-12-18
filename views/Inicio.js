import React from "react"
import { FormControl, Button, Input, Stack, TextArea, ScrollView, Image, Box, Center, NativeBaseProvider, Select, Text } from "native-base";
import { clearReporte } from "../helpers/ReportLocalFunciones"
function Inicio(props) {
    const { navigation } = props;
    function crearPlan() {
        clearReporte("ReporteLocal");
        navigation.navigate("Información Personal");
    }
    return (
        <NativeBaseProvider >
            <ScrollView style={{ backgroundColor: '#D1E4E8'}}>
                <Box >
                    <Stack
                        space={4}
                        alignSelf="center"
                        px="2"
                        safeArea
                        mt="4"
                        p="10"
                        rounded="2xl"
                        w={{
                            base: '100%',
                            md: '25%',
                        }}>

                        <Center>
                            <Image
                                size={150}
                                resizeMode={"contain"}
                                borderRadius={100}
                                source={{
                                    uri: "https://cdn.discordapp.com/attachments/618875097205440512/921860815097839676/WhatsApp_Image_2021-12-18_at_4.24.36_PM.jpeg",
                                }}
                                alt="Alternate Text"
                            />
                            <Center><Text fontSize="30" margin={3} bold>Plan de Negocios</Text></Center>
                            <Center><Text fontSize="30" margin={3} bold>"FOCASE"</Text></Center>
                            <Button colorScheme="primary" margin={5} onPress={crearPlan}>Crear Plan</Button>
                        </Center>
                    </Stack>
                </Box>
            </ScrollView>
            <Center><Text fontSize="20" bold>FOCASE</Text></Center>
        </NativeBaseProvider>

    );
}
export default Inicio;