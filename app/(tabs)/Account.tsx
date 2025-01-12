import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import Videos from '../video';
import Motions from '../motions';

const Tab = createMaterialTopTabNavigator();

export default function Account() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header with username and dropdown */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setIsBottomSheetOpen(true)} style={styles.dropdownButton}>
            <Text style={styles.username}>Rosalie_Gorczancy</Text>
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color="black"
              onPress={() => setIsBottomSheetOpen(true)}
            />
          </TouchableOpacity>

          {/* Top-right buttons */}
          <View style={styles.topRightButtons}>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="add" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="link" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Link href={"/no bottom/Settings"}>
              <MaterialIcons name="settings" size={26} color="black" />
              </Link>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Picture and Stats */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photo-Sydney.jpg' }}
            style={styles.profilePicture}
          />
          <Text style={styles.profileName}>Rosalie_Gorczancy</Text>
          <Text style={styles.replier}>Active Replier</Text>
          <View style={styles.stats}>
            <Link href={"/no bottom/Followers"}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>9.9M</Text>
              <Text>Followers</Text>
            </View>
            </Link>
            <Link href={"/no bottom/Following"}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>1600</Text>
              <Text>Following</Text>
            </View>
            </Link>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>2M</Text>
              <Text>Videos</Text>
            </View>
          </View>
        </View>
        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <Link href={"/no bottom/EditProfile"}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
          </Link>
        </TouchableOpacity>

        {/* Tab Navigator */}
        <Tab.Navigator>
          <Tab.Screen name="Videos" component={Videos} />
          <Tab.Screen name="Motions" component={Motions} />
        </Tab.Navigator>

        {/* BottomSheet */}
        {isBottomSheetOpen && (
          <View style={StyleSheet.absoluteFill}>
            <View style={styles.overlay} />
            <BottomSheet
              index={0}
              snapPoints={['45%']}
              enablePanDownToClose
              onClose={() => setIsBottomSheetOpen(false)}
              handleIndicatorStyle={{height: 0}}
            >
              <BottomSheetView style={styles.bottomSheetContent}>
                {/* Header Section */}
                <View style={styles.bottomSheetHeader}>
                  <Text style={styles.switchAccountText}>Switch Account</Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setIsBottomSheetOpen(false)}
                  >
                    <MaterialIcons name="close" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.separator} />

                {/* User Profile Section */}
                <View style={styles.profileRow}>
                  <Image
                    source={{
                      uri: 'https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photo-Sydney.jpg',
                    }}
                    style={styles.smallProfilePicture}
                  />
                  <Text style={styles.smallProfileName}>Rosalie_Gorczancy</Text>
                  <TouchableOpacity style={styles.radioButton} />
                </View>

                {/* Buttons Section */}
                <TouchableOpacity style={styles.createButton}>
                  <Link href={"/no bottom/SignUp"}>
                  <Text style={styles.createButtonText}>Create New Account</Text>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}>
                  <Link href={"/no bottom/LogIn"}>
                  <Text style={styles.loginButtonText}>Log In</Text>
                  </Link>
                </TouchableOpacity>
              </BottomSheetView>
            </BottomSheet>
          </View>
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  topRightButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  replier: {
    color: 'green',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#8701AD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheetContent: {
    flex: 1,
    padding: 16,
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchAccountText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  smallProfilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  smallProfileName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  createButton: {
    backgroundColor: '#8701AD',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  createButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
});
