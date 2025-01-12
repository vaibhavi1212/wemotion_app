import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";


export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // To manage button state
  // const navigation = useNavigation(); // React Navigation Hook

  const router = useRouter();

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = async () => {
    if (!isFormValid) {
      Alert.alert('Error', 'Please fill in all the fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://api.wemotions.app/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mixed: 'vaibhavijadhav1212@gmail.com', // Replace with the correct key if needed
          password: 'Vaibhavi1212@',
          app_name: 'wemotions',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Navigate to VerifyEmail page on success
        Alert.alert('Success', 'Login successful!');
        console.log(data); // For debugging
         // Redirect to the index page
        router.push("/Home"); // Navigate to the home page
      } else {
        // Handle errors
        Alert.alert('Error', data.message || 'Login failed. Please try again.');
        console.error('Error:', data);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Heading */}
      <View style={styles.textContainer}>
        <Text style={styles.loginTitle}>Login</Text>
        <Text style={styles.loginSubtitle}>
          Login to join the conversation and the community.
        </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email or Username"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, (!isFormValid || loading) && styles.disabledButton]}
        disabled={!isFormValid || loading}
        onPress={handleLogin}
      >
        <Text style={styles.continueButtonText}>
          {loading ? 'Loading...' : 'Continue'}
        </Text>
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
    marginTop: 50,
    marginLeft: 16,
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  loginSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
    lineHeight: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  continueButton: {
    alignSelf: 'center',
    width: '90%',
    padding: 16,
    backgroundColor: '#6A5ACD',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
