import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
// import { NativeBaseProvider, Box,Button } from 'native-base';
import {
  FormControl,
  Button,
  Input,
  Stack,
  Text,
  ScrollView,
  Divider,
  Box,
  WarningOutlineIcon,
  Center,
  NativeBaseProvider,
  Select,
} from 'native-base';
import { tamanioMaximo, tamanioMin, sinCaractEsp } from '../helpers/Validation';
import { DataTable } from 'react-native-paper';


function CostosOperativos(props) {
  const { navigation, route } = props;
  const { mub, ventas_anuales, costos_anuales,montoFin } = route.params;
  const [FormPersonal, setFormPersonal] = useState({
    impuestos: '',
    alimentacion: '',
    luz: '',
    agua: '',
    gas: '',
    celular: '',
    internet: '',
    alquiler: '',
    transporte: '',
    escritorio: '',
    empleados: '',
    promocion: '',
  }); //estado inicial de usestate nullo.
  //sconsole.log(FormPersonal);

  //let valor1 = props.route.params;

  function EstadoInputs(value, input) {
    setFormPersonal({ ...FormPersonal, [input]: value });
    console.log(FormPersonal);
  }

  function devolverTotal() {
    //total = FormPersonal.impuestos + FormPersonal.alimentacion + FormPersonal.luz + FormPersonal.agua + FormPersonal.gas + FormPersonal.celular + FormPersonal.internet + FormPersonal.alquiler + FormPersonal.transporte + FormPersonal.escritorio + FormPersonal.empleados + FormPersonal.promocion + FormPersonal.vestimenta + FormPersonal.salud + FormPersonal.otros
    let total = parseInt(FormPersonal.impuestos) + parseInt(FormPersonal.alimentacion) + parseInt(FormPersonal.luz) + parseInt(FormPersonal.agua) + parseInt(FormPersonal.gas) + parseInt(FormPersonal.celular) + parseInt(FormPersonal.internet) + parseInt(FormPersonal.alquiler) + parseInt(FormPersonal.transporte) + parseInt(FormPersonal.escritorio) + parseInt(FormPersonal.empleados) + parseInt(FormPersonal.promocion) + parseInt(FormPersonal.vestimenta) + parseInt(FormPersonal.salud) + parseInt(FormPersonal.otros);
    return isNaN(total) ? 'llenar los campos' : total;
  }

  let total = devolverTotal()

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
      salud == '' ||
      otros == ''
    ) {
      console.log(impuestos);
      Alert.alert('error campo vacio');
    } else if (tamanioMaximo(impuestos, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(impuestos, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(alimentacion, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(alimentacion, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(luz, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(luz, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(agua, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(agua, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(gas, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(gas, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(celular, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(celular, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(internet, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(internet, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(alquiler, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(alquiler, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(transporte, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(transporte, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(escritorio, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(escritorio, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(empleados, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(empleados, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(promocion, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(promocion, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(vestimenta, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(vestimenta, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(salud, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(salud, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else if (tamanioMaximo(otros, 15)) {
      Alert.alert('cadena nombre muy grande');
    } else if (tamanioMin(otros, 1)) {
      Alert.alert('cadena nombre muy pequeña');
    } else {
      Alert.alert('succesfull');
      console.log('here');
      console.log(props)
      navigation.navigate('MargenBruto', { mub, ventas_anuales, costos_anuales, total,montoFin });
    }
  }

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
  //let [service, setService] = React.useState(0);
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
              <FormControl.Label>Impuestos</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={impuestos}
                onChangeText={value => EstadoInputs(value, 'impuestos')}
              />
              <FormControl.Label>Alimentación</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={alimentacion}
                onChangeText={value => EstadoInputs(value, 'alimentacion')}
              />
              <FormControl.Label>Servicio de Luz</FormControl.Label>
              <Input
                variant="rounded"
                value={luz}
                onChangeText={value => EstadoInputs(value, 'luz')}
                keyboardType="numeric"
              />
              <FormControl.Label>Servicio de Agua</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={agua}
                onChangeText={value => EstadoInputs(value, 'agua')}
              />
              <FormControl.Label>Servicio de Gas</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={gas}
                onChangeText={value => EstadoInputs(value, 'gas')}
              />
              <FormControl.Label>
                Servicio de Telefono/Celular
              </FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={celular}
                onChangeText={value => EstadoInputs(value, 'celular')}
              />
              <FormControl.Label>Servicio de Internet</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={internet}
                onChangeText={value => EstadoInputs(value, 'internet')}
              />
              <FormControl.Label>Alquiler</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={alquiler}
                onChangeText={value => EstadoInputs(value, 'alquiler')}
              />
              <FormControl.Label>Transporte</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={transporte}
                onChangeText={value => EstadoInputs(value, 'transporte')}
              />
              <FormControl.Label>Material de Escritorio</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={escritorio}
                onChangeText={value => EstadoInputs(value, 'escritorio')}
              />
              <FormControl.Label>Pago a Empleados</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={empleados}
                onChangeText={value => EstadoInputs(value, 'empleados')}
              />
              <FormControl.Label>Promoción</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={promocion}
                onChangeText={value => EstadoInputs(value, 'promocion')}
              />
              {'\n'}
              <Divider />
              <FormControl.Label>Vestimenta</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={vestimenta}
                onChangeText={value => EstadoInputs(value, 'vestimenta')}
              />
              <FormControl.Label>Salud</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={salud}
                onChangeText={value => EstadoInputs(value, 'salud')}
              />
              <FormControl.Label>Otros</FormControl.Label>
              <Input
                keyboardType="numeric"
                variant="rounded"
                value={otros}
                onChangeText={value => EstadoInputs(value, 'otros')}
              />
            </FormControl>
            <Divider />

            {/* tabla */}
            {/* <DataTable>
              <DataTable.Row>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell></DataTable.Cell>
              </DataTable.Row>
            </DataTable> */}

            <FormControl.Label>Total: {total}</FormControl.Label>
          </Box>
          <Button colorScheme="primary" onPress={buttonPress}>
            Siguiente
          </Button>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
export default CostosOperativos;
//style={estilos.texto}
const estilos = new StyleSheet.create({
  texto: {
    backgroundColor: '',
  },
  fondo: {
    backgroundColor: 'red',
  },
});
