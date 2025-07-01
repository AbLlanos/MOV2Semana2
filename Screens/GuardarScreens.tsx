import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
//FIREBASE
import { getDatabase, ref, set } from "firebase/database";
import { db } from "../Firebase/Config";

export default function GuardarScreens() {
    const [cedula, setcedula] = useState("")
    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [correo, setcorreo] = useState("")

    //Primero la clave y leugo el valor

    function guardar() {
        //const db = getDatabase();
        set(ref(db, 'usuarios/' + cedula), {
            user: nombre,
            age: edad,
            email: correo,
        })
        limpiar();
        Alert.alert("Elementos guardados", "Se ha registrado con éxito");
    }





    function limpiar() {
        setcedula("");
        setnombre("");
        setedad(0);
        setcorreo("");
    }

    return (
        <View style={styles.container}>
            <Text>Guardar</Text>

            <TextInput
                placeholder="Ingrese se cedula"
                onChangeText={(texto) => setcedula(texto)}
                value={cedula}
                style={styles.input}
            />

            <TextInput
                placeholder="Ingresar Nombre"
                onChangeText={(texto) => setnombre(texto)}
                value={nombre}
                style={styles.input}
            />

            <TextInput
                placeholder="Ingresar Edad"
                onChangeText={(texto) => setedad(+texto)}
                value={edad.toString()}
                style={styles.input}
            />

            <TextInput
                placeholder="Ingresar Correo"
                onChangeText={(texto) => setcorreo(texto)}
                value={correo}
                style={styles.input}
            />


            <Button title="Guardar" onPress={() => guardar()} />


        </View>


    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "rgb(255, 190, 12)",
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
