import React from "react";
import { Text, SafeAreaView} from "react-native";
import { NativeBaseProvider, Box,Button } from 'native-base';


function Pantalla1(props) {
    const { navigation } = props;

    return (
        // <SafeAreaView>
        //     <Text>Hola mundo desde pagina1</Text>
        //     <Button title="siguiente" onPress={()=>navigation.navigate("pagina2")}/>
        // </SafeAreaView>
        <NativeBaseProvider>
            <Box>Hello world</Box>
            <Box>
            <Button  colorScheme="secondary" onPress={()=>navigation.navigate("pagina2")}>Siguiente</Button>
            </Box>
            
        </NativeBaseProvider>


    );
}
export default Pantalla1;