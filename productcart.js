import React, { useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RazorpayCheckout from 'react-native-razorpay';



const Productcart = ({ navigation, route }) => {

    // const { image } = route.params;

    const cartdata = [];
    const [cart, setcart] = useState([])

    const [qtn, setqtn] = useState('1');

    const plusqtn = () => {
        setqtn(parseInt(qtn) + 1);
    }
    const minusqtn = () => {
        if (qtn != 1) {
            setqtn(qtn - 1);
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('cartdata');
            if (jsonValue !== null) {
                const val = JSON.parse(jsonValue);

                cartdata.push(val);
                setcart(cartdata)
                storecartdata(cartdata)
            }
        } catch (e) {
            // error reading value
        }
    };

    const storecartdata = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('storecart', jsonValue);
          
        } catch (e) {
            // saving error
        }
    };
    const getcartData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('storecart');
            if (jsonValue !== null) {
                const val = JSON.parse(jsonValue);

                setcart(val)
            }
        } catch (e) {
            // error reading value
        }
    };

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

    useEffect(() => {
        getData()
        navigation.addListener('focus', () => {

            storecartdata();
            getcartData();
        })
    }, [])

    return (
        <>
            <View style={{ width: '100%', margin: 20, display: 'flex', flexWrap: 'wrap' }}>

                {
                    cart.map((item, ind) => {
                        return (

                            <>

                                <View style={{ height: 210, width: '90%', borderRadius: 10, backgroundColor: '#ccc5b9', flexDirection: 'row' }}>
                                    <View style={{ width: '40%', padding: 10 }}>
                                        {/* <Image style={{ objectFit: 'cover', height: '100%' }} source={}></Image> */}
                                    </View>
                                    <View style={{ width: '60%', padding: 10 }}>
                                        <Text style={{ color: 'black', fontSize: 14 }}>{item.name}</Text>
                                        <Text style={{ color: 'black', fontSize: 10 }}>{item.title}</Text>
                                        <Text style={{ color: 'black', fontSize: 10 }}>$ {item.price}</Text>

                                        <View style={{ height: 40, width: 140, flexDirection: 'row', borderColor: 'black', borderWidth: 1, zIndex: 1, marginTop: 15 }}>
                                            <Pressable onPress={minusqtn}>
                                                <View style={{ width: 40, height: 38, alignItems: 'center', justifyContent: 'center', borderColor: 'black', borderRightWidth: 1 }}>
                                                    <Text style={{ color: 'black', fontSize: 14 }}>-</Text>
                                                </View>
                                            </Pressable>
                                            <View style={{ width: 60, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'black', fontSize: 14 }}>{qtn}</Text>
                                            </View>
                                            <Pressable onPress={plusqtn}>
                                                <View style={{ width: 40, height: 38, alignItems: 'center', justifyContent: 'center', borderColor: 'black', borderLeftWidth: 1 }}>
                                                    <Text style={{ color: 'black', fontSize: 14 }}>+</Text>
                                                </View>
                                            </Pressable>
                                        </View>

                                    </View>
                                </View>

                            </>
                        )
                    })
                }


                <Pressable onPress={onPressBuy}>
                    <View style={{ height: 60, backgroundColor: '#000', width: '90%', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                        <Text style={{ fontSize: 14, fontWeight: 600 }}>
                            Proceed To Payment
                        </Text>
                    </View>
                </Pressable>



            </View>
        </>
    )
}

export default Productcart;

