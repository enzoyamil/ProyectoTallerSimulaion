import React, { useState, useEffect } from "react";
import { Alert, StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, ScrollView, Divider, Box,
    NativeBaseProvider,Text,Center
} from "native-base";
import { DataTable } from 'react-native-paper';


function MateriaPrima(props) {
    const { navigation,route } = props;
    const [TableService, setTableService] = useState([]);
    const [FormateriaPrima, setFormateriaPrima] = useState({
        cantidad: '',
        unidad: '',
        detalle: '',
        aportePropio: '',
        seInvertira: ''
    });
    const {montoPresupuesto,montoMano} = route.params;
    console.log("este es el monto presupuesto"+montoPresupuesto);
    console.log("este es el monto mano de obra"+montoMano);

    useEffect(() => {
        setFormateriaPrima(FormateriaPrima);
    }, [FormateriaPrima]);

    function EstadoInputs(value, input) {
        setFormateriaPrima({ ...FormateriaPrima, [input]: value });
        // console.log(FormateriaPrima);
    }
    function sumAportePropio(obj) {
        let invPropia = 0;
        TableService.map((item) => {
            let numero = parseInt(item[obj]);
            invPropia = invPropia + numero;
        })
        return invPropia;
    }

    function sumInversionPropio(obj) {
        let invPropioTotal = 0;
        TableService.map((item) => {
            let numero = parseInt(item[obj]);
            invPropioTotal = invPropioTotal + numero;
        })
        return invPropioTotal;
    }

    function agregarFila() {
        if(validarAgregar()){
            Alert.alert("Error Campos Vacios");
        }else{
            setTableService([...TableService, FormateriaPrima]);
            setFormateriaPrima(
            {
            cantidad: '',
            unidad: '',
            detalle: '',
            aportePropio: '',
            seInvertira: ''
            }
        );
        }
        
        
    }
    function validarAgregar(){
        let isValid=true;
        if(cantidad==''||unidad==''||detalle==''||aportePropio==''||seInvertira==''){
            return isValid;
        }else{
            return isValid=false;
        }
    }
    function validarSiguiente(){
        let tamanio =TableService.length;
        // console.log(tamanio);
        if(tamanio>0){
            navigation.navigate("Requerimientos Promocionales",{
                montoPresupuesto:montoPresupuesto,
                montoMano:montoMano,
                totalAportMateriaP:montoApor,
                totalInvMateriaP: montoInversion
                
            });
        }else{
            Alert.alert("Error Tabla Vacia");
        }
    }

    let montoApor = sumAportePropio("aportePropio");
    let montoInversion =sumInversionPropio("seInvertira");
    // console.log("este es el montoAportePropio MateriaPrima:"+montoApor);
    // console.log("este es el montoInversion MateriaPrima"+ montoInversion);

    let { cantidad, unidad, detalle, aportePropio, seInvertira } = FormateriaPrima;
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
                    <Center><Text fontSize="20" bold >Materia Prima</Text></Center>
                        <FormControl mb="5">
                            <FormControl.Label >Cantidad</FormControl.Label>
                            <Input variant="rounded" value={cantidad} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'cantidad')} />

                            <FormControl.Label >Unidad</FormControl.Label>
                            <Input variant="rounded" value={unidad} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'unidad')} />

                            <FormControl.Label >Detalle</FormControl.Label>
                            <Input variant="rounded" value={detalle}
                                onChangeText={(value) => EstadoInputs(value, 'detalle')} />

                            <FormControl.Label >Aporte Propio</FormControl.Label>
                            <Input variant="rounded" value={aportePropio} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'aportePropio')} />

                            <FormControl.Label >Inversión</FormControl.Label>
                            <Input variant="rounded" value={seInvertira} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'seInvertira')} />



                        </FormControl>
                        <Center>
                            {/* <Button colorScheme="primary" onPress={() => navigation.navigate("")}>Añadir</Button> */}
                            <Button colorScheme="primary" onPress={agregarFila}>Añadir</Button>
                        </Center>

                        {/* <Text>Capital Mano de Obra</Text> */}

                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Cantidad</DataTable.Title>
                                <DataTable.Title>Unidad </DataTable.Title>
                                {/* <DataTable.Title>Detalle</DataTable.Title> */}
                                <DataTable.Title>Aporte Propio</DataTable.Title>
                                <DataTable.Title>Inversión</DataTable.Title>
                            </DataTable.Header>

                            {
                                TableService.map((item, pos) => (
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell>{item.cantidad}</DataTable.Cell>
                                        <DataTable.Cell>{item.unidad}</DataTable.Cell>
                                        {/* <DataTable.Cell>{item.detalle}</DataTable.Cell> */}
                                        <DataTable.Cell>{item.aportePropio}</DataTable.Cell>
                                        <DataTable.Cell>{item.seInvertira}</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }

                            <DataTable>

                                <DataTable.Row> 
                                <DataTable.Cell> SUBTOTAL</DataTable.Cell>
                                <DataTable.Cell> {sumAportePropio("aportePropio")}</DataTable.Cell>
                                <DataTable.Cell> {sumInversionPropio("seInvertira")}</DataTable.Cell>
                                </DataTable.Row>
                                
                            </DataTable>

                        </DataTable>
                        <Divider />
                    </Box>
                </Stack>
                <Box>
                <Button colorScheme="primary" onPress={() => validarSiguiente()}>Siguiente</Button>
            </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}
export default MateriaPrima;