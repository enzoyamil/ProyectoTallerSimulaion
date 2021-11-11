import React from "react";
import { Text, SafeAreaView,Button } from "react-native";


function Pantalla3(props){
    const {navigation}=props;
    return(
            <SafeAreaView>
                <Text>Hola mundo desde pagina1</Text>
                <Button title="siguiente" onPress={()=>navigation.navigate("pagina1")}/>
            </SafeAreaView>
    );
}
export default Pantalla3;