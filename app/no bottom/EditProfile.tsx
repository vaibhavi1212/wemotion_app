import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo/vector-icons or similar icon library

export default function EditProfile() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.backButton}>
          <Link href={"/(tabs)/Account"}>
          <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
        </TouchableOpacity> */}
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>

      {/* Profile Picture Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photo-Sydney.jpg' }} // Replace with user's profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.changePhotoText}>Change Photo</Text>
      </View>

      {/* About You Section */}
      <Text style={styles.aboutyou}>About you</Text>
      <View style={styles.aboutYouSection}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.text}>Rosalie Gorczancy</Text>
          <Ionicons name="chevron-forward" size={20} color="black" style={styles.arrowIcon} />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.text}>Rosalie_Gorczancy</Text>
          <Ionicons name="chevron-forward" size={20} color="black" style={styles.arrowIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  changePhotoText: {
    marginTop: 10,
    fontSize: 16,
    color: '#007BFF',
  },
  aboutyou: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
  aboutYouSection: {
    marginTop: 20,
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  text: {
    marginLeft: 100,
  },
  arrowIcon: {
    marginLeft: 10,
  },
});
