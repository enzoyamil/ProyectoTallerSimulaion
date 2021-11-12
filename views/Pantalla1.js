import React,{useState} from "react";
import { StyleSheet } from "react-native";
// import { NativeBaseProvider, Box,Button } from 'native-base';
import {
    FormControl, Button, Input, Stack, Text, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select
} from "native-base";

function Pantalla1(props) {
    const { navigation } = props;
    const [FormPersonal,setFormPersonal] = useState({
        name:'',
        apellido:'',
        ci:'',
        extension:'',
        edad:'',
        telefono:'',
        direccion:''
    });//estado inicial de usestate nullo.
    console.log(FormPersonal);

    function EstadoInputs(value,input){
        setFormPersonal({...FormPersonal, [input]:value});
        console.log(FormPersonal);
        
    }

    let {name,apellido,ci,extension,edad,telefono,direccion}=FormPersonal;
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
                            <Input variant="rounded" value={name} onChangeText={(value)=>EstadoInputs(value,'name')}/>
                            


                            <FormControl.Label>Apellidos</FormControl.Label>
                            <Input variant="rounded" value={apellido} onChangeText={(value)=>EstadoInputs(value,'apellido')}/>
                            



                            <FormControl.Label>CI</FormControl.Label>
                            <Input variant="rounded" value={ci} onChangeText={(value)=>EstadoInputs(value,'ci')}/>
                        


                            <FormControl.Label>Extensión</FormControl.Label>
                            <Select placeholder="Extension" variant="rounded" >
                                <Select.Item label="cbba" value="cochabamba" onPress={()=>EstadoInputs('cochabamba','extension')}/>
                                <Select.Item label="la paz" value="la paz"  onPress={()=>EstadoInputs('la paz','extension')}/>
                                <Select.Item label="Santa Cruz" value="Santa Cruz" onPress={()=>EstadoInputs('santacruz','extension')}/>
                                <Select.Item label="Oruro" value="Oruro" onPress={()=>EstadoInputs('oruro','extension')}/>
                                <Select.Item label="Potosi" value="Potosi" onPress={()=>EstadoInputs('potosi','extension')} />
                                <Select.Item label="Chuquisaca" value="Chuquisaca" onPress={()=>EstadoInputs('chuquisaca','extension')}/>
                                <Select.Item label="Pando" value="Pando" onPress={()=>EstadoInputs('pando','extension')} />
                                <Select.Item label="Tarija" value="Tarija" onPress={()=>EstadoInputs('Tarija','extension')} />
                                <Select.Item label="Beni" value="Beni"  onPress={()=>EstadoInputs('Beni','extension')}/>
                            </Select>
                            


                            <FormControl.Label>Edad</FormControl.Label>
                            <Input keyboardType='numeric' variant="rounded" value={edad} onChangeText={(value)=>EstadoInputs(value,'edad')} />

                            


                            <FormControl.Label>Telefono</FormControl.Label>
                            <Input keyboardType='numeric' variant="rounded" value={telefono} onChangeText={(value)=>EstadoInputs(value,'telefono')}/>

                


                            <FormControl.Label>Dirección</FormControl.Label>
                            <Input variant="rounded" value={direccion} onChangeText={(value)=>EstadoInputs(value,'direccion')}/>
            
                        </FormControl>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Informacón del Emprendimiento")}>Siguiente</Button>
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


