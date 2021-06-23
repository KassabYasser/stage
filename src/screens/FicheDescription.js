import React, { useState } from 'react';
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
  stade_devValidator,
  couvretValidator,
  fructificationValidator,
  nature_regValidator,
  nb_semisValidator,
  etat_sanitaireValidator,
  bois_gisantValidator,
  ecimageValidator,
  hauteur_moyenneValidator,
  c_moyenneValidator,
  surfaceValidator,
  nb_brinsValidator,
  nb_souchesValidator,
} from '../helpers/validators'
//import { useNavigation } from '@react-navigation/native';
import { DatabaseConnection } from '../helpers/database'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FicheDescription({ navigation }) {
//  const navigation= useNavigation();

  const [essence, setessence] = useState({ value: '', error: '' })
  const [stade_dev, setstade_dev] = useState({ value: '', error: '' })
  const [couvret, setcouvret] = useState({ value: '', error: '' })
  const [fructification, setfructification] = useState({ value: '', error: '' })
  const [nature_reg, setnature_reg] = useState({ value: '', error: '' })
  const [nb_semis, setnb_semis] = useState({ value: '', error: '' })
  const [etat_sanitaire, setetat_sanitaire] = useState({ value: '', error: '' })
  const [bois_gisant, setbois_gisant] = useState({ value: '', error: '' })
  const [ecimage, setecimage] = useState({ value: '', error: '' })
  const [hauteur_moyenne, sethauteur_moyenne] = useState({ value: '', error: '' })
  const [c_moyenne, setc_moyenne] = useState({ value: '', error: '' })
  const [surface, setsurface] = useState({ value: '', error: '' })
  const [nb_brins, setnb_brins] = useState({ value: '', error: '' })
  const [nb_souches, setnb_souches] = useState({ value: '', error: '' })

  const onSignUpPressed = async () => {
    const essenceError = essenceValidator(essence.value)
    const stade_devError = stade_devValidator(stade_dev.value)
    const couvretError = couvretValidator(couvret.value)
    const fructificationError = fructificationValidator(fructification.value)
    const nature_regError = nature_regValidator(nature_reg.value)
    const nb_semisError = nb_semisValidator(nb_semis.value)
    const etat_sanitaireError = etat_sanitaireValidator(etat_sanitaire.value)
    const bois_gisantError = bois_gisantValidator(bois_gisant.value)
    const ecimageError = ecimageValidator(ecimage.value)
    const hauteur_moyenneError = hauteur_moyenneValidator(hauteur_moyenne.value)
    const c_moyenneError = c_moyenneValidator(c_moyenne.value)
    const surfaceError = surfaceValidator(surface.value)
    const nb_brinsError = nb_brinsValidator(nb_brins.value)
    const nb_souchesError = nb_souchesValidator(nb_souches.value)
    
    if (essenceError || stade_devError || couvretError ||fructificationError ||  nature_regError ||
      nb_semisError || etat_sanitaireError || bois_gisantError || ecimageError || hauteur_moyenneError || c_moyenneError || surfaceError || nb_brinsError || nb_souchesError) {
      setessence({ ...essence, error: essenceError })
      setstade_dev({ ...stade_dev, error: stade_devError })
      setcouvret({ ...couvret, error: couvretError })
      setfructification({ ...fructification, error: fructificationError })
      setnature_reg({ ...nature_reg, error: nature_regError })
      setnb_semis({ ...nb_semis, error: nb_semisError })
      setetat_sanitaire({ ...etat_sanitaire, error: etat_sanitaireError })
      setbois_gisant({ ...bois_gisant, error: bois_gisantError })
      setecimage({ ...ecimage, error: ecimageError })
      sethauteur_moyenne({ ...hauteur_moyenne, error: hauteur_moyenneError })
      setc_moyenne({ ...c_moyenne, error: c_moyenneError })
      setsurface({ ...surface, error: surfaceError })
      setnb_brins({ ...nb_brins, error: nb_brinsError })
      setnb_souches({ ...nb_souches, error: nb_souchesError })
      return
    }
    const FicheDescriptionData= {
      essence: essence.value,
      stade_dev: stade_dev.value,
      couvret: couvret.value,
      fructification: fructification.value,
      nature_reg: nature_reg.value,
      nb_semis: nb_semis.value,
      etat_sanitaire: etat_sanitaire.value,
      bois_gisant: bois_gisant.value,
      ecimage: ecimage.value,
      hauteur_moyenne: hauteur_moyenne.value,
      c_moyenne: c_moyenne.value,
      surface: surface.value,
      nb_brins: nb_brins.value,
      nb_souches: nb_souches.value,
    }
    try {
        const DescriptionJson = JSON.stringify(FicheDescriptionData)
        await AsyncStorage.setItem('FicheDescriptionData', DescriptionJson)
    } catch (error) {
        console.error(error)
    }
    await DatabaseConnection.insertFicheDescription();
    navigation.reset({
      index: 0,
      routes: [{ name: 'FicheDendrometrique' }],
    })
  }

  return (
    <ScrollView>
    <Background>
       <View style = {{alignItems: 'center'}}>

         <Text style={{fontSize: 28, fontWeight:"bold"}}>DESCRIPTION & MESURE</Text>
         <Text style={{fontSize: 15, fontWeight:"bold"}}>DESCRIPTION PEUPLEMENT</Text>
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
            label="Stade développment 1"
            returnKeyType="next"
            value={stade_dev.value}
            onChangeText={(text) => setstade_dev({ value: text, error: '' })}
            error={!!stade_dev.error}
            errorText={stade_dev.error}
          />
           <TextInput
            label="Stade développment 2"
            returnKeyType="next"
            value={stade_dev.value}
            onChangeText={(text) => setstade_dev({ value: text, error: '' })}
            error={!!stade_dev.error}
            errorText={stade_dev.error}
          />
           <TextInput
            label="Stade développment 3"
            returnKeyType="next"
            value={stade_dev.value}
            onChangeText={(text) => setstade_dev({ value: text, error: '' })}
            error={!!stade_dev.error}
            errorText={stade_dev.error}
          />
          <TextInput
            label="Couvret 1"
            returnKeyType="next"
            value={couvret.value}
            onChangeText={(text) => setcouvret({ value: text, error: '' })}
            error={!!couvret.error}
            errorText={couvret.error}
          />
          <TextInput
            label="Couvret 2"
            returnKeyType="next"
            value={couvret.value}
            onChangeText={(text) => setcouvret({ value: text, error: '' })}
            error={!!couvret.error}
            errorText={couvret.error}
          />
          <TextInput
            label="Couvret 3"
            returnKeyType="next"
            value={couvret.value}
            onChangeText={(text) => setcouvret({ value: text, error: '' })}
            error={!!couvret.error}
            errorText={couvret.error}
          />
          <TextInput
            label="Fructification 1"
            returnKeyType="next"
            value={fructification.value}
            onChangeText={(text) => setfructification({ value: text, error: '' })}
            error={!!fructification.error}
            errorText={fructification.error}
          />
          <TextInput
            label="Fructification 2"
            returnKeyType="next"
            value={fructification.value}
            onChangeText={(text) => setfructification({ value: text, error: '' })}
            error={!!fructification.error}
            errorText={fructification.error}
          />
          <TextInput
            label="Fructification 2"
            returnKeyType="next"
            value={fructification.value}
            onChangeText={(text) => setfructification({ value: text, error: '' })}
            error={!!fructification.error}
            errorText={fructification.error}
          />
          <TextInput
            label="Nature Régénération 1"
            returnKeyType="next"
            value={nature_reg.value}
            onChangeText={(text) => setnature_reg({ value: text, error: '' })}
            error={!!nature_reg.error}
            errorText={nature_reg.error}
          />
          <TextInput
            label="Nature Régénération 2"
            returnKeyType="next"
            value={nature_reg.value}
            onChangeText={(text) => setnature_reg({ value: text, error: '' })}
            error={!!nature_reg.error}
            errorText={nature_reg.error}
          />
          <TextInput
            label="Nature Régénération 3"
            returnKeyType="next"
            value={nature_reg.value}
            onChangeText={(text) => setnature_reg({ value: text, error: '' })}
            error={!!nature_reg.error}
            errorText={nature_reg.error}
          />

          <TextInput
            label="Nombre Semis 1"
            returnKeyType="next"
            value={nb_semis.value}
            onChangeText={(text) => setnb_semis({ value: text, error: '' })}
            error={!!nb_semis.error}
            errorText={nb_semis.error}
          />
             <TextInput
            label="Nombre Semis 2"
            returnKeyType="next"
            value={nb_semis.value}
            onChangeText={(text) => setnb_semis({ value: text, error: '' })}
            error={!!nb_semis.error}
            errorText={nb_semis.error}
          />
             <TextInput
            label="Nombre Semis 3"
            returnKeyType="next"
            value={nb_semis.value}
            onChangeText={(text) => setnb_semis({ value: text, error: '' })}
            error={!!nb_semis.error}
            errorText={nb_semis.error}
          />
          <TextInput
            label="Etat Sanitaire 1"
            returnKeyType="next"
            value={etat_sanitaire.value}
            onChangeText={(text) => setetat_sanitaire({ value: text, error: '' })}
            error={!!etat_sanitaire.error}
            errorText={etat_sanitaire.error}
          />
          <TextInput
            label="Etat Sanitaire 2"
            returnKeyType="next"
            value={etat_sanitaire.value}
            onChangeText={(text) => setetat_sanitaire({ value: text, error: '' })}
            error={!!etat_sanitaire.error}
            errorText={etat_sanitaire.error}
          />
          <TextInput
            label="Etat Sanitaire 3"
            returnKeyType="next"
            value={etat_sanitaire.value}
            onChangeText={(text) => setetat_sanitaire({ value: text, error: '' })}
            error={!!etat_sanitaire.error}
            errorText={etat_sanitaire.error}
          />
            <TextInput
            label="Bois Gisant 1"
            returnKeyType="next"
            value={bois_gisant.value}
            onChangeText={(text) => setbois_gisant({ value: text, error: '' })}
            error={!!bois_gisant.error}
            errorText={bois_gisant.error}
          />
           <TextInput
            label="Bois Gisant 2"
            returnKeyType="next"
            value={bois_gisant.value}
            onChangeText={(text) => setbois_gisant({ value: text, error: '' })}
            error={!!bois_gisant.error}
            errorText={bois_gisant.error}
          />
           <TextInput
            label="Bois Gisant 3"
            returnKeyType="next"
            value={bois_gisant.value}
            onChangeText={(text) => setbois_gisant({ value: text, error: '' })}
            error={!!bois_gisant.error}
            errorText={bois_gisant.error}
          />
          
            <TextInput
            label="Ecimage 1"
            returnKeyType="next"
            value={ecimage.value}
            onChangeText={(text) => setecimage({ value: text, error: '' })}
            error={!!ecimage.error}
            errorText={ecimage.error}
          />
            <TextInput
            label="Ecimage 2"
            returnKeyType="next"
            value={ecimage.value}
            onChangeText={(text) => setecimage({ value: text, error: '' })}
            error={!!ecimage.error}
            errorText={ecimage.error}
          />
            <TextInput
            label="Ecimage 3"
            returnKeyType="next"
            value={ecimage.value}
            onChangeText={(text) => setecimage({ value: text, error: '' })}
            error={!!ecimage.error}
            errorText={ecimage.error}
          />
           <TextInput
            label="Hauteur Moyenne"
            returnKeyType="next"
            value={hauteur_moyenne.value}
            onChangeText={(text) => sethauteur_moyenne({ value: text, error: '' })}
            error={!!hauteur_moyenne.error}
            errorText={hauteur_moyenne.error}
          />
            <TextInput
            label="Hauteur Moyenne"
            returnKeyType="next"
            value={hauteur_moyenne.value}
            onChangeText={(text) => sethauteur_moyenne({ value: text, error: '' })}
            error={!!hauteur_moyenne.error}
            errorText={hauteur_moyenne.error}
          />
          
            <TextInput
            label="C Moyenne"
            returnKeyType="next"
            value={c_moyenne.value}
            onChangeText={(text) => setc_moyenne({ value: text, error: '' })}
            error={!!c_moyenne.error}
            errorText={c_moyenne.error}
          />
          <TextInput
            label="Surface"
            returnKeyType="next"
            value={surface.value}
            onChangeText={(text) => setsurface({ value: text, error: '' })}
            error={!!surface.error}
            errorText={surface.error}
          />
          <TextInput
            label="Nombre Brins"
            returnKeyType="next"
            value={nb_brins.value}
            onChangeText={(text) => setnb_brins({ value: text, error: '' })}
            error={!!nb_brins.error}
            errorText={nb_brins.error}
          />
           <TextInput
            label="Nombre Souches"
            returnKeyType="next"
            value={nb_souches.value}
            onChangeText={(text) => setnb_souches({ value: text, error: '' })}
            error={!!nb_souches.error}
            errorText={nb_souches.error}
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