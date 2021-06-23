import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  FicheLocalisation,
  FicheDescription,
  FicheDendrometrique,
  FicheArbreDominant,
  FicheArbreEchantillont,
  Compte,
  ModifierCompte,
  ConsulterFormulaire,
  MainScreen,
  SyncData,
  ResultatDate,
  DetailResultatDate,
} from './src/screens'

StatusBar.setBarStyle('light-content')
const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
          <Stack.Screen name="FicheLocalisation" component={FicheLocalisation} />
          <Stack.Screen name="FicheDescription" component={FicheDescription} />          
          <Stack.Screen name="FicheDendrometrique" component={FicheDendrometrique} />
          <Stack.Screen name="FicheArbreDominant" component={FicheArbreDominant} />
          <Stack.Screen name="FicheArbreEchantillont" component={FicheArbreEchantillont} />
          <Stack.Screen name="ModifierCompte" component={ModifierCompte} />
          <Stack.Screen name="Compte" component={Compte} />
          <Stack.Screen name="ConsulterFormulaire" component={ConsulterFormulaire} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="SyncData" component={SyncData} />
          <Stack.Screen name="DetailResultatDate" component={DetailResultatDate} />
          <Stack.Screen name="ResultatDate" component={ResultatDate} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
