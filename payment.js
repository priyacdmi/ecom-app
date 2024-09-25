import React from 'react'
import { ScrollView, TextInput, View, Text, Pressable } from 'react-native';

const Payment = ({ navigation, route }) => {

  const { data, qtn } = route.params;

  

  return (
    <>
      <ScrollView>
        <View style={{ margin: 40 }}>
          <View>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: 700, marginBottom: 7 }}>Payment</Text>
          </View>

          <Text style={{ color: '#000', fontSize: 9 }}>Email Adress</Text>
          <View style={{ height: 45, backgroundColor: '#ccc5b9', width: '100%', margin: 3 }}>
            <TextInput placeholder='Email' style={{ color: 'black' }}></TextInput>
          </View>

          <Text style={{ color: '#000', fontSize: 9 }}>First Name</Text>
          <View style={{ height: 45, backgroundColor: '#ccc5b9', width: '100%', margin: 3 }}>
            <TextInput style={{ color: 'black' }}></TextInput>
          </View>

          <Text style={{ color: '#000', fontSize: 9 }}>Last Name</Text>
          <View style={{ height: 45, backgroundColor: '#ccc5b9', width: '100%', margin: 3 }}>
            <TextInput style={{ color: 'black' }}></TextInput>
          </View>

          <Text style={{ color: '#000', fontSize: 9 }}>Moblie No.</Text>
          <View style={{ height: 45, backgroundColor: '#ccc5b9', width: '100%', margin: 3 }}>
            <TextInput style={{ color: 'black' }}></TextInput>
          </View>

          <Text style={{ color: '#000', fontSize: 9 }}>Delivery Adress</Text>
          <View style={{ height: 45, backgroundColor: '#ccc5b9', width: '100%', margin: 3 }}>
            <TextInput style={{ color: 'black' }}></TextInput>
          </View>

          <Text style={{ color: '#000', fontSize: 9 }}>Town</Text>
          <View style={{ height: 45, backgroundColor: '#ccc5b9', width: '100%', margin: 3 }}>
            <TextInput style={{ color: 'black' }}></TextInput>
          </View>

          <Text style={{ color: '#000', fontSize: 9 }}>State</Text>
          <View style={{ height: 45, backgroundColor: '#ccc5b9', width: '100%', margin: 3 }}>
            <TextInput style={{ color: 'black' }}></TextInput>
          </View>

          <Text style={{ color: '#000', fontSize: 9 }}>Postcode</Text>
          <View style={{ height: 45, backgroundColor: '#ccc5b9', width: '100%', margin: 3 }}>
            <TextInput style={{ color: 'black' }}></TextInput>
          </View>


          <Text style={{ color: '#000', fontSize: 9 }}>Country</Text>
          <View style={{ height: 45, backgroundColor: '#ccc5b9', width: '100%', margin: 3 }}>
            <TextInput style={{ color: 'black' }}></TextInput>
          </View>

          <View style={{ height: 150 }}>
            <Text style={{ color: '#000', fontSize: 12, marginTop: 20, textAlign: 'center' }}>Select Payment Method</Text>
            <View style={{ height: 45, borderWidth: 1 }}>
              <Text style={{ color: '#000', fontSize: 12, marginLeft: 8 }}>card</Text>
            </View>
            <View style={{ height: 45, borderWidth: 1 }}>
              <Text style={{ color: '#000', fontSize: 12, marginLeft: 8 }}>paypal</Text>
            </View>
          </View>

          <View>
            <Text style={{ color: '#000', fontSize: 15,marginTop:10 }}>Order Summery</Text>
            <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
              <View>
                <Text style={{ color: '#000', fontSize: 9 }}>{data.title}</Text>
              </View>
              <View>
                <Text style={{ color: '#000', fontSize: 9,marginBottom:10 }}>${data.price*qtn}</Text>
              </View>
            </View>
          </View>


          <View style={{ height: 50, backgroundColor: '#000', width: '90%', borderRadius: 50, margin: 9, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>Pay Now</Text>
          </View>



        </View>
      </ScrollView>
    </>
  )
}

export default Payment;

