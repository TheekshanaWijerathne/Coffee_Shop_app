import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coffee shop</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:"white",
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center'
  }
})