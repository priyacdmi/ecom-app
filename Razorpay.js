import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';




const Razorpay = () => {
  const onPressBuy = () => {
    //Order Api: Call POST api with body like (username, id, price etc) to create an Order and use order_id in below options object
    // const response = await .....

    let options = {
      description: 'Credits towards consultation',
      image: require('./image/decor.jpg'),
      currency: 'INR', //In USD - only card option will exist rest(like wallet, UPI, EMI etc) will hide
      key: rzp_test_KW4pxYgx85PfXU,
    //   ketsecret: WfAoZsdicsGadr2KXtOFVaJR,
      amount: '5000',
      name: 'Acme Corp',
      order_id: '', //Replace this with an order_id(response.data.orderId) created using Orders API.
      prefill: {
        email: 'malaviyagaurav879@gmail.com',
        contact: '8200491979',
        name: 'Hasan',
      }, //if prefill is not provided then on razorpay screen it has to be manually entered.
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <View style={styles.container}>
      <Text>PRICE: 125000/-</Text>
      <Button title="Buy" color={'darkblue'} onPress={onPressBuy} />
    </View>
  );
};

export default Razorpay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});