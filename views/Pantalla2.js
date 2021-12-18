import React, { useState, useContext } from "react";
import { Alert } from "react-native";
import { FormControl, Button, Input, Stack, ScrollView, Box, NativeBaseProvider, Select, Text } from "native-base"
import { ReporteContext } from "../Components/ReporteContext";
function Pantalla2(props) {

    const { navigation } = props;
    // const [reporte,setReporte]=useState();
    const [reporte, setReporte] = useContext(ReporteContext);

    // console.log(Reporte);
    const [FormEmpresa, SetFormEmpresa] = useState({
        razonSocial: '',
        nit: '',
        tipoSociedad: '',
        representantelegal: '',
        nombEmp: '',
        departamento: '',
        municipio: '',
        telefono: '',
        direcEmpresa: ' '
    });

    function EstadoInputs(value, input) {
        SetFormEmpresa({ ...FormEmpresa, [input]: value });
    }

    function buttonPress() {

        if(razonSocial==''||nit==''||tipoSociedad==''||nombEmp==''||telefono==''||direcEmpresa==''){
            Alert.alert("Error","Error campos vacíos");
        }else{
            setReporte((obj) => ({ ...obj, nombre_empresa: FormEmpresa.nombEmp, nit: FormEmpresa.nit }));
            // console.log(reporte);
            navigation.navigate("Presupuesto Emprendimiento");
        }
        

    }


    let [service, setService] = React.useState("");
    let [tipoSocial, setTipoSocial] = React.useState("");
    let { razonSocial, nit, tipoSociedad, representantelegal, nombEmp, departamento, municipio, telefono, direcEmpresa } = FormEmpresa;

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
                        <FormControl mb="5">
                            <FormControl.Label>Razón Social(*)</FormControl.Label>
                            <Input variant="rounded" value={razonSocial} onChangeText={(value) => EstadoInputs(value, 'razonSocial')} />
                            <FormControl.Label>NIT(*)</FormControl.Label>
                            <Input keyboardType='numeric' variant="rounded" value={nit} onChangeText={(value) => EstadoInputs(value, 'nit')} />
                            <FormControl.Label>Tipo de Sociedad(*)</FormControl.Label>
                            <Select placeholder="Sociedad" variant="rounded" value={tipoSociedad}
                                selectedValue={setTipoSocial} onValueChange={(itemValue) => setTipoSocial(itemValue)}
                                onValueChange={(value) => EstadoInputs(value, 'tipoSociedad')}
                                >
                                <Select.Item label="S.R.L" value="S.R.L" />
                                <Select.Item label="S.A" value="S.A"/>
                            </Select>
                            {/* <FormControl.Label>Representante legal</FormControl.Label>
                            <Input variant="rounded" value={representantelegal} onChangeText={(value) => EstadoInputs(value, 'representantelegal')} /> */}
                            <FormControl.Label>Nombre de la Empresa(*)</FormControl.Label>
                            <Input variant="rounded" value={nombEmp} onChangeText={(value) => EstadoInputs(value, 'nombEmp')} />
                            {/* <FormControl.Label>Departamento(*)</FormControl.Label>
                            <Select placeholder="Departamento" variant="rounded" value={departamento} variant="rounded"
                                selectedValue={service} onValueChange={(itemValue) => setService(itemValue)} onChangeText={(value) => EstadoInputs(value, 'departamento')}>
                                <Select.Item label="cbba" value="cochabamba" onPress={() => EstadoInputs('cochabamba', 'extension')} />
                                <Select.Item label="la paz" value="la paz" onPress={() => EstadoInputs('la paz', 'extension')} />
                                <Select.Item label="Santa Cruz" value="Santa Cruz" onPress={() => EstadoInputs('Santa cruz', 'extension')} />
                                <Select.Item label="Oruro" value="Oruro" onPress={() => EstadoInputs('Oruro', 'extension')} />
                                <Select.Item label="Potosi" value="Potosi" onPress={() => EstadoInputs('potosi', 'extension')} />
                                <Select.Item label="Chuquisaca" value="Chuquisaca" onPress={() => EstadoInputs('chuquisaca', 'extension')} />
                                <Select.Item label="Pando" value="Pando" onPress={() => EstadoInputs('pando', 'extension')} />
                                <Select.Item label="Tarija" value="Tarija" onPress={() => EstadoInputs('tarija', 'extension')} />
                                <Select.Item label="Beni" value="Beni" onPress={() => EstadoInputs('beni', 'extension')} />
                            </Select>
                            <FormControl.Label>Municipio(*)</FormControl.Label>
                            <Input variant="rounded" value={municipio} onChangeText={(value) => EstadoInputs(value, 'municipio')} /> */}
                            <FormControl.Label>Telefono(*)</FormControl.Label>
                            <Input keyboardType='numeric' variant="rounded" value={telefono} onChangeText={(value) => EstadoInputs(value, 'telefono')} />
                            <FormControl.Label>Dirección de la Empresa(*)</FormControl.Label>
                            <Input variant="rounded" value={direcEmpresa} onChangeText={(value) => EstadoInputs(value, 'direcEmpresa')} />
                        </FormControl>
                        <Text>Los campos con (*) son obligatorios</Text>
                    </Box>
                    <Button colorScheme="primary" onPress={() => buttonPress()}>Siguiente</Button>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}

export default Pantalla2;