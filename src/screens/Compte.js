import React, { useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { DatabaseConnection } from '../helpers/database'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Compte() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [id, setId]= useState('');
    const navigation = useNavigation();

    /*DatabaseConnection.compteInfo().then((rows)=>{
        setNom(rows._array[0].nom); setPrenom(rows._array[0].prenom); setId(rows._array[0].id_employe);
    })*/

    try{
        AsyncStorage.getItem('userData').then((jsonValue)=>{
            const res= JSON.parse(jsonValue)
            setNom(res[0].nom); setPrenom(res[0].prenom); setId(res[0].id_employe);
        })
    }catch(err){
        console.error('compte fe: ', err)
    }
    return (
        <Background>
            <View style={{ alignSelf: "center" }}>
                <View style={styles.profileImage}>
                    <Image source={require("../assets/logo.png")} style={styles.image} resizeMode="center"></Image>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{prenom.toUpperCase()} {nom.toUpperCase()} </Text>
                <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{id}</Text>
            </View>
            <View style={styles.statsContainer}>        
                <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                    <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                    <Text style={[styles.text, styles.subText]}>Fiche Inventaire</Text>
                </View>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                    <Text style={[styles.text, styles.subText]}>Following</Text>
                </View>
            </View>
            <View style={styles.space}/>
            <Button mode="contained" onPress={() => navigation.navigate('ModifierCompte')}>
                Modifier Compte
            </Button>
            <Button
                mode="contained"
                onPress={async () => {
                    DatabaseConnection.compteInfo().then((rows)=>{
                        console.log('compte: ', rows)
                    })
                    navigation.navigate('RegisterScreen')
                }}
            >
                Se deconnecter
            </Button>
        </Background>
    )
}
const styles = StyleSheet.create({
    Red: {
        color: '#F44336',
        fontStyle: 'italic'
    },
    black: {
        color: '#000000',
    },

    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "black"
    },
    image: {
        flex: 3,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 300,
        overflow: "hidden"
    },

    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 19
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    space: {
    width: 20, // or whatever size you need
    height: 45,
  },
});