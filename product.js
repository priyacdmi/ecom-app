import React, { Component, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { IPADDRESS } from './IPaddress';
import { Addtocart } from './redux/actions/cartaction';
import { useSelector, useDispatch } from 'react-redux';

const Product = ({ navigation, route }) => {

    const { id } = route.params;
    const [product, setproduct] = useState({})
    const [Pid, setpid] = useState([])


    useEffect(() => {

        fetch(`${IPADDRESS}/pro/${id}`)
            .then(res => res.json())
            .then(data => setproduct(data.data));
         
    }, [id])
   
    const dispatch = useDispatch();

    const handleaddcart = (val) => {
        dispatch(Addtocart(val));
        navigation.navigate("productbag")
      };


    const colors = ["#d90429", "#03045e", "#ff0a54", "#000000", "#386641", "#fdc500"]
    const colorstring = ["Red", "Blue", "Pink", "Black", "Green", "Yellow"]
    const [color, setcolor] = useState("Red")

    const sizestring = ["26", "28", "30", "32", "34", "36"]
    const [size, setsize] = useState('')


    const changecolor = (index) => {
        setcolor(colorstring[index])
    }
    const changesize = (index) => {
        setsize(sizestring[index])
    }


    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <ScrollView>
                {/* product image */}
                <View style={{ height: 470 }}>
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ margin: 8 }}>
                                <Image style={{ objectFit: 'cover', width: 390, height: '100%' }} source={{ uri: `${IPADDRESS}/images/${product.pro_image}` }}></Image>
                            </View>

                        </View>
                    </ScrollView>
                </View>



                {/* product brand,price */}

                <View style={{ margin: 14 }}>
                    <Text style={{ color: '#6c757d' }}>{product.name}</Text>
                    <Text style={{ color: '#6c757d', fontSize: 11 }}>{product.title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', fontSize: 12, fontWeight: 600 }}>$ {product.price}</Text>
                        <Text style={{ color: '#6c757d', fontSize: 12, textDecorationLine: "line-through" }}>$ {product.price + 33} </Text>
                        <Text style={{ color: '#16db65', fontSize: 12 }}>74% OFF</Text>
                    </View>
                    <Text style={{ color: '#6c757d', fontSize: 8 }}>Price inclusive of all taxes</Text>
                </View>

                <View style={{ height: 10, backgroundColor: '#ccc5b9' }}></View>

                {/* color  */}

                <View>
                    <Text style={{ color: 'black', fontSize: 12, fontWeight: 600, padding: 10 }}>Color</Text>
                    <Text style={{ color: 'black', fontSize: 10, padding: 10 }}>{color}</Text>
                    <View style={{ flexDirection: 'row', margin: 10 }}>

                        {
                            colors.map((item, index) => {
                                return (
                                    <>
                                        <Pressable onPress={() => changecolor(index)}>
                                            <View style={{ height: 35, width: 35, borderRadius: 50, backgroundColor: item, margin: 5 }}></View>
                                        </Pressable>
                                    </>
                                )
                            })
                        }

                    </View>
                </View>

                <View style={{ height: 10, backgroundColor: '#ccc5b9' }}></View>

                {/* size */}
                <View>
                    <Text style={{ color: 'black', fontSize: 12, fontWeight: 600, padding: 10 }}>Size - {size}</Text>

                    <View style={{ flexDirection: 'row', margin: 10 }}>

                        {
                            sizestring.map((item, index) => {
                                return (
                                    <>
                                        <Pressable onPress={() => changesize(index)}>
                                            <View style={{ height: 40, width: 40, backgroundColor: "gray", margin: 5, justifyContent: 'center', borderRadius: 10 }}>
                                                <Text style={{ textAlign: "center", fontSize: 10 }}>{item}</Text>
                                            </View>
                                        </Pressable>
                                    </>
                                )
                            })
                        }

                    </View>
                </View>

                <View style={{ height: 10, backgroundColor: '#ccc5b9' }}></View>

                {/* product description    */}

                <View style={{ margin: 20 }}>
                    <Text style={{ color: 'black', marginBottom: 10, fontSize: 12, fontWeight: 600 }}>Product Details</Text>
                    <Text style={{ color: 'black', fontSize: 9 }}>{product.des}</Text>
                </View>

                <View style={{ height: 5, backgroundColor: '#ccc5b9' }}></View>

                {/* add to cart,fav,share */}

                <View style={{ flexDirection: 'row', width: '100%', height: 60 }}>
                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="share" size={40} color="#000" />
                    </View>

                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="heart" size={40} color="#000" />
                    </View>

                    <View style={{ width: '60%', backgroundColor: "#000", justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        {/* <Pressable onPress={() => { navigation.navigate("productbag") }}> */}
                        <Pressable onPress={() => handleaddcart(product)}>
                            <View style={{ width: 'auto' }}>
                                <Icon name="shopping-cart" size={40} >
                                    <Text style={{ fontFamily: 'Arial', fontSize: 20 }}>
                                        Add to Bag
                                    </Text>
                                </Icon>
                            </View>
                        </Pressable>
                    </View>
                </View>




            </ScrollView>

        </View>
    )
}

export default Product;

