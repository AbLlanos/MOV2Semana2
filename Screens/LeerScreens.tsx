import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database';
import { db } from '../Firebase/Config';


export default function LeerScreens() {

  const [datos, setdatos] = useState([])

  const [cedula, setcedula] = useState("")



  function leer() {
    const starCountRef = ref(db, 'usuarios/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let arreglo: any = Object.keys(data).map((cedula) => ({
        cedula,
        ...data[cedula]
      }));

      setdatos(arreglo);
      console.log(datos);
    });
  }

  useEffect(() => {
    leer()
  }, [])

  type Usuario = {
    cedula: string;
    age: number;
    email: string;
    user: string;
  };

  useEffect(() => {
    
  

  }, [])
  



  return (
    <View>
      <Text>LeerScreens</Text>

      <Button title='Revisar'></Button>

      <FlatList
        data={datos}
        renderItem={({ item }: { item: Usuario }) =>
          <View>
            <Text>{item.user} </Text>
            <Text>{item.age} </Text>
            <Text>{item.email} </Text>
          </View>
        }>


      </FlatList>


    </View>
  )
}

const styles = StyleSheet.create({})