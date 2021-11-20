import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
    FormControl, Button, Input, Stack, ScrollView, Divider, Box,
    NativeBaseProvider,Text
} from "native-base";
import { DataTable } from 'react-native-paper';

function PantallaManoEmprendedor(props) {
    const { navigation,route } = props;
    const [TableService, setTableService] = useState([]);
    const [FormManoObra, setFormManoObra] = useState({
        cantidad: '',
        unidad: 'Global',
        detalle: '',
        aportePropio:''
    });
    
    const {montoPresupuesto} = route.params;
    console.log(montoPresupuesto);
    useEffect(() => {
        setFormManoObra(FormManoObra);
    }, [FormManoObra]);

    function EstadoInputs(value, input) {
        setFormManoObra({ ...FormManoObra, [input]: value });
        // console.log(FormManoObra);
    }
    function sumatoria(obj) {
        let montoTotal = 0;
        TableService.map((item) => {
            let numero = parseInt(item[obj]);
            montoTotal = montoTotal + numero;
        })
        return montoTotal;
    }

    function agregarFila() {
        setTableService((obj)=>{
            let {aportePropio,cantidad,unidad}=FormManoObra;
            aportePropio = parseInt(cantidad)*parseInt(aportePropio);
            let arr = {aportePropio,cantidad,unidad}
            setFormManoObra(
                {
                cantidad: '',
                unidad: '',
                detalle: '',
                aportePropio: '',
                seInvertira: ''
                }
            );
            return [...obj,arr];
        });
        // setTableService([...TableService, FormManoObra]);
    }
    let monto = sumatoria("aportePropio");
    console.log("esto es el monto mano de obra"+monto);
    
    let { cantidad, unidad, detalle, aportePropio } = FormManoObra;
    // let manoObraTotal = sumatoria(aportePropio);
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
                            <FormControl.Label >Cantidad</FormControl.Label>
                            <Input variant="rounded" value={cantidad} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'cantidad')} />


                            <FormControl.Label >Detalle</FormControl.Label>
                            <Input variant="rounded" value={detalle}
                                onChangeText={(value) => EstadoInputs(value, 'detalle')} />

                            <FormControl.Label >Aporte Propio</FormControl.Label>
                            <Input variant="rounded" value={aportePropio} keyboardType="numeric"
                                onChangeText={(value) => EstadoInputs(value, 'aportePropio')} />

                        </FormControl>
                        <Box>
                            <Button colorScheme="primary" onPress={agregarFila}>Añadir</Button>
                        </Box>

                        <Text>Capital Mano de Obra</Text>

                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Cantidad</DataTable.Title>
                                <DataTable.Title>Unidad</DataTable.Title>
                                <DataTable.Title>Aporte Propio</DataTable.Title>
                            </DataTable.Header>
                            {
                                TableService.map((item, pos) => (
                                    
                                    <DataTable.Row key={pos}>
                                        <DataTable.Cell>{item.cantidad}</DataTable.Cell>
                                        <DataTable.Cell>{item.unidad}</DataTable.Cell>
                                        <DataTable.Cell>{item.aportePropio}</DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>SUBTOTAL </DataTable.Title>
                                    <DataTable.Title>{sumatoria("aportePropio")}</DataTable.Title>
                                </DataTable.Header>
                            </DataTable>

                        </DataTable>
                        <Divider />
                    </Box>
                </Stack>
            </ScrollView>
            <Box>
                <Button colorScheme="primary" onPress={() => navigation.navigate("Materia Prima",{montoPresupuesto:montoPresupuesto,montoMano:monto})}>Siguiente</Button>
            </Box>
        </NativeBaseProvider>
    );
}
export default PantallaManoEmprendedor;