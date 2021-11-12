import React from "react";
import { NativeBaseProvider, Box, Text } from 'native-base'


function Cabecera() {
    return (
        <NativeBaseProvider>
            <Box 
                _text={{
                    fontSize: 'md',
                    fontWeight: 'medium',
                    color: 'white',
                    textAlign: 'center',
                }}>
                Plan de negocios FOCASE
            </Box>
        </NativeBaseProvider>

    );
}
export default Cabecera;