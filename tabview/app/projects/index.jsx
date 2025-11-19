import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
    return (
        <ScrollView style={styles.container}>
            <Link style={styles.card} href={'/projects/reactnativeprojects'}>
                <Text>
                    React-Native
                </Text>
            </Link>
            <View style={styles.card}>
                <Text>
                    MERN Stack
                </Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
        flexDirection:'column',
       
    },
    card:{
        padding:12,
        backgroundColor:'#cecef8ff',
        borderRadius:10,
        flex:1,
         marginTop:6,
         fontWeight:'bold',
    }
})