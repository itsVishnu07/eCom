import React from 'react'
import { StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProductListScreen from '../screens/ProductListScreen';
import Cart from '../screens/Cart';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Welcome" component={WelcomeScreen} />

      <Stack.Screen name="product" component={ProductListScreen} />

      <Stack.Screen name="cart" component={Cart} />

    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})