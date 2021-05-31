import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { DatabaseConnection } from '../helpers/database'
import { getValueFor, save } from '../helpers/saveItems'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    console.log('http://192.168.0.144:3000/login/'+email.value+'/'+password.value)
    fetch('http://192.168.0.144:3000/login/'+email.value+'/'+password.value)
    .then(res => {JSON.stringify(res)})
    .then(results => {
      console.log("results", results)
    })
    .catch(error=> console.log(error))
   /* DatabaseConnection.getConnection().then((db)=>{
      console.log('db get connection: ', db)
    })

    DatabaseConnection.getAuth(email.value, password.value).then((len) => {
      if(len>0){
        // saveItems("11", email.value);
        save("11", email.value);
        getValueFor('11');
        console.log(len);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      }else{
        alert('mot de passe ou email est incorrect')
      }
    })*/
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Mot de Passe"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Mot De Passe Oublié ?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Se Connecter
      </Button>
      <View style={styles.row}>
        <Text>Vous N'avez Pas Un Compte? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    
  },
  forgot: {
    fontSize: 13,
    color: 'red',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})