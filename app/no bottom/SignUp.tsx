// SignUp.tsx
import React from 'react';
import { Link } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have @expo/vector-icons installed

export default function SignUp() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topBar}>
        {/* Left Arrow */}
        <TouchableOpacity>
            <Link href={"/no bottom/Start"}>
          <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
        </TouchableOpacity>
        {/* Log In Option */}
        <TouchableOpacity>
        <Link href={"/no bottom/LogIn"}>
          <Text style={styles.loginText}>Log In</Text>
        </Link>
        </TouchableOpacity>
      </View>

      {/* Title and Subtitle */}
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>
          Join the conversation and become part of the community.
        </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Link href={"/no bottom/VerifyEmail"}>
        <Text style={styles.continueButtonText}>Continue</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6A5ACD',
  },
  header: {
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
    lineHeight: 20,
  },
  inputContainer: {
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#6A5ACD',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
