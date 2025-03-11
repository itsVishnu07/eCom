import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import AuthStack from './src/navigations/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (

    <PaperProvider>  
      <View style={{flex: 1,}}>
        <StatusBar barStyle="light-content" translucent backgroundColor="rgba(0,0,0,0)" />
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </View>
    </PaperProvider>

  )
}

export default App

const styles = StyleSheet.create({})