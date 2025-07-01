import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database';
import { db } from '../Firebase/Config';


export default function LeerScreens() {

  const [datos, setdatos] = useState([])

  const [cedula, setcedula] = useState("")


  //Traer varios datos

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

  //Funcion para traer solo un dato

  function leer2() {
    const starCountRef = ref(db, 'usuarios/' + cedula);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
        console.log(data);
        Alert.alert("Nombre",data.user)
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


  return (
    <View>
      <Text>LeerScreens</Text>

      <View>
        <TextInput
        onChangeText={(texto)=>setcedula(texto)}
        placeholder='cedula'
        >

        </TextInput>

              <Button title='Revisar' onPress={()=>leer2()}></Button>
      </View>


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