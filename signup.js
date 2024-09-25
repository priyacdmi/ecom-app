import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native';

const Signup = ({navigation}) => {
    return (
        <>
            <View style={{ margin: 40, alignItems: 'center' }}>
                <View>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 700 }}>Sign up</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 12, color: 'black' }}>Create your account</Text>
                </View>

                <View style={{ height: 50, backgroundColor: '#ccc5b9', width: '100%', borderRadius: 8, margin: 9 }}>
                    <TextInput placeholder='Username' style={{ color: 'black' }}></TextInput>
                </View>

                <View style={{ height: 50, backgroundColor: '#ccc5b9', width: '100%', borderRadius: 8, margin: 9 }}>
                    <TextInput placeholder='Email' style={{ color: 'black' }}></TextInput>
                </View>

                <View style={{ height: 50, backgroundColor: '#ccc5b9', width: '100%', borderRadius: 8, margin: 9 }}>
                    <TextInput placeholder='Password' style={{ color: 'black' }}></TextInput>
                </View>

                <View style={{ height: 50, backgroundColor: '#ccc5b9', width: '100%', borderRadius: 8, margin: 9 }}>
                    <TextInput placeholder='Comfirm password' style={{ color: 'black' }}></TextInput>
                </View>

                <View style={{ height: 50, backgroundColor: '#000', width: '90%', borderRadius: 50, margin: 9, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Sign up</Text>
                </View>

                <View style={{ height: 30, width: '90%', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'black' }}>Or</Text>
                </View>

                <View style={{ height: 50, width: '90%', borderRadius: 50, margin: 9, justifyContent: 'center', borderColor: '#000', borderWidth: 2 }}>
                    <Text style={{ textAlign: 'center', color: '#000', fontSize: 10 }}>Sign in with Google</Text>
                </View>

                <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 9, color: '#000' }}>Already have an account?</Text>
                    </View>
                    <View>
                        <Pressable>
                            <Text style={{ fontSize: 11, color: 'blue', marginLeft: 8 }}>Login</Text>
                        </Pressable>
                    </View>
                </View>


            </View>
        </>
    )
}

export default Signup;
