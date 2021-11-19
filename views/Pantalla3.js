import React,{useState} from "react";
import {
    FormControl, Button, Input, Stack, ScrollView, Divider, Box,
    NativeBaseProvider, TextArea, Radio, HStack
} from "native-base";

function Pantalla3(props) {
    const { navigation } = props;
    const [FormDescripNegocio,setFormDescripNegocio] = useState({
        descripActividad:'',
        estadoFuncionamiento:'',
        tiempoFuncionamiento:'',
        inversiones:'',
        proyectoRentable:''
    });
    console.log(FormDescripNegocio);
    function EstadoInputs(value,input){
        setFormDescripNegocio({...FormDescripNegocio, [input]:value});
        console.log(FormDescripNegocio);
        
    }


    let{descripActividad,estadoFuncionamiento,tiempoFuncionamiento,inversiones,proyectoRentable}=FormDescripNegocio;
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
                    }}
                >
                    <Box>
                        <FormControl mb="5">
                            <FormControl.Label >Descripción de la Actividad</FormControl.Label>
                            <TextArea h={20}
                                placeholder="Descripción de la Actividad"
                                w={{ base: "100%", md: "25%",}} variant="rounded" value={descripActividad}
                                onChangeText={(value)=>EstadoInputs(value,'descripActividad')}
                                />



                            <FormControl.Label>La actividad esta funcionando</FormControl.Label>
                                <Radio.Group name="myRadioGroup" value={estadoFuncionamiento}>
                                    <Radio value='si' my={1} size="sm"  onPress={()=>EstadoInputs('si','estadoFuncionamiento')}>
                                        Sí
                                    </Radio>
                                    <Radio value='no' my={1} size="sm" onPress={()=>EstadoInputs('no','estadoFuncionamiento')}>
                                        No
                                    </Radio>
                                </Radio.Group>

                            <FormControl.Label>Tiempo de Funcionamieto</FormControl.Label>
                            <Input placeholder="Cuantos meses" keyboardType='numeric' variant="rounded" value={tiempoFuncionamiento}
                            onChangeText={(value)=>EstadoInputs(value,'tiempoFuncionamiento')}
                            />



                            <FormControl.Label>Que inversiones nesecita</FormControl.Label>
                            <TextArea h={20} placeholder="Que inversiones nesecita"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }} variant="rounded" value={inversiones} onChangeText={(value)=>EstadoInputs(value,'inversiones')}/>



                            <FormControl.Label>¿Por que el Proyecto es rentable?</FormControl.Label>
                            <TextArea
                                h={20}
                                placeholder="Rentabilidad del Proyecto"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }}
                                variant="rounded" value={proyectoRentable} onChangeText={(value)=>EstadoInputs(value,'proyectoRentable')}/>
                        </FormControl>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Descripción del Servicio")}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default Pantalla3;