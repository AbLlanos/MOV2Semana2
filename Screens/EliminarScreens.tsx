import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, remove } from 'firebase/database';
import { db } from '../Firebase/Config';

export default function EliminarScreens() {


  const [cedula, setcedula] = useState("")



  function eliminar() {
    remove(ref(db, 'usuarios/' + cedula));
  }



  function confirmar() {

    Alert.alert("Confirmcion", "Esta seguro?" , [
      {
        text: "Confirmar",
        onPress: () => eliminar()
      },
      {
        text: "Cancelar"
      }
    ])
  }

  return (
    <View>
      <Text>EliminarScreens</Text>
      <TextInput
        placeholder='Ingrese la cedula'
        style={styles.input}
        onChangeText={(texto) => setcedula(texto)}
      />



      <Button title="Eliminar" color={"red"} onPress={() => confirmar()}></Button>


    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgb(122, 228, 255)",
    fontSize: 30,
    margin: 5,
    width: "90%",
    textAlign: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});