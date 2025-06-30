import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, update } from 'firebase/database'
import { db } from '../Firebase/Config'

export default function EditarScreens() {
  const [cedula, setcedula] = useState("")
      const [nombre, setnombre] = useState("")
      const [edad, setedad] = useState(0)
      const [correo, setcorreo] = useState("")
  
  
  
      //Primero la clave y leugo el valor
      //set es post
  
      function editar() {
          //const db = getDatabase();
          update(ref(db, 'usuarios/' + cedula), {
              user: nombre,
              age:edad,
              email: correo,
          });
      }
  
      return (
          <View style={styles.container}>
              <Text>Editar</Text>
  
              <TextInput placeholder="Ingrese se cedula"
                  onChangeText={(texto) => setcedula(texto)}
                  style={styles.input} />
  
              <TextInput placeholder="Ingresar Nombre"
                  onChangeText={(texto) => setnombre(texto)}
                  style={styles.input} />
  
              <TextInput placeholder="Ingresar Edad"
                  onChangeText={(texto) => setedad(+texto)}
                  style={styles.input} />
  
              <TextInput placeholder="Ingresar Correo"
                  onChangeText={(texto) => setcorreo(texto)}
                  style={styles.input} />
  
  
              <Button title="Guardar" onPress={()=>editar()} />
  
  
          </View>
  
  
      );
  }
  
  const styles = StyleSheet.create({
      input: {
          backgroundColor: "rgb(255, 125, 65)",
          fontSize: 30,
          margin: 5,
          width:"90%",
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