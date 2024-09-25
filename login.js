import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native';

const Login = ({navigation}) => {
    return (
        <>
            <View style={{ margin: 40, alignItems: 'center' }}>

                <View style={{ marginBottom: 25 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 700 }}>Welcome Back</Text>
                </View>


                <View style={{ height: 50, backgroundColor: '#ccc5b9', width: '100%', borderRadius: 8, margin: 9 }}>
                    <TextInput placeholder='Username' style={{ color: 'black' }}></TextInput>
                </View>

                <View style={{ height: 50, backgroundColor: '#ccc5b9', width: '100%', borderRadius: 8, margin: 9 }}>
                    <TextInput placeholder='Password' style={{ color: 'black' }}></TextInput>
                </View>

                <View style={{ height: 50, backgroundColor: '#000', width: '90%', borderRadius: 50, margin: 9, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Login</Text>
                </View>

                <View style={{ height: 30, width: '90%', justifyContent: 'center',marginBottom:15,marginTop:15 }}>
                    <Pressable>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 11, color: 'blue' }}>Forgot password?</Text>
                    </Pressable>
                </View>

                <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 9, color: '#000' }}>Dont't have an account?</Text>
                    </View>
                    <View>
                        <Pressable onPress={()=>{navigation.navigate("signup")}}>
                            <Text style={{ fontSize: 11, color: 'blue', marginLeft: 8 }}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>


            </View>
        </>
    )
}

export default Login;
