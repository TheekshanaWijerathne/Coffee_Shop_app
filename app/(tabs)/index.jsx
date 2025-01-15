import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import icedCofeeImage from "@/assets/images/iced-coffee.png"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={icedCofeeImage}
      resizeMode='cover'
      style={styles.image}>
      <Text style={styles.text}>Coffee shop</Text>
      </ImageBackground>
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
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:"white",
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
  }
})