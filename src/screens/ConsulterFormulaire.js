import React, { useState } from 'react'
import { View, StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Button from '../components/Button'
import { theme } from '../core/theme'
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function ConsulterFormulaire({ navigation }) {
  const [pickerMode, setPickerMode] = useState(null);
  const showDatePicker = () => {
    setPickerMode("date");
  };

  const hidePicker = () => {
    setPickerMode(null);
  };

  const handleConfirm = (date) => {
    // In order to prevent the double-shown popup bug on Android, picker has to be hidden first (https://github.com/react-native-datetimepicker/datetimepicker/issues/54#issuecomment-618776550)
    hidePicker();
    console.warn("A date has been picked: ", date);
  };

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
        onPress={showDatePicker}
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