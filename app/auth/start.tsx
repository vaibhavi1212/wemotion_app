import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function Start() {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/21/4b/73/214b736d289c1e6033915cd12110cace.jpg' }} // Replace with your image URL or local asset
      style={styles.background}
    >
      {/* Top-right login text */}
      <View style={styles.topRight}>
        <Text style={styles.loginText}>Login</Text>
      </View>

      {/* White overlay covering 50% of the screen */}
      <View style={styles.overlay}>
        {/* Button: Dive into WeMotions */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Dive into WeMotions</Text>
        </TouchableOpacity>

        {/* Button: Sign In */}
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  topRight: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
