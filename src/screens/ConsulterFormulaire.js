import React, { useState } from 'react'
import { View, StyleSheet,TouchableOpacity,ScrollView, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Button from '../components/Button'
import { theme } from '../core/theme'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native';
import { DatabaseConnection } from '../helpers/database'

export default function ConsulterFormulaire() {
  //date format in DB: 17-6-2021 (DD-MM-YYYY)
  // Date format given by date picker: 2021-06-17 (YYYY-MM-DD)
  const [pickerMode, setPickerMode] = useState(null);
  const showDatePicker = () => {
    setPickerMode("date");
  };

  const hidePicker = () => {
    setPickerMode(null);
  };
  let dateChosen;
  const handleConfirm = async (date) => {
    // In order to prevent the double-shown popup bug on Android, picker has to be hidden first (https://github.com/react-native-datetimepicker/datetimepicker/issues/54#issuecomment-618776550)
    hidePicker();
    var res = date.toISOString().slice(0,10).split("-")
    var d= res[2]+'-'+res[1]+'-'+res[0]
    console.log("res: ", d)


    const fetchRes= await fetch('http://192.168.1.35:3000/date-search/')
    const results= await fetchRes.json()
    if(results.length===0){
      alert("aucun resultat n'a été activé")
    }else{
      navigation.navigate('ResultatDate',{
          results: results,
      })
    }
  };

  const navigation= useNavigation();
  const onNamePress= ()=>{
    navigation.reset({
      index: 0,
      routes: [{ name: 'ResultatDate' }],
    })
  }

  return (
    <Background>
   
   <View style={styles.infoContainer}>
      <Text style={[styles.text, { fontWeight: "200", fontSize: 22}]}> Type de Recherche</Text>                 
   </View>  
       
      <Button
        mode="contained"
        onPress={showDatePicker}
        style={{ marginTop: 24 }}
      >
        recherche par date
      </Button>
      <DateTimePickerModal
        isVisible={pickerMode !== null}
        mode={pickerMode}
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />

      <Button
        mode="contained"
        onPress={onNamePress}
        style={{ marginTop: 24 }}
      >
        recherche par nom
      </Button>
     
      

      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
        </TouchableOpacity>
      </View>
     
    </Background>
  
    

  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})