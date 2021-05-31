import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
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
import { nameValidator } from '../helpers/nameValidator'
import { idValidator } from '../helpers/idValidator'
import { DatabaseConnection } from '../helpers/database'
import * as Crypto from 'expo-crypto';
// const db= DatabaseConnection.getConnection();

async function encryptPassword(password) {
    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.MD5,
      password
    );
    console.log('Digest: ', digest);
}

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password1, setPassword1] = useState({ value: '', error: '' })
  const [password2, setPassword2] = useState({ value: '', error: '' })
  const [id, setid] = useState({ value: '', error: '' })

  const onRegisterPressed = () => {
    if(password1.value!== password2.value){
      alert('les mots de passes ne sont pas corrects');
      return
    }
    const emailError = emailValidator(email.value)
    const passwordError1 = passwordValidator(password1.value)
    const passwordError2 = passwordValidator(password2.value)
    const idError = idValidator(id.value)
    if (emailError || passwordError1 || passwordError2 || idError) {
      setEmail({ ...email, error: emailError })
      setPassword1({ ...password1, error: passwordError1 })
      setPassword2({ ...password2, error: passwordError2 })
      setid({ ...id, error: idError })
      return
    }

    DatabaseConnection.registerUser(email.value, password1.value, id.value).then((results)=>{
      encryptPassword(password1.value);
      alert('resitered successfully');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })
    })

  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Créer Un Compte</Header>
      <TextInput
        label="ID"
        returnKeyType="next"
        value={id.value}
        onChangeText={(text) => setid({ value: text, error: '' })}
        error={!!id.error}
        errorText={id.error}
      />
      <TextInput
        label="E-mail"
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
        label="Password"
        returnKeyType="done"
        value={password1.value}
        onChangeText={(text) => setPassword1({ value: text, error: '' })}
        error={!!password1.error}
        errorText={password1.error}
        secureTextEntry
      />
      <TextInput
        label="reentrer votre Password"
        returnKeyType="done"
        value={password2.value}
        onChangeText={(text) => setPassword2({ value: text, error: '' })}
        error={!!password2.error}
        errorText={password2.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onRegisterPressed}
        style={{ marginTop: 24 }}
      >
        S'inscrire
      </Button>
      <View style={styles.row}>
        <Text>Vous avez déjà un compte ?  </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Se Connecter</Text>
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
