import * as React from 'react'
import {TouchableOpacity, Image, View, Text, StyleSheet, Dimensions, ScrollView,Alert, LogBox } from 'react-native'
import Button from '../components/Button'
// Packages
import { SharedElement } from 'react-navigation-shared-element';
import openMap from 'react-native-open-maps';
import { createOpenLink } from 'react-native-open-maps';
import { useNavigation } from '@react-navigation/native';


// Icons

import {Feather} from '@expo/vector-icons'
const supprimerForm = () =>
Alert.alert(
  "Voulez-vous Vraiment Supprimer Ce Formulaire ?",
  "",
  [
    {
      text: "NON",
      onPress: () =>{
        console.log("Cancel Pressed")
        
      },
      style: "cancel"
    },
    { text: "OUI", onPress: async () => {
      const response= await fetch('http://192.168.0.144:3000/delete-forms')
        console.log(JSON.stringify(response))
    } }
  ]
);


export default function DetailResultatDate (props) {

LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
]);
    const navigation= useNavigation();

    fetch('http://192.168.0.144:3000/localisation').then(rows=>{
      rows.json();
    }).then(results=>{

      const loc = { latitude: results.latitude, longitude: results.longtitude,zoom: 30 };
      const openloc = createOpenLink(loc)
    })
    
    const {width,height} = Dimensions.get('window')

    const { data } = props.route.params;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>

      <View>

      <SharedElement id={`item.${data.id}.image`}>
        <Image source={ data.image} style={{width: '100%', height: height - 450, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}} resizeMode="cover"/>
      </SharedElement>

      <View style={{flexDirection: 'row',alignItems: 'center',position: 'absolute', bottom: 14, left: 10 }}>

      <SharedElement id={`item.${data.id}.profilePic`}>
        <Image
        source={{uri: data.profilePic}} 
        style={{width: 60, height: 60, borderRadius: 10, marginRight: 14}}
        resizeMode="cover"
        />
    </SharedElement>

    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20}}>
    </View>

      </View>

      </View>

     <ScrollView style={{paddingHorizontal: 10, paddingTop: 14}}>
     
     <SharedElement id={`item.${data.id}.text`} style={{ width: width - 30, marginBottom: 14}}>
        <Text style={{color: 'black', fontSize: 22,fontWeight: 'bold', lineHeight: 32}}>{data.title}</Text>
     </SharedElement>
  

    <Text style={{fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5}}></Text>   

    <View style={{marginVertical: 10, paddingBottom: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

        <TouchableOpacity>
            
        <Button mode="contained" onPress={openloc} color="#00B386">
        Consulter Position
      </Button>   
      <Button mode="contained" onPress={() => navigation.push('FicheLocalisation', {data: props})} color="#00B386">
            Modifier Formulaire
          </Button>   
          <Button mode="contained" onPress={supprimerForm} color="#00B386">
            Supprimer Formulaire
          </Button> 
        </TouchableOpacity>
    </View> 
    
    </ScrollView>

    <View style={{position: 'absolute', top: 40, left: 10}}>

    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Feather name='arrow-left' size={30} color='black' />
     </TouchableOpacity>

    </View>
    
    </View>  
    );
  };
