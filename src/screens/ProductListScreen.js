import React, { useState, useEffect } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, BackHandler, ToastAndroid } from 'react-native';
import { Colors, Fonts } from '../constants';

const Stack = createNativeStackNavigator();

const products = [
  { name: 'Product 1', price: 100 },
  { name: 'Product 2', price: 200 },
  { name: 'Product 3', price: 300 },
];



const ProductListScreen = ({ navigation, route }) => {
  const [cart, setCart] = useState(route.params?.cart || []);


  const [exitApp, setExitApp] = useState(0);
  
const isFocused = useIsFocused();


  const backAction = () => {
    
    setTimeout(() => {

      setExitApp(0);

    }, 2000); // 2 seconds to tap second-time

    if (exitApp === 0) {

      setExitApp(exitApp + 1);

      ToastAndroid.show("Press again to exit", ToastAndroid.SHORT);

    } else if (exitApp === 1) {

      BackHandler.exitApp();

    }

    return true;

  };

  useEffect(() => {

    if (isFocused) {

      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction,);

      return () => backHandler.remove();

    }

  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 24, fontFamily: Fonts.BOLD, color: Colors.DEFAULT_BLACK, marginTop: 20}}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={{ }}>
            <View style={{justifyContent: 'space-between', width: 150, height: 100, borderRadius: 10, borderWidth: 1, borderColor: Colors.DEFAULT_BLACK, padding: 10, margin:10}}>
              <Text>{item.name}  ${item.price}</Text>
              <View style={{marginTop: 10,}}>
                <TouchableOpacity style={{backgroundColor: Colors.DEFAULT_BLUE, padding: 10, borderRadius: 8}} onPress={() => addToCart(item)}>
                  <Text style={{fontSize: 14, textAlign: 'center', fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_WHITE,}}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
            </View>
            
          </View>
        )}
      />
      <View style={{marginTop: 20,}}>
        <TouchableOpacity style={{backgroundColor: 'green', padding: 10, borderRadius: 8}} onPress={() => navigation.navigate('cart', { cart })}>
          <Text style={{fontSize: 14, textAlign: 'center', fontFamily: Fonts.MEDIUM, color: Colors.DEFAULT_WHITE,}}>Go to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductListScreen;