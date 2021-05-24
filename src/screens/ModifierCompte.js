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
  nomValidator,
  prenomValidator,
  mailValidator,
  idValidator,
  passwordValidator,
} from '../helpers/validators'
import {useNavigation} from '@react-navigation/native'

export default function ModifierCompte() {
    const navigation= useNavigation(); 
  const [nom, setnom] = useState({ value: '', error: '' })
  const [prenom, setprenom] = useState({ value: '', error: '' })
  const [mail, setmail] = useState({ value: '', error: '' })
  const [password1, setpassword1] = useState({ value: '', error: '' })
  const [password2, setpassword2] = useState({ value: '', error: '' })
  
  
  
  const onSignUpPressed = () => {
    const nomError = nomValidator(nom.value)
    const prenomError = prenomValidator(prenom.value)
    const mailError = mailValidator(mail.value)
    
    const password1Error = passwordValidator(password1.value)
    const password2Error = passwordValidator(password2.value)
   
   

    if (nomError || prenomError || mailError ||password1Error||password2Error) {
      setnom({ ...nom, error: essenceError })
      setprenom({ ...prenom, error: ageError })
      setmail({ ...mail, error: c1Error })
      setpassword1({ ...password1, error: hauteur_totaleError })
      setpassword2({ ...password2, error: hauteur_totaleError })
      
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    
      
    <Background>
   
   <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 25}]}>Informations Du Compte</Text>
                   
                </View>
        
          <TextInput
            label="Nom"
            returnKeyType="next"
            value={nom.value}
            onChangeText={(text) => setnom({ value: text, error: '' })}
            error={!!nom.error}
            errorText={nom.error}
          />
          <TextInput
            label="Prenom "
            returnKeyType="next"
            value={prenom.value}
            onChangeText={(text) => setprenom({ value: text, error: '' })}
            error={!!prenom.error}
            errorText={prenom.error}
          />
            <TextInput
        label="E-mail"
        returnKeyType="next"
        value={mail.value}
        onChangeText={(text) => setmail({ value: text, error: '' })}
        error={!!mail.error}
        errorText={mail.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
          
      <TextInput
        label="Ancien Mot de Passe"
        returnKeyType="done"
        value={password1.value}
        onChangeText={(text) => setpassword1({ value: text, error: '' })}
        error={!!password1.error}
        errorText={password1.error}
        secureTextEntry
      />
      <TextInput
        label=" Nouveau Mot de Passe"
        returnKeyType="done"
        value={password2.value}
        onChangeText={(text) => setpassword2({ value: text, error: '' })}
        error={!!password2.error}
        errorText={password2.error}
        secureTextEntry
      />   
       
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Modifier
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