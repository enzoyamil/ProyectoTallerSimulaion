import React from "react";
import { Text, SafeAreaView,Button } from "react-native";
import { NativeBaseProvider, Box } from 'native-base';


function Pantalla2(props){
    const {navigation}=props;
    return(
            <SafeAreaView>
                <Text>Hola mundo desde pagina1</Text>
                <Button title="siguiente" onPress={()=>navigation.navigate("pagina3")}/>
            </SafeAreaView>
    );
}
export default Pantalla2;