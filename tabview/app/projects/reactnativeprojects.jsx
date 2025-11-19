import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function reactnativeprojects() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text>
          Traingin app
        </Text>
      </View>
      <View style={styles.card}>
        <Text>
          Profile App
        </Text>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({    container:{
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
    }})