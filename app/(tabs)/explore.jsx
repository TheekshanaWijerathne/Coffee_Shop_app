import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'


export class explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Explore</Text>
        <Text style={styles.text}>Discover the best coffee shops around you!</Text>
      </View>
    )
  }
}

export default explore


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#f5f5f5', // Added background color
    padding: 20, // Added padding
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10, // Added border radius
    marginBottom: 20, // Added margin bottom
  },
  text:{
    color:"#333", // Changed text color
    fontSize:24, // Reduced font size
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'rgba(255,255,255,0.8)', // Changed background color
    padding: 10, // Added padding
    borderRadius: 5, // Added border radius
  }
})
