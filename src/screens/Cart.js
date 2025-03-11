import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants';
import { useNavigation } from '@react-navigation/native';

const Cart = ({ route }) => {
  const navigation = useNavigation();
  const { cart, setCart } = route.params;
  const total = cart.reduce((sum, item) => sum + item.price, 0);


  return (
    <View style={{padding: 20, marginTop: 20}}>
      <Text style={{fontSize: 24, fontFamily: Fonts.BOLD, color: Colors.DEFAULT_BLACK, marginTop: 20}}>Cart</Text>
      {
        cart.length === 0 ? (
          <Text style={{fontSize: 14, textAlign: 'center', fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_BLACK, marginTop: 20}}>Your cart is empty.</Text>
        ) : (
        cart.map((item, index) => (
        <>
          <View style={{justifyContent: 'space-between', width: 150, height: 80, borderRadius: 10, borderWidth: 1, borderColor: Colors.DEFAULT_BLACK, padding: 10, margin:10}}>
            <Text style={{fontSize: 14, fontFamily: Fonts.SEMI, color: Colors.DEFAULT_BLACK, marginTop: 20}}>{item.name}  ${item.price}</Text>
          </View>
          
        </>
      )))}
      
      {
        cart.length > 0 &&
        <View style={{backgroundColor: Colors.DEFAULT_BLUE, padding: 10, borderRadius: 8, height: 80, justifyContent: 'center',}}>
        <Text style={{fontSize: 18, fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_WHITE,}}>Total: ${total}</Text>
      </View>
      }

      <View style={{marginTop: 20,}}>
        <TouchableOpacity style={{backgroundColor: Colors.SECONDARY_GREEN, padding: 10, borderRadius: 8}} onPress={() => navigation.navigate('product')}>
          <Text style={{fontSize: 14, textAlign: 'center', fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_WHITE,}}>Back to List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart

const styles = StyleSheet.create({})