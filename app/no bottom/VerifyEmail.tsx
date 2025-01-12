// VerifyEmail.tsx
import React from 'react';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Requires @expo/vector-icons or react-native-vector-icons

export default function VerifyEmail() {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow}>
        <Link href={"/no bottom/LogIn"}>
        <Ionicons name="arrow-back" size={24} color="#333" />
        </Link>
      </TouchableOpacity>

      {/* Title and Subtitle */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Verify your account</Text>
        <Text style={styles.subtitle}>
          Please verify your account by clicking on the link we sent to your email.
        </Text>
      </View>

      {/* Email Icon */}
      <View style={styles.iconContainer}>
        <View style={styles.iconBackground}>
          <Ionicons name="mail-outline" size={48} color="#fff" />
        </View>
      </View>

      {/* Open Email App Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Open Email App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  backArrow: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  textContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBackground: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#6A5ACD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    padding: 16,
    backgroundColor: '#6A5ACD',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
