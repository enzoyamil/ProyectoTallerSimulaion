import Reporte from "../Components/Reporte";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getReporte(nombre) {
    const local = await AsyncStorage.getItem(nombre);
    // console.log(local,"getReporte");
    return JSON.parse(local);
}

export async function iniReporte(nombre) {
    const local = await AsyncStorage.getItem(nombre);
    if (!local) {
        await AsyncStorage.setItem(nombre, JSON.stringify(Reporte));
    }
}

export async function setReporteLocal(nombre, obj) {
    await AsyncStorage.setItem(nombre, JSON.stringify(obj));
}

export async function clearReporte(nombre) {
    await AsyncStorage.setItem(nombre, JSON.stringify(Reporte));
}