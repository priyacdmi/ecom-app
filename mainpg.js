import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import axios from 'axios';
import { IPADDRESS } from "./IPaddress";

const Mainpg = ({ navigation }) => {

    // const cat = ["men", "women", "kids", "home", "decor", "footwear"]

    // const product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    const [Product, setproduct] = useState([])
    const [cat, setcat] = useState([])


    useEffect(() => {

        fetch(IPADDRESS + '/pro')
            .then(res => res.json())
            .then(data => setproduct(data.data));
           

        fetch(IPADDRESS + '/cat')
            .then(res => res.json())
            .then(data =>
               {       
                 setcat(data.data);
                 console.log(data , "hello");
                }
                );

    }, [])

    const banner = [
        require('./image/banner.png'),
        require('./image/banner2.png'),
        require('./image/banner3.png')
    ]
    return (
        <>
            {/* searchbar,cart */}
            <View style={{ backgroundColor: '#fffcf2', height: '100%' }}>
                <View style={{ flex: 2, padding: 5 }}>
                    <View style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <View style={style.search}>
                            <Image style={{ height: 20, width: 20, marginLeft: 9 }} source={require('./image/search-interface-symbol.png')}></Image>
                        </View>
                        <View>
                            <Image style={{ height: 35, width: 35 }} source={require('./image/favorite.png')}></Image>
                        </View>
                        <View>
                            <Image style={{ height: 35, width: 35 }} source={require('./image/cart.png')}></Image>
                        </View>
                    </View>

                    {/* catogary image */}

                    <View style={{ flex: 1 }}>
                        <ScrollView horizontal={true}>
                            <View style={{ flexDirection: 'row' }}>

                                {
                                    cat.map((item, index) => {
                                        return (
                                            <>

                                                <View style={{ margin: 5, alignItems: 'center', width: 80 }} key={index}>
                                                    <Pressable>
                                                        <Image style={style.catimg} source={{ uri: `${IPADDRESS}/images/${item.cat_image}`}}></Image>
                                                        <Text style={{ color: '#ccc5b9', fontSize: 10 }}>{item.name}</Text>
                                                    </Pressable>
                                                </View>

                                            </>
                                        )
                                    })
                                }

                            </View>

                        </ScrollView>
                    </View>

                </View>

                <View style={{ flex: 8 }}>
                    <ScrollView>

                        {/* advertise banner */}

                        <View style={{ height: 200, width: '100%', margin: 8 }}>

                            <ScrollView horizontal={true}>
                                <View style={{ flexDirection: 'row' }}>
                                    {
                                        banner.map((item, ind) => {
                                            return (
                                                <>
                                                    <View style={{ height: 200, margin: 8 }} key={ind}>
                                                        <Image style={{ objectFit: 'cover', height: 200, width: 390 }} source={item}></Image>
                                                    </View>
                                                </>
                                            )
                                        })
                                    }
                                </View>

                            </ScrollView>

                        </View>

                        {/* product */}

                        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                            {
                                Product.map((item,index) => {
                                    return (
                                        <>
                                            <View style={style.productbox} key={item.id}>
                                                {/* imagebox */}
                                                <Pressable onPress={() => { navigation.navigate("product", { data: item, image: {  uri: `${IPADDRESS}/images/${item.pro_image}` } }) }}>
                                                    <View style={{ height: '70%' }}>
                                                        <ImageBackground style={{ height: "100%" }} source={{ uri: `${IPADDRESS}/images/${item.pro_image}` }}>
                                                            <View style={{ height: '100%', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 6 }}>
                                                                <Image style={style.favoriteicon} source={require('./image/favorite.png')}></Image>
                                                            </View>
                                                        </ImageBackground>
                                                    </View>
                                                </Pressable>
                                                {/* price,descroption */}
                                                <View>
                                                    <Text style={{ color: '#ccc5b9', fontSize: 12, fontWeight: 600 }} >{item.name}</Text>
                                                    <Text style={{ color: '#ccc5b9', fontSize: 10 }} >{item.title}</Text>
                                                    <Text style={{ color: 'black', fontSize: 10 }} >{item.price}</Text>
                                                </View>
                                            </View>
                                        </>
                                    )
                                })
                            }

                        </View>

                    </ScrollView>
                </View>

            </View>
        </>
    )
}

const style = StyleSheet.create({
    search: {
        height: 40,
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 12,
        backgroundColor: '#ccc5b9',
        justifyContent: 'center'
    },
    catimg: {
        height: 50,
        width: 70,
        objectFit: "fill"
    },
    productbox: {
        height: 270,
        width: '45%',
        margin: 5
    },
    favoriteicon: {
        height: 30,
        width: 30,
        backgroundColor: '#ccc5b9',
        borderRadius: 50
    }
})

export default Mainpg;