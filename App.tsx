/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';
import Mainpg from './mainpg';
import Product from './product';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import productcart from './productcart';
import Productcart from './productcart';
import Payment from './payment';
import Signup from './signup';
import Login from './login';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <>
      {/* <Mainpg></Mainpg> */}
      {/* <Product></Product> */}

      <NavigationContainer>
        <Stack.Navigator>


          {/* <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='signup' component={Signup} /> */}
          <Stack.Screen name='Home' component={Mainpg} options={{ headerShown: false }} />
          <Stack.Screen name='product' component={Product} />
          <Stack.Screen name='productbag' component={Productcart} />
          {/* <Stack.Screen name='payment' component={Payment} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Razorpay></Razorpay> */}

    </>
  )

}

export default App;