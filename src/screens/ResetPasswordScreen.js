import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    fetch('http://192.168.0.144:3000/reset-password', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
      })
    }).then((res) => {
        res.json();
          if(res.status==400) { alert("cet adresse n'existe pas"); }
          else {
            alert("un email a été envoyé dans votre adresse gmail");
            navigation.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }]
            })
          }
        }).catch((error) => {
            console.error(error);
        });
      }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Récupération Mot De Passe</Header>
      <TextInput
        label="E-mail"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="Vous Recevrez Un E-mail Avec Un Lien De Récupération Du Mot De Passe."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
       Envoyer instructions 
      </Button>
    </Background>
  )
}
