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
  etageValidator,
  c1Validator,
  c2Validator,
  epaisseur1Validator,
  epaisseur2Validator,
  longeur_cernesValidator,
  hauteur_totaleValidator,
  hauteur_futValidator,
  hauteur_demasclageValidator,
} from '../helpers/validators'
import {useNavigation} from '@react-navigation/native';

export default function FicheArbreEchantillont() {
  const navigation = useNavigation();
  const [essence, setessence] = useState({ value: '', error: '' })
  const [etage, setetage] = useState({ value: '', error: '' })
  const [c1, setc1] = useState({ value: '', error: '' })
  const [c2, setc2] = useState({ value: '', error: '' })
  const [epaisseur1, setepaisseur1] = useState({ value: '', error: '' })
  const [epaisseur2, setepaisseur2] = useState({ value: '', error: '' })
  const [longeur_cernes, setlongeur_cernes] = useState({ value: '', error: '' })
  const [hauteur_totale, sethauteur_totale] = useState({ value: '', error: '' })
  const [hauteur_fut, sethauteur_fut] = useState({ value: '', error: '' })
  const [hauteur_demasclage, sethauteur_demasclage] = useState({ value: '', error: '' })
  
  
  const onSignUpPressed = () => {
    const essenceError = essenceValidator(essence.value)
    const etageError = etageValidator(etage.value)
    const c1Error = c1Validator(c1.value)
    const c2Error = c2Validator(c2.value)
    const epaisseur1Error = epaisseur1Validator(epaisseur1.value)
    const epaisseur2Error = epaisseur2Validator(epaisseur2.value)
    const longeur_cernesError = longeur_cernesValidator(longeur_cernes.value)
    const hauteur_totaleError = hauteur_totaleValidator(hauteur_totale.value)
    const hauteur_futError = hauteur_futValidator(hauteur_fut.value)
    const hauteur_demasclageError = hauteur_demasclageValidator(hauteur_demasclage.value)


    if (essenceError || etageError || c1Error ||c2Error ||epaisseur1Error||epaisseur2Error||longeur_cernesError||hauteur_totaleError||hauteur_futError||hauteur_demasclageError) {
      setessence({ ...essence, error: essenceError })
      setetage({ ...etage, error: etageError })
      setc1({ ...c1, error: c1Error })
      setc2({ ...c2, error: c2Error })
      setepaisseur1({ ...epaisseur1, error: epaisseur1Error })
      setepaisseur2({ ...epaisseur2, error: epaisseur2Error })
      setlongeur_cernes({ ...longeur_cernes, error: longeur_cernesError })
      sethauteur_totale({ ...hauteur_totale, error: hauteur_totaleError })
      sethauteur_fut({ ...hauteur_fut, error: hauteur_futError })
      sethauteur_demasclage({ ...hauteur_demasclage, error: hauteur_demasclageError })
     
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <ScrollView>
    <Background>
       <View style = {{alignItems: 'center'}}>

         <Text style={{fontSize: 28, fontWeight:"bold"}}>TYPE D'ARBRE</Text>
         <Text style={{fontSize: 15, fontWeight:"bold"}}>ARBRES ECHANTILLONS</Text>
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
            label="Etage 1"
            returnKeyType="next"
            value={etage.value}
            onChangeText={(text) => setetage({ value: text, error: '' })}
            error={!!etage.error}
            errorText={etage.error}
          />
           
           <TextInput
            label="Etage 2"
            returnKeyType="next"
            value={etage.value}
            onChangeText={(text) => setetage({ value: text, error: '' })}
            error={!!etage.error}
            errorText={etage.error}
          />
           
           <TextInput
            label="Etage 3"
            returnKeyType="next"
            value={etage.value}
            onChangeText={(text) => setetage({ value: text, error: '' })}
            error={!!etage.error}
            errorText={etage.error}
          />
           <TextInput
            label="C à 0.30 m (cm) 1"
            returnKeyType="next"
            value={c1.value}
            onChangeText={(text) => setc1({ value: text, error: '' })}
            error={!!c1.error}
            errorText={c1.error}
          />
        
        <TextInput
            label="C à 0.30 m (cm) 2"
            returnKeyType="next"
            value={c1.value}
            onChangeText={(text) => setc1({ value: text, error: '' })}
            error={!!c1.error}
            errorText={c1.error}
          />
           <TextInput
            label="C à 0.30 m (cm) 3"
            returnKeyType="next"
            value={c1.value}
            onChangeText={(text) => setc1({ value: text, error: '' })}
            error={!!c1.error}
            errorText={c1.error}
          />
           <TextInput
            label="C à 1.30 m (cm) 1"
            returnKeyType="next"
            value={c2.value}
            onChangeText={(text) => setc2({ value: text, error: '' })}
            error={!!c2.error}
            errorText={c2.error}
          />
           <TextInput
            label="C à 1.30 m (cm) 2"
            returnKeyType="next"
            value={c2.value}
            onChangeText={(text) => setc2({ value: text, error: '' })}
            error={!!c2.error}
            errorText={c2.error}
          />
           <TextInput
            label="C à 1.30 m (cm) 3"
            returnKeyType="next"
            value={c2.value}
            onChangeText={(text) => setc2({ value: text, error: '' })}
            error={!!c2.error}
            errorText={c2.error}
          />
        
          <TextInput
            label="Epaisseur à 0.30 m (mm) 1"
            returnKeyType="next"
            value={epaisseur1.value}
            onChangeText={(text) => setepaisseur1({ value: text, error: '' })}
            error={!!epaisseur1.error}
            errorText={epaisseur1.error}
          />
              <TextInput
            label="Epaisseur à 0.30 m (mm) 2"
            returnKeyType="next"
            value={epaisseur1.value}
            onChangeText={(text) => setepaisseur1({ value: text, error: '' })}
            error={!!epaisseur1.error}
            errorText={epaisseur1.error}
          />
              <TextInput
            label="Epaisseur à 0.30 m (mm) 3"
            returnKeyType="next"
            value={epaisseur1.value}
            onChangeText={(text) => setepaisseur1({ value: text, error: '' })}
            error={!!epaisseur1.error}
            errorText={epaisseur1.error}
          />
            <TextInput
            label="Epaisseur à 1.30 m (mm) 1"
            returnKeyType="next"
            value={epaisseur2.value}
            onChangeText={(text) => setepaisseur2({ value: text, error: '' })}
            error={!!epaisseur2.error}
            errorText={epaisseur2.error}
          />
           <TextInput
            label="Epaisseur à 1.30 m (mm) 2"
            returnKeyType="next"
            value={epaisseur2.value}
            onChangeText={(text) => setepaisseur2({ value: text, error: '' })}
            error={!!epaisseur2.error}
            errorText={epaisseur2.error}
          />
           <TextInput
            label="Epaisseur à 1.30 m (mm) 3"
            returnKeyType="next"
            value={epaisseur2.value}
            onChangeText={(text) => setepaisseur2({ value: text, error: '' })}
            error={!!epaisseur2.error}
            errorText={epaisseur2.error}
          />
            <TextInput
            label="Longeur Cernes (mm) 1"
            returnKeyType="next"
            value={longeur_cernes.value}
            onChangeText={(text) => setlongeur_cernes({ value: text, error: '' })}
            error={!!longeur_cernes.error}
            errorText={longeur_cernes.error}
          />
            <TextInput
            label="Longeur Cernes (mm) 2"
            returnKeyType="next"
            value={longeur_cernes.value}
            onChangeText={(text) => setlongeur_cernes({ value: text, error: '' })}
            error={!!longeur_cernes.error}
            errorText={longeur_cernes.error}
          />
            <TextInput
            label="Longeur Cernes (mm) 3"
            returnKeyType="next"
            value={longeur_cernes.value}
            onChangeText={(text) => setlongeur_cernes({ value: text, error: '' })}
            error={!!longeur_cernes.error}
            errorText={longeur_cernes.error}
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
            label="Hauteur Fut (m) 1"
            returnKeyType="next"
            value={hauteur_fut.value}
            onChangeText={(text) => sethauteur_fut({ value: text, error: '' })}
            error={!!hauteur_fut.error}
            errorText={hauteur_fut.error}
          />
            <TextInput
            label="Hauteur Fut (m) 2"
            returnKeyType="next"
            value={hauteur_fut.value}
            onChangeText={(text) => sethauteur_fut({ value: text, error: '' })}
            error={!!hauteur_fut.error}
            errorText={hauteur_fut.error}
          />
            <TextInput
            label="Hauteur Fut (m) 3"
            returnKeyType="next"
            value={hauteur_fut.value}
            onChangeText={(text) => sethauteur_fut({ value: text, error: '' })}
            error={!!hauteur_fut.error}
            errorText={hauteur_fut.error}
          />
         
         <TextInput
            label="Hauteur Demasclage (m) 1"
            returnKeyType="next"
            value={hauteur_demasclage.value}
            onChangeText={(text) => sethauteur_demasclage({ value: text, error: '' })}
            error={!!hauteur_demasclage.error}
            errorText={hauteur_demasclage.error}
          />
           <TextInput
            label="Hauteur Demasclage (m) 2"
            returnKeyType="next"
            value={hauteur_demasclage.value}
            onChangeText={(text) => sethauteur_demasclage({ value: text, error: '' })}
            error={!!hauteur_demasclage.error}
            errorText={hauteur_demasclage.error}
          />
          
          <TextInput
            label="Hauteur Demasclage (m) 3"
            returnKeyType="next"
            value={hauteur_demasclage.value}
            onChangeText={(text) => sethauteur_demasclage({ value: text, error: '' })}
            error={!!hauteur_demasclage.error}
            errorText={hauteur_demasclage.error}
          />
       
      <Button
        mode="contained"
        onPress={onSignUpPressed}
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