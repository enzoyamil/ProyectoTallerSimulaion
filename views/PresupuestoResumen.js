import React, { useState, useEffect, useContext } from "react";
import { Button, Stack, ScrollView, Divider, Box, NativeBaseProvider, Text ,Center} from "native-base";
import { DataTable } from 'react-native-paper';
import { ReporteContext } from "../components/ReporteContext";
function PresupuestoResumen(props) {
    const { navigation, route } = props;
    const [reporte, setReporte] = useContext(ReporteContext);
    const {
        montoPresupuesto, montoMano, totalAportMateriaP, totalInvMateriaP, totalAportePromo, totalInvPromo,
        totalPropioGasOpe, totalInvGasOpe, totalPropioInfra, totalInvInfra, maqPropTotal, maqInvTotal,
        totalReqLegPropio, totalReqLegInv
    } = route.params;

    function totalAportePropio() {
        let total = 0;
        total = montoPresupuesto + montoMano + totalAportMateriaP + totalAportePromo
            + totalPropioGasOpe + totalPropioInfra + maqPropTotal + totalReqLegPropio;
        return total;
    }
    console.log(reporte, "Pantalla Resumen");
    //setReporte((obj) => ({ ...obj,}));
    function buttonpress() {
        setReporte((obj) => ({
            ...obj,aporte_propio: {
                efectivo: montoPresupuesto,
                mano_obra: montoMano,
                materia_prima: totalAportMateriaP,
                req_promo: totalAportePromo,
                gasto_operativo: totalPropioGasOpe,
                infraestructura: totalPropioInfra,
                maquinaria: maqPropTotal,
                req_legales: totalReqLegPropio
            }
        }));

        navigation.navigate("Plan Inversión", {
            montoPresupuesto: montoPresupuesto,
            montoMano: montoMano,
            totalAportMateriaP: totalAportMateriaP,
            totalInvMateriaP: totalInvMateriaP,
            totalAportePromo: totalAportePromo,
            totalInvPromo: totalInvPromo,
            totalPropioGasOpe: totalPropioGasOpe,
            totalInvGasOpe: totalInvGasOpe,
            totalPropioInfra: totalPropioInfra,
            totalInvInfra: totalInvInfra,
            maqPropTotal: maqPropTotal,
            maqInvTotal: maqInvTotal,
            totalReqLegPropio: totalReqLegPropio,
            totalReqLegInv: totalReqLegInv,
            totalAporte: totalAporte
        })
    }

let totalAporte = totalAportePropio();

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
                }}>
                <Box>
                <Center><Text fontSize="22" bold margin="2">Capital Inversión Maquinaria</Text></Center>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Aporte Propio K.O</DataTable.Title>
                            <DataTable.Title>Monto Total </DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                            <DataTable.Cell>Efectivo</DataTable.Cell>
                            <DataTable.Cell>{parseFloat(montoPresupuesto).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Mano de Obra</DataTable.Cell>
                            <DataTable.Cell>{parseFloat(montoMano).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Materia Prima</DataTable.Cell>
                            <DataTable.Cell>{parseFloat(totalAportMateriaP).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Req. Promo</DataTable.Cell>
                            <DataTable.Cell>{parseFloat(totalAportePromo).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Gasto Operativo</DataTable.Cell>
                            <DataTable.Cell>{parseFloat(totalPropioGasOpe).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Header>
                            <DataTable.Title>Aporte Propio K.I</DataTable.Title>
                            <DataTable.Title>Monto Total </DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                            <DataTable.Cell>Infraestructura</DataTable.Cell>
                            <DataTable.Cell>{parseFloat(totalPropioInfra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Maquinaria</DataTable.Cell>
                            <DataTable.Cell>{parseFloat(maqPropTotal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Req. Legales</DataTable.Cell>
                            <DataTable.Cell>{parseFloat(totalReqLegPropio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Bs.</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </Box>
                <Box rounded="xl" p="5" borderWidth="1">
                    <Stack space={3}>
                        <Text>TOTAL: {totalAportePropio().toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}Bs.</Text>
                    </Stack>
                </Box>
                <Button colorScheme="primary" onPress={() => buttonpress()}>Siguiente</Button>
            </Stack>
        </ScrollView>
    </NativeBaseProvider>
);
}

export default PresupuestoResumen;