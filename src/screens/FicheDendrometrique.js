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
  demascleeValidator,
  codeValidator,
  essenceValidator,
  classeValidator,
  CMValidator,
} from '../helpers/validators'

import { useNavigation } from '@react-navigation/native';

export default function FicheDendrometrique() {
  console.log('nice')
  const navigation= useNavigation();
  const [essence, setessence] = useState({ value: '', error: '' })
  const [demasclee, setdemasclee] = useState({ value: '', error: '' })
  const [code, setcode] = useState({ value: '', error: '' })
  const [classe, setclasse] = useState({ value: '', error: '' })
  const [CM, setCM] = useState({ value: '', error: '' })
  
  
  const onSuivantPressed = () => {
    /*const essenceError = essenceValidator(essence.value)
    const demascleeError = demascleeValidator(demasclee.value)
    const codeError = codeValidator(code.value)
    const classeError = classeValidator(classe.value)
    const CMError = CMValidator(CM.value)


    if (essenceError || demascleeError || codeError ||classeError ||CMError) {
      setessence({ ...essence, error: essenceError })
      setdemasclee({ ...demasclee, error: demascleeError })
      setcode({ ...code, error: codeError })
      setclasse({ ...classe, error: classeError })
      setCM({ ...CM, error: CMError })
      return
    }*/
    navigation.reset({
      index: 0,
      routes: [{ name: 'FicheArbreDominant' }],
    })
  }

  return (
    <ScrollView>
    <Background>
       <View style = {{alignItems: 'center'}}>

         <Text style={{fontSize: 28, fontWeight:"bold"}}>DESCRIPTION & MESURE</Text>
         <Text style={{fontSize: 15, fontWeight:"bold"}}>DESCRIPTION DENDROMETRIQUE</Text>
      </View>
          <TextInput
            label="Démasclée 1"
            returnKeyType="next"
            value={demasclee.value}
            onChangeText={(text) => setdemasclee({ value: text, error: '' })}
            error={!!demasclee.error}
            errorText={demasclee.error}
          />
          <TextInput
            label="Démasclée 2"
            returnKeyType="next"
            value={demasclee.value}
            onChangeText={(text) => setdemasclee({ value: text, error: '' })}
            error={!!demasclee.error}
            errorText={demasclee.error}
          />
          <TextInput
            label="Démasclée 3"
            returnKeyType="next"
            value={demasclee.value}
            onChangeText={(text) => setdemasclee({ value: text, error: '' })}
            error={!!demasclee.error}
            errorText={demasclee.error}
          />
           
           <TextInput
            label="Code 1"
            returnKeyType="next"
            value={code.value}
            onChangeText={(text) => setcode({ value: text, error: '' })}
            error={!!code.error}
            errorText={code.error}
          />
          <TextInput
            label="Code 2"
            returnKeyType="next"
            value={code.value}
            onChangeText={(text) => setcode({ value: text, error: '' })}
            error={!!code.error}
            errorText={code.error}
          />
          <TextInput
            label="Code 3"
            returnKeyType="next"
            value={code.value}
            onChangeText={(text) => setcode({ value: text, error: '' })}
            error={!!code.error}
            errorText={code.error}
          />
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
            label="CM Essence 1"
            returnKeyType="next"
            value={essence.value}
            onChangeText={(text) => setessence({ value: text, error: '' })}
            error={!!essence.error}
            errorText={essence.error}
          />
            <TextInput
            label="CM Essence 2"
            returnKeyType="next"
            value={essence.value}
            onChangeText={(text) => setessence({ value: text, error: '' })}
            error={!!essence.error}
            errorText={essence.error}
          />
            <TextInput
            label="CM Essence 3"
            returnKeyType="next"
            value={essence.value}
            onChangeText={(text) => setessence({ value: text, error: '' })}
            error={!!essence.error}
            errorText={essence.error}
          />
         
          <TextInput
            label="Classe 1"
            returnKeyType="next"
            value={classe.value}
            onChangeText={(text) => setclasse({ value: text, error: '' })}
            error={!!classe.error}
            errorText={classe.error}
          />
          
          <TextInput
            label="Classe 2"
            returnKeyType="next"
            value={classe.value}
            onChangeText={(text) => setclasse({ value: text, error: '' })}
            error={!!classe.error}
            errorText={classe.error}
          />
          <TextInput
            label="Classe 3"
            returnKeyType="next"
            value={classe.value}
            onChangeText={(text) => setclasse({ value: text, error: '' })}
            error={!!classe.error}
            errorText={classe.error}
          />
         
          
            
      <Button
        mode="contained"
        onPress={onSuivantPressed}
        style={{ marginTop: 24 }}
      >
        Suivant
      </Button>
      

      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
        </TouchableOpacity>
      </View>
     
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