import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import {
  observateurValidator,
  foretValidator,
  triageValidator,
  strateValidator,
  altitudeValidator,
  orientationValidator,
  topologieValidator,
  nb_essencesValidator,
  n_paracelleValidator,
  cantonValidator,
  n_placetteValidator,
  penteValidator,
  profondeurValidator,
  roche_mereValidator,
  age_moyenValidator
} from '../helpers/validators'
import { DatabaseConnection } from '../helpers/database'
//package to access the device location
import * as Location from 'expo-location';
//package to store data intered by the user
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { useNavigation } from '@react-navigation/native';

const getCurrentDate=()=>{
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
}

export default function FicheLocalisation(props, {navigation}) {
  console.log('props: ', props.route.params.data.route.params)

  const [observateur, setobservateur] = useState({ value: '', error: '' })
  const [foret, setforet] = useState({ value: '', error: '' })
  const [triage, settriage] = useState({ value: '', error: '' })
  const [strate, setstrate] = useState({ value: '', error: '' })
  const [altitude, setaltitude] = useState({ value: '', error: '' })
  const [orientation, setorientation] = useState({ value: '', error: '' })
  const [topologie, settopologie] = useState({ value: '', error: '' })
  const [nb_essences, setnb_essences] = useState({ value: '', error: '' })
  const [n_paracelle, setn_paracelle] = useState({ value: '', error: '' })
  const [canton, setcanton] = useState({ value: '', error: '' })
  const [n_placette, setn_placette] = useState({ value: '', error: '' })
  const [pente, setpente] = useState({ value: '', error: '' })
  const [profondeur, setprofondeur] = useState({ value: '', error: '' })
  const [roche_mere, setroche_mere] = useState({ value: '', error: '' })
  const [age_moyen, setage_moyen] = useState({ value: '', error: '' })
  //variable to store the location
  const [location, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("location: ", location.coords.longitude)
    })();
  }, []);

  /*if(props.route.params.data.route.params!==null){
    //const navigation= useNavigation();
    console.log('is not null',  props.route.params.data.route.params.data.DATE_OBSERV)
  setobservateur({ value: props.route.params.data.route.params.data.OBSERV_NOM, error: '' })
setforet({ value: 'maamora', error: '' })
settriage({ value: props.route.params.data.route.params.data.TRIAGE, error: '' })
setstrate({ value: props.route.params.data.route.params.data.STRATE, error: '' })
setaltitude({ value: props.route.params.data.route.params.data.ALTITUDE, error: '' })
setorientation({ value: props.route.params.data.route.params.data.ORIENTATION, error: '' })
settopologie({ value: '1', error: '' })
setnb_essences({ value: props.route.params.data.route.params.data.NBESSENCE, error: '' })
setn_paracelle({ value: props.route.params.data.route.params.data.PARCELLE_NO, error: '' })
setcanton({ value: props.route.params.data.route.params.data.CANTON, error: '' })
setn_placette({ value: props.route.params.data.route.params.data.PLACETTE_NO, error: '' })
setpente({ value: props.route.params.data.route.params.data.PENTE, error: '' })
setprofondeur({ value:  props.route.params.data.route.params.data.PROFONDEUR, error: '' })
setroche_mere({ value: props.route.params.data.route.params.data.ROCHE_MERE, error: '' })
setage_moyen({ value: props.route.params.data.route.params.data.AGE_MOY, error: '' })
  }*/

  const onSignUpPressed = async () => {
    const observateurError = observateurValidator(observateur.value)
    const foretError = foretValidator(foret.value)
    const triageError = triageValidator(triage.value)
    const strateError = strateValidator(strate.value)
    const altitudeError = altitudeValidator(altitude.value)
    const orientationError = orientationValidator(orientation.value)
    const topologieError = topologieValidator(topologie.value)
    const nb_essencesError = nb_essencesValidator(nb_essences.value)
    const n_paracelleError = n_paracelleValidator(n_paracelle.value)
    const cantonError = cantonValidator(canton.value)
    const n_placetteError = n_placetteValidator(n_placette.value)
    const penteError = penteValidator(pente.value)
    const profondeurError = profondeurValidator(profondeur.value)
    const roche_mereError = roche_mereValidator(roche_mere.value)
    const age_moyenError = age_moyenValidator(age_moyen.value)

    if (observateurError || foretError || triageError ||strateError ||  altitudeError ||
      orientationError || topologieError || nb_essencesError || n_paracelleError || cantonError || n_placetteError || penteError || profondeurError || roche_mereError || age_moyenError) {
      setobservateur({ ...observateur, error: observateurError })
      setforet({ ...foret, error: foretError })
      settriage({ ...triage, error: foretError })
      setstrate({ ...strate, error: strateError })
      setaltitude({ ...altitude, error: altitudeError })
      setorientation({ ...orientation, error: orientationError })
      settopologie({ ...topologie, error: topologieError })
      setnb_essences({ ...nb_essences, error: nb_essencesError })
      setn_paracelle({ ...n_paracelle, error: n_paracelleError })
      setcanton({ ...canton, error: cantonError })
      setn_placette({ ...n_placette, error: n_placetteError })
      setpente({ ...pente, error: penteError })
      setprofondeur({ ...profondeur, error: profondeurError })
      setroche_mere({ ...roche_mere, error: roche_mereError })
      setage_moyen({ ...age_moyen, error: age_moyenError })
      return
    }
    console.log("current date", getCurrentDate())
    const FicheLocalisationData= {
      observateur: observateur.value,
      foret: foret.value,
      triage: triage.value,
      strate: strate.value,
      altitude: altitude.value,
      orientation: orientation.value,
      topologie: topologie.value,
      nb_essences: nb_essences.value,
      n_paracelle: n_paracelle.value,
      canton: canton.value,
      n_placette: n_placette.value,
      pente: pente.value,
      profondeur: profondeur.value,
      roche_mere: roche_mere.value,
      age_moyen: age_moyen.value,
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
      date_observ: getCurrentDate(),
    }
    try {
        const LocalisatioinJson = JSON.stringify(FicheLocalisationData)
        await AsyncStorage.setItem('FicheLocalisationData', LocalisatioinJson)
    } catch (error) {
        console.error(error)
    }
    
    navigation.reset({
      index: 0,
      routes: [{ name: 'FicheDescription' }],
    })
  }

  return (
    <ScrollView>
    <Background>
       <View style = {{alignItems: 'center'}}>
        
         <Text style={{fontSize: 30, fontWeight:"bold"}}>LOCALISATION</Text>
      </View>
          <TextInput
            label="Observateur"
            returnKeyType="next"
            value={observateur.value}
            onChangeText={(text) => setobservateur({ value: text, error: '' })}
            error={!!observateur.error}
            errorText={observateur.error}
          />
          <TextInput
            label="Foret"
            returnKeyType="next"
            value={foret.value}
            onChangeText={(text) => setforet({ value: text, error: '' })}
            error={!!foret.error}
            errorText={foret.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            label="Triage"
            returnKeyType="next"
            value={triage.value}
            onChangeText={(text) => settriage({ value: text, error: '' })}
            error={!!triage.error}
            errorText={triage.error}
          />
          <TextInput
            label="Strate"
            returnKeyType="next"
            value={strate.value}
            onChangeText={(text) => setstrate({ value: text, error: '' })}
            error={!!strate.error}
            errorText={strate.error}
          />
          <TextInput
            label="Altitude"
            returnKeyType="next"
            value={altitude.value}
            onChangeText={(text) => setaltitude({ value: text, error: '' })}
            error={!!altitude.error}
            errorText={altitude.error}
          />
          <TextInput
            label="Orientation"
            returnKeyType="next"
            value={orientation.value}
            onChangeText={(text) => setorientation({ value: text, error: '' })}
            error={!!orientation.error}
            errorText={orientation.error}
          />
          <TextInput
            label="Topologie"
            returnKeyType="next"
            value={topologie.value}
            onChangeText={(text) => settopologie({ value: text, error: '' })}
            error={!!topologie.error}
            errorText={topologie.error}
          />
            <TextInput
            label="Nombre Esssences"
            returnKeyType="next"
            value={nb_essences.value}
            onChangeText={(text) => setnb_essences({ value: text, error: '' })}
            error={!!nb_essences.error}
            errorText={nb_essences.error}
          />
            <TextInput
            label="Nombre Parracelle"
            returnKeyType="next"
            value={n_paracelle.value}
            onChangeText={(text) => setn_paracelle({ value: text, error: '' })}
            error={!!n_paracelle.error}
            errorText={n_paracelle.error}
          />
           <TextInput
            label="Canton"
            returnKeyType="next"
            value={canton.value}
            onChangeText={(text) => setcanton({ value: text, error: '' })}
            error={!!canton.error}
            errorText={canton.error}
          />
            <TextInput
            label="Nombre Placette"
            returnKeyType="next"
            value={n_placette.value}
            onChangeText={(text) => setn_placette({ value: text, error: '' })}
            error={!!n_placette.error}
            errorText={n_placette.error}
          />
          <TextInput
            label="Pente"
            returnKeyType="next"
            value={pente.value}
            onChangeText={(text) => setpente({ value: text, error: '' })}
            error={!!pente.error}
            errorText={pente.error}
          />
          <TextInput
            label="Profondeur"
            returnKeyType="next"
            value={profondeur.value}
            onChangeText={(text) => setprofondeur({ value: text, error: '' })}
            error={!!profondeur.error}
            errorText={profondeur.error}
          />
           <TextInput
            label="Roche mere"
            returnKeyType="next"
            value={roche_mere.value}
            onChangeText={(text) => setroche_mere({ value: text, error: '' })}
            error={!!roche_mere.error}
            errorText={roche_mere.error}
          />
            <TextInput
            label="Age Moyen"
            returnKeyType="next"
            value={age_moyen.value}
            onChangeText={(text) => setage_moyen({ value: text, error: '' })}
            error={!!age_moyen.error}
            errorText={age_moyen.error}
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