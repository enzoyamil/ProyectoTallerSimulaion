import React,{isValidElement, useState} from "react";
import { Alert, SafeAreaView } from "react-native";
import {
    FormControl, Button, Input, Stack, Text, ScrollView, Divider, Box, WarningOutlineIcon, Center,
    NativeBaseProvider, Select
} from "native-base"

function Pantalla2(props) {
    const { navigation } = props;
    const [FormEmpresa,SetFormEmpresa]=useState({
        razonSocial:'',
        nit:'',
        tipoSociedad:'',
        representantelegal:'',
        nombEmp:'',
        departamento:'',
        municipio:'',
        telefono:'',
        direcEmpresa:' '
    });
    console.log(FormEmpresa);

    function EstadoInputs(value,input) {
        SetFormEmpresa({...FormEmpresa,[input]:value});
        console.log(FormEmpresa);
        
    }
    let [service, setService] = React.useState("");
    let [tipoSocial, setTipoSocial] = React.useState("");

    let {razonSocial,nit,tipoSociedad,representantelegal,
        nombEmp,departamento,municipio,telefono,direcEmpresa}=FormEmpresa;


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
                            <FormControl.Label>Razón Social</FormControl.Label>
                            <Input variant="rounded" value={razonSocial} onChangeText={(value)=>EstadoInputs(value,'razonSocial')}/>

                            <FormControl.Label>NIT</FormControl.Label>
                            <Input keyboardType='numeric' variant="rounded" value={nit} onChangeText={(value)=>EstadoInputs(value,'nit')}/>

                            <FormControl.Label>Tipo de Sociedad</FormControl.Label>
                            <Select placeholder="Sociedad" variant="rounded" value={tipoSociedad} variant="rounded" 
                            selectedValue={tipoSocial} onValueChange={(itemValue) => setTipoSocial(itemValue)}
                            onChangeText={(value)=>EstadoInputs(value,'tipoSocial')}>


                                <Select.Item label="S.R.L" value="Sociedad de Responsabilidad Limitada" onPress={()=>EstadoInputs('S.R.L','tipoSociedad')}/>
                                <Select.Item label="S.A" value="Sociedad Anonima" onPress={()=>EstadoInputs('S.A','tipoSociedad')}/>
                            </Select>

                            <FormControl.Label>Representante legal</FormControl.Label>
                            <Input variant="rounded" value={representantelegal} onChangeText={(value)=>EstadoInputs(value,'representantelegal')}/>

                            <FormControl.Label>Nombre de la Empresa</FormControl.Label>
                            <Input variant="rounded" value={nombEmp} onChangeText={(value)=>EstadoInputs(value,'nombEmp')}/>

                            <FormControl.Label>Departamento</FormControl.Label>

                            <Select placeholder="Departamento" variant="rounded" value={departamento} variant="rounded" 
                            selectedValue={service} onValueChange={(itemValue) => setService(itemValue)}
                            onChangeText={(value)=>EstadoInputs(value,'departamento')}>


                                <Select.Item label="cbba" value="cochabamba" onPress={()=>EstadoInputs('cochabamba','extension')}/>
                                <Select.Item label="la paz" value="la paz"onPress={()=>EstadoInputs('la paz','extension')}/>
                                <Select.Item label="Santa Cruz" value="Santa Cruz" onPress={()=>EstadoInputs('Santa cruz','extension')}/>
                                <Select.Item label="Oruro" value="Oruro" onPress={()=>EstadoInputs('Oruro','extension')}/>
                                <Select.Item label="Potosi" value="Potosi" onPress={()=>EstadoInputs('potosi','extension')}/>
                                <Select.Item label="Chuquisaca" value="Chuquisaca" onPress={()=>EstadoInputs('chuquisaca','extension')}/>
                                <Select.Item label="Pando" value="Pando" onPress={()=>EstadoInputs('pando','extension')}/>
                                <Select.Item label="Tarija" value="Tarija" onPress={()=>EstadoInputs('tarija','extension')}/>
                                <Select.Item label="Beni" value="Beni" onPress={()=>EstadoInputs('beni','extension')}/>
                            </Select>

                            <FormControl.Label>Municipio</FormControl.Label>
                            <Input variant="rounded" value={municipio} onChangeText={(value)=>EstadoInputs(value,'municipio')}/>

                            <FormControl.Label>Telefono</FormControl.Label>
                            <Input keyboardType='numeric' variant="rounded" value={telefono} onChangeText={(value)=>EstadoInputs(value,'telefono')}/>

                            <FormControl.Label>Dirección de la Empresa</FormControl.Label>
                            <Input variant="rounded" value={direcEmpresa} onChangeText={(value)=>EstadoInputs(value,'direcEmpresa')}/>

                        </FormControl>
                        <Divider />
                    </Box>
                </Stack>
                <Box>
            <Button colorScheme="primary" onPress={() => navigation.navigate("Descripción del Negocio")}>Siguiente</Button>
            {/* <Button colorScheme="primary" onPress={() => buttonValidate()}>Siguiente</Button> */}
            </Box>
            </ScrollView>
            
        </NativeBaseProvider>
    );
                }
export default Pantalla2;