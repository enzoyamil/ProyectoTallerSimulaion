import React, { useState, useEffect } from "react";
import { Alert,StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, TextArea, ScrollView, Divider, Box,
    NativeBaseProvider,Text,Center
} from "native-base";
import { DataTable } from 'react-native-paper';


function GastosOperativos(props) {
    const { navigation,route } = props;
    const [TableService, setTableService] = useState([]);

    const [FormGastOperativo, setGastOperativo] = useState({
        cantidad: '',
        unidad: '',
        detalle: '',
        aportePropio: '',
        seInvertira: ''
    });
    const {montoPresupuesto,montoMano,totalAportMateriaP,totalInvMateriaP,totalAportePromo,totalInvPromo} = route.params;
    // console.log("este es el monto presupuesto"+montoPresupuesto);
    // console.log("este es el monto mano de obra"+montoMano);
    // console.log("este es el monto totalAportMateriaP"+totalAportMateriaP);
    // console.log("este es el monto totalInvMateriaP"+totalInvMateriaP);
    // console.log("este es el monto totalAportePromo"+totalAportePromo);
    // console.log("este es el monto totalInvPromo"+totalInvPromo);
    useEffect(() => {
        setGastOperativo(FormGastOperativo);
    }, [FormGastOperativo]);


    function EstadoInputs(value, input) {
        setGastOperativo({ ...FormGastOperativo, [input]: value });
        // console.log(FormGastOperativo);
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

    let totalPropioGasOpe=sumAportePropio("aportePropio");
    let totalInvGasOpe=sumInversionPropio("seInvertira");
    console.log("este es el totalPropioGasOpe"+ totalPropioGasOpe);
    console.log("este es el totalInvGasOpe"+ totalInvGasOpe);


    function agregarFila() {
        if(validarAgregar()){
            Alert.alert("Error Campos Vacios");
        }else{
        setTableService([...TableService, FormGastOperativo]);
        setGastOperativo(
            {
            cantidad: '',
            unidad: '',
            detalle: '',
            aportePropio: '',
            seInvertira: ''
            }
        );}
        // console.log(TableService);
    }


    function totalCapitalOpercionesPropio(){
        let  totalPropio = parseInt(montoMano) + parseInt(totalAportMateriaP)+ parseInt(totalAportePromo)+ parseInt(totalPropioGasOpe);
        // console.log("TOTAL:" + totalPropio)
        return parseInt(totalPropio);
    }
    
    function totalInversionOpercionesPropio(){
        let totalInv = parseInt(totalInvMateriaP)  + parseInt(totalInvPromo)+ parseInt(totalInvGasOpe) ;
        // console.log("TOTAL:" + totalInv)
        return totalInv;
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
            navigation.navigate("Infraestructura",{
                montoPresupuesto:montoPresupuesto,
                montoMano:montoMano,
                totalAportMateriaP:totalAportMateriaP,
                totalInvMateriaP: totalInvMateriaP,
                totalAportePromo:totalAportePromo,
                totalInvPromo:totalInvPromo,
                totalPropioGasOpe:totalPropioGasOpe,
                totalInvGasOpe:totalInvGasOpe

            })
        }else{
            Alert.alert("Error Tabla Vacia");
        }
    }
    let totalPropio = totalCapitalOpercionesPropio();
    console.log("TotalCapital"+totalPropio);
    let totalInv = totalInversionOpercionesPropio();
    console.log("TotalInversion"+totalInv);



    let { cantidad, unidad, detalle, aportePropio, seInvertira } = FormGastOperativo;
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
                <Center><Text fontSize="20" bold>Gastos Operativos</Text></Center>
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
                            <Button colorScheme="primary" onPress={agregarFila}>Añadir</Button>
                        </Center>

                        <Text>Capital Operativo</Text>

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

                                <DataTable>
                                <DataTable.Row> 
                                <DataTable.Cell> TOTAL</DataTable.Cell>
                                <DataTable.Cell>{totalPropio}</DataTable.Cell>
                                <DataTable.Cell>{totalInv}</DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
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
export default GastosOperativos;