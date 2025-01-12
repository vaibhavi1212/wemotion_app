// Start.tsx
import React from 'react';
import { Link } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function Start() {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/05/a6/a9/05a6a92ec3746d0655be277d28954899.jpg' }} // Replace with your background image URL
      style={styles.background}
    >
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Link href={"/no bottom/LogIn"}>
        <Text style={styles.loginText}>Log In</Text>
        </Link>
      </TouchableOpacity>

      {/* Overlay Content */}
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          {/* Main Title */}
          <Text style={styles.title}>Think..Record..Engage</Text>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Get started with just a few taps. Jump right into engaging conversations and
            connect with others effortlessly, no delay, no hassle.
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Dive into WeMotions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Link href={"/no bottom/SignUp"}>
            <Text style={styles.secondaryButtonText}>Sign Up</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  loginButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  overlay: {
    backgroundColor: '#fff',
    height: '40%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  textContainer: {
    marginTop: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    lineHeight: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: '#6A5ACD',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: '90%',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
