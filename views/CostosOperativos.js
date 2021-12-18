import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  FormControl,
  Button,
  Input,
  Stack,
  ScrollView,
  Divider,
  Box,
  NativeBaseProvider,
  Text
} from 'native-base';
import { tamanioMaximo, tamanioMin } from '../helpers/Validation';

function CostosOperativos(props) {

  const { navigation, route } = props;
  const { mub, ventas_anuales, costos_anuales, montoFin } = route.params;
  const [FormPersonal, setFormPersonal] = useState({
    impuestos: 0,
    alimentacion: 0,
    luz: 0,
    agua: 0,
    gas: 0,
    celular: 0,
    internet: 0,
    alquiler: 0,
    transporte: 0,
    escritorio: 0,
    empleados: 0,
    promocion: 0,
  });
  
  let {
    impuestos,
    alimentacion,
    luz,
    agua,
    gas,
    celular,
    internet,
    alquiler,
    transporte,
    escritorio,
    empleados,
    promocion,
    vestimenta,
    salud,
    otros,
  } = FormPersonal;
  function EstadoInputs(value, input) {
    setFormPersonal({ ...FormPersonal, [input]: value });
  }
  function devolverTotal() {
    let total = parseInt(FormPersonal.impuestos) + parseInt(FormPersonal.alimentacion) + parseInt(FormPersonal.luz) + parseInt(FormPersonal.agua) + parseInt(FormPersonal.gas) + parseInt(FormPersonal.celular) + parseInt(FormPersonal.internet) + parseInt(FormPersonal.alquiler) + parseInt(FormPersonal.transporte) + parseInt(FormPersonal.escritorio) + parseInt(FormPersonal.empleados) + parseInt(FormPersonal.promocion) + parseInt(FormPersonal.vestimenta) + parseInt(FormPersonal.salud) + parseInt(FormPersonal.otros);
    return total ? 'llenar los campos' : total;
  }
  console.log(devolverTotal());
  function buttonPress() {
    if (
      impuestos == '' ||
      alimentacion == '' ||
      luz == '' ||
      agua == '' ||
      gas == '' ||
      celular == '' ||
      internet == '' ||
      alquiler == '' ||
      transporte == '' ||
      escritorio == '' ||
      empleados == '' ||
      promocion == '' ||
      vestimenta == '' ||
      salud == ''||
      otros==''
    ) {
      Alert.alert('Error','Error campo vacío');
    } else {
      navigation.navigate('MargenBruto', { mub, ventas_anuales, costos_anuales, total, montoFin });
    }
  }

  let total = devolverTotal();

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
            base: '100%',
            md: '25%',
          }}>
          <Box>
            <FormControl mb="5">
              <FormControl.Label>Impuestos(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={impuestos}
                onChangeText={value => EstadoInputs(value, 'impuestos')}
              />
              <FormControl.Label>Alimentación(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={alimentacion}
                onChangeText={value => EstadoInputs(value, 'alimentacion')}
              />
              <FormControl.Label>Servicio de Luz(*)</FormControl.Label>
              <Input
                variant="rounded"
                value={luz}
                onChangeText={value => EstadoInputs(value, 'luz')}
                keyboardType="numeric"
              />
              <FormControl.Label>Servicio de Agua(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={agua}
                onChangeText={value => EstadoInputs(value, 'agua')}
              />
              <FormControl.Label>Servicio de Gas(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={gas}
                onChangeText={value => EstadoInputs(value, 'gas')}
              />
              <FormControl.Label>
                Servicio de Telefono/Celular(*)
              </FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={celular}
                onChangeText={value => EstadoInputs(value, 'celular')}
              />
              <FormControl.Label>Servicio de Internet(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={internet}
                onChangeText={value => EstadoInputs(value, 'internet')}
              />
              <FormControl.Label>Alquiler(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={alquiler}
                onChangeText={value => EstadoInputs(value, 'alquiler')}
              />
              <FormControl.Label>Transporte(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={transporte}
                onChangeText={value => EstadoInputs(value, 'transporte')}
              />
              <FormControl.Label>Material de Escritorio(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={escritorio}
                onChangeText={value => EstadoInputs(value, 'escritorio')}
              />
              <FormControl.Label>Pago a Empleados(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={empleados}
                onChangeText={value => EstadoInputs(value, 'empleados')}
              />
              <FormControl.Label>Promoción(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={promocion}
                onChangeText={value => EstadoInputs(value, 'promocion')}
              />
              {'\n'}
              <Divider />
              <FormControl.Label>Vestimenta(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={vestimenta}
                onChangeText={value => EstadoInputs(value, 'vestimenta')}
              />
              <FormControl.Label>Salud(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={salud}
                onChangeText={value => EstadoInputs(value, 'salud')}
              />
              <FormControl.Label>Otros(*)</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={otros}
                onChangeText={value => EstadoInputs(value, 'otros')}
              />
            </FormControl>
            <Divider />
            <FormControl.Label>Total: {total} Bs.</FormControl.Label>
          </Box>
          <Text>Los campos con (*) son obligatorios</Text>
          <Button colorScheme="primary" onPress={buttonPress}>
            Siguiente
          </Button>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default CostosOperativos;