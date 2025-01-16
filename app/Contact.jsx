import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Appearance,useColorScheme,Linking } from 'react-native';
import { Colors } from "@/constants/Colors";

export default function Contact() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const styles= createStyles(theme);
  const handleCallPress = () => {
    Linking.openURL('tel:1234567890');
  };

  const handleTextPress = () => {
    Linking.openURL('sms:1234567890');
  };

  const handleMailepress = ()=>{
    Linking.openURL('mailto:contact@coffeeshop.com')
  }

  return (
    <View style={styles.outerContainer}>
      <ScrollView 
        contentContainerStyle={styles.container} 
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.header}>Contact Us</Text>
        <Text style={styles.subHeader}>We'd love to hear from you!</Text>
        
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Your Name" placeholderTextColor={theme.placeholder} />
        
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Your Email" keyboardType="email-address" placeholderTextColor={theme.placeholder} />
        
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          multiline
          numberOfLines={4}
          placeholderTextColor={theme.placeholder}
        />
        
        <Button title="Send Message" onPress={() => alert('Message sent!')} />
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoHeader}>Our Location</Text>
          <Text style={styles.infoText}>123 Coffee Street</Text>
          <Text style={styles.infoText}>Coffee City, CO 12345</Text>
          
          <Text style={styles.infoHeader}>Phone</Text>
          <Text style={styles.infoText} onPress={handleCallPress}>(123) 456-7890</Text>
          <Text style={styles.infoText} onPress={handleTextPress}>Text us at (123) 456-7890</Text>
          
          <Text style={styles.infoHeader}>Email</Text>
          <Text style={styles.infoText} onPress={handleMailepress}>contact@coffeeshop.com</Text>
        </View>
      </ScrollView>
    </View>
  );
}

function createStyles(theme){
  return StyleSheet.create({
    outerContainer: {
      flex: 1,
      backgroundColor: theme.background,
    },
    container: {
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.text,
    },
    subHeader: {
      fontSize: 18,
      marginBottom: 20,
      color: theme.text,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      color: theme.text,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 15,
      borderRadius: 5,
      color: theme.text,
    },
    textArea: {
      height: 100,
    },
    infoContainer: {
      marginTop: 30,
    },
    infoHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      color: theme.text,
    },
    infoText: {
      fontSize: 16,
      marginBottom: 5,
      color: theme.text,
    },
  });
}

