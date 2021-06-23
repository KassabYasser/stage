import React, { useState } from 'react'
import { View, StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import {
  essenceValidator,
  c1Validator,
  ageValidator,
  hauteur_totaleValidator,
} from '../helpers/validators'

import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FicheArbreDominant() {
  const navigation= useNavigation();
  const [essence, setessence] = useState({ value: '', error: '' })
  const [c1, setc1] = useState({ value: '', error: '' })
  const [age, setage] = useState({ value: '', error: '' })
  const [hauteur_totale, sethauteur_totale] = useState({ value: '', error: '' })
  
  const onSignUpPressed = async () => {
    const essenceError = essenceValidator(essence.value)
    const ageError = ageValidator(age.value)
    const c1Error = c1Validator(c1.value)
    const hauteur_totaleError = hauteur_totaleValidator(hauteur_totale.value)

    if (essenceError || ageError || c1Error ||hauteur_totaleError) {
      setessence({ ...essence, error: essenceError })
      setage({ ...age, error: ageError })
      setc1({ ...c1, error: c1Error })
      sethauteur_totale({ ...hauteur_totale, error: hauteur_totaleError })
      
      return
    }

    const FicheDominantData= {
      essence: essence.value,
      c1: c1.value,
      age: age.value,
      hauteur_totale: hauteur_totale.value,
    }

    try {
        const DominantJson = JSON.stringify(FicheDominantData)
        await AsyncStorage.setItem('FicheDominantData', DominantJson)
    } catch (error) {
        console.error(error)
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'FicheArbreEchantillont' }],
    })
  }

  return (
    <ScrollView>
    <Background>
       <View style = {{alignItems: 'center'}}>

         <Text style={{fontSize: 28, fontWeight:"bold"}}>TYPE D'ARBRE</Text>
         <Text style={{fontSize: 15, fontWeight:"bold"}}>ARBRES DOMINANTES</Text>
      </View>
          <TextInput
            label="Essence 1"
            returnKeyType="next"
            value={essence.value}
            onChangeText={(text) => setessence({ value: text, error: '' })}
            error={!!essence.error}
            errorText={essence.error}
          />
          <TextInput
            label="Essence 2"
            returnKeyType="next"
            value={essence.value}
            onChangeText={(text) => setessence({ value: text, error: '' })}
            error={!!essence.error}
            errorText={essence.error}
          />
           <TextInput
            label="Essence 3"
            returnKeyType="next"
            value={essence.value}
            onChangeText={(text) => setessence({ value: text, error: '' })}
            error={!!essence.error}
            errorText={essence.error}
          />
            <TextInput
            label="Essence 4"
            returnKeyType="next"
            value={essence.value}
            onChangeText={(text) => setessence({ value: text, error: '' })}
            error={!!essence.error}
            errorText={essence.error}
          />
            <TextInput
            label="Essence 5"
            returnKeyType="next"
            value={essence.value}
            onChangeText={(text) => setessence({ value: text, error: '' })}
            error={!!essence.error}
            errorText={essence.error}
          />
         
           
           <TextInput
            label="Age 1 (ans)"
            returnKeyType="next"
            value={age.value}
            onChangeText={(text) => setage({ value: text, error: '' })}
            error={!!age.error}
            errorText={age.error}
          />
           <TextInput
            label="Age 2 (ans)"
            returnKeyType="next"
            value={age.value}
            onChangeText={(text) => setage({ value: text, error: '' })}
            error={!!age.error}
            errorText={age.error}
          />
           <TextInput
            label="Age 3 (ans)"
            returnKeyType="next"
            value={age.value}
            onChangeText={(text) => setage({ value: text, error: '' })}
            error={!!age.error}
            errorText={age.error}
          />
           <TextInput
            label="Age 4 (ans)"
            returnKeyType="next"
            value={age.value}
            onChangeText={(text) => setage({ value: text, error: '' })}
            error={!!age.error}
            errorText={age.error}
          />
           <TextInput
            label="Age 5 (ans)"
            returnKeyType="next"
            value={age.value}
            onChangeText={(text) => setage({ value: text, error: '' })}
            error={!!age.error}
            errorText={age.error}
          />
           
           
          
           <TextInput
            label="C à 1.30 m (cm) 1"
            returnKeyType="next"
            value={c1.value}
            onChangeText={(text) => setc1({ value: text, error: '' })}
            error={!!c1.error}
            errorText={c1.error}
          />
           <TextInput
            label="C à 1.30 m (cm) 2"
            returnKeyType="next"
            value={c1.value}
            onChangeText={(text) => setc1({ value: text, error: '' })}
            error={!!c1.error}
            errorText={c1.error}
          />
           <TextInput
            label="C à 1.30 m (cm) 3"
            returnKeyType="next"
            value={c1.value}
            onChangeText={(text) => setc1({ value: text, error: '' })}
            error={!!c1.error}
            errorText={c1.error}
          />
            <TextInput
            label="C à 1.30 m (cm) 4"
            returnKeyType="next"
            value={c1.value}
            onChangeText={(text) => setc1({ value: text, error: '' })}
            error={!!c1.error}
            errorText={c1.error}
          />
            <TextInput
            label="C à 1.30 m (cm) 5"
            returnKeyType="next"
            value={c1.value}
            onChangeText={(text) => setc1({ value: text, error: '' })}
            error={!!c1.error}
            errorText={c1.error}
          />
        
            <TextInput
            label="Hauteur Totale (m) 1"
            returnKeyType="next"
            value={hauteur_totale.value}
            onChangeText={(text) => sethauteur_totale({ value: text, error: '' })}
            error={!!hauteur_totale.error}
            errorText={hauteur_totale.error}
          />
           <TextInput
            label="Hauteur Totale (m) 2"
            returnKeyType="next"
            value={hauteur_totale.value}
            onChangeText={(text) => sethauteur_totale({ value: text, error: '' })}
            error={!!hauteur_totale.error}
            errorText={hauteur_totale.error}
          />
           <TextInput
            label="Hauteur Totale (m) 3"
            returnKeyType="next"
            value={hauteur_totale.value}
            onChangeText={(text) => sethauteur_totale({ value: text, error: '' })}
            error={!!hauteur_totale.error}
            errorText={hauteur_totale.error}
          />
            <TextInput
            label="Hauteur Totale (m) 4"
            returnKeyType="next"
            value={hauteur_totale.value}
            onChangeText={(text) => sethauteur_totale({ value: text, error: '' })}
            error={!!hauteur_totale.error}
            errorText={hauteur_totale.error}
          />
            <TextInput
            label="Hauteur Totale (m) 5"
            returnKeyType="next"
            value={hauteur_totale.value}
            onChangeText={(text) => sethauteur_totale({ value: text, error: '' })}
            error={!!hauteur_totale.error}
            errorText={hauteur_totale.error}
          />
           
       
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Suivant
      </Button>
      
     
    </Background>
    </ScrollView>
    

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