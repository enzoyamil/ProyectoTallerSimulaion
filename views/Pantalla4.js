
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select, FlatList, Text
} from "native-base";
import { DataTable } from 'react-native-paper';


function Pantalla4(props) {
    const { navigation } = props;
    const [TableService, setTableService] = useState([]);

    const [FormDescripServ, setFormDescripServ] = useState({
        nombServicio: '',
        elabServicio: '',
        caractServicio: ''
    });

    useEffect(() => {
        setFormDescripServ(FormDescripServ);
    }, [FormDescripServ]);


    function EstadoInputs(value, input) {
        setFormDescripServ({ ...FormDescripServ, [input]: value });
        // console.log(FormDescripServ);
    }


    function agregarFila() {
        if(validarAgregar()){
            setTableService([...TableService, FormDescripServ]);
            console.log(TableService);
        }else{
            
            Alert.alert("Error campos Vacíos");
        }
        
    }

    function validarAgregar(){
        let isValid=false;
        if(nombServicio==''||elabServicio==''||caractServicio==''){
            return isValid;
        }else{
            return isValid=true;
        }
    }
    function validarSiguiente(){
        let tamanio =TableService.length;
        // console.log(tamanio);
        if(tamanio>0){
            navigation.navigate("Analisis Mercado")
        }else{
            Alert.alert("Tabla Vacia");
        }
    }


    let { nombServicio, elabServicio, caractServicio } = FormDescripServ;

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
                            <FormControl.Label> Nombre del Servicio</FormControl.Label>
                            <Input variant="rounded" value={nombServicio}
                                onChangeText={(value) => EstadoInputs(value, 'nombServicio')} />


                            <FormControl.Label >Proceso de elaboración</FormControl.Label>
                            <TextArea h={20}
                                placeholder="Descripción de la Actividad"
                                w={{ base: "100%", md: "25%", }} variant="rounded" value={elabServicio}
                                onChangeText={(value) => EstadoInputs(value, 'elabServicio')}
                                multiline={true}
                            />

                            <FormControl.Label>Caracteristicas del Servicio</FormControl.Label>
                            <TextArea h={20} placeholder="Que inversiones nesecita"
                                w={{
                                    base: "100%",
                                    md: "25%",
                                }} variant="rounded" value={caractServicio} onChangeText={(value) => EstadoInputs(value, 'caractServicio')}
                                multiline={true}
                            />
                        </FormControl>
                        <Box>
                            {/* <Button colorScheme="primary" onPress={() => navigation.navigate("")}>Añadir</Button> */}
                            <Button colorScheme="primary" onPress={agregarFila}>Añadir</Button>
                        </Box>

                        <Text>Servicios</Text>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Servicio</DataTable.Title>
                                <DataTable.Title>Elaboración</DataTable.Title>
                                <DataTable.Title >Caracteristicas</DataTable.Title>
                            </DataTable.Header>


                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell>{item.nombServicio}</DataTable.Cell>
                                        <DataTable.Cell>{item.elabServicio}</DataTable.Cell>
                                        <DataTable.Cell>{item.caractServicio}</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }


                        </DataTable>


                        <Divider />
                    </Box>
                </Stack>
                <Box>
                <Button colorScheme="primary" onPress={() =>validarSiguiente()}>Siguiente</Button>
            </Box>
            </ScrollView>
        </NativeBaseProvider>


    );
}
export default Pantalla4;