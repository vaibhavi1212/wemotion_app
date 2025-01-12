import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import Videos from '../video';

const Tab = createMaterialTopTabNavigator();

export default function user1() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <Link href={"/no bottom/SearchPage"}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </Link>
          </TouchableOpacity>
          <Text style={styles.username}>Nidhi_Gupta</Text>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setIsBottomSheetOpen(true)}
          >
            <MaterialIcons name="more-vert" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Profile Picture and Stats */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://wemotions-assets.s3.amazonaws.com/profile/14.png' }}
            style={styles.profilePicture}
          />
          <Text style={styles.profileName}>Nidhi_Gupta</Text>
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
        {/* Follow Button */}
      <TouchableOpacity
        style={[styles.followButton, isFollowing ? styles.followingButton : styles.followButton]}
        onPress={handleFollowToggle}
      >
        <Text style={isFollowing ? styles.followingText : styles.followText}>
          {isFollowing ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>

        <Tab.Navigator>
          <Tab.Screen name="Videos" component={Videos} />
        </Tab.Navigator>

        {/* BottomSheet */}
        {isBottomSheetOpen && (
          <View style={StyleSheet.absoluteFill}>
            <View style={styles.overlay} />
            <BottomSheet
              index={0}
              snapPoints={['40%']}
              enablePanDownToClose
              onClose={() => setIsBottomSheetOpen(false)}
              
            >
              <BottomSheetView style={styles.bottomSheetContent}>
                {/* Close Icon */}
                <View style={styles.bottomSheetHeader}>
                  <TouchableOpacity
                    onPress={() => setIsBottomSheetOpen(false)}
                    style={styles.closeButton}
                  >
                    <MaterialIcons name="close" size={24} color="black" />
                  </TouchableOpacity>
                </View>

                {/* Report and Block Options */}
                <View style={styles.optionsContainer}>
                  <TouchableOpacity style={styles.option}>
                    <FontAwesome5 name="flag" size={20} color="red" />
                    <Text style={styles.optionText}>Report User</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.option}>
                    <MaterialIcons name="block" size={20} color="red" />
                    <Text style={styles.optionText}>Block User</Text>
                  </TouchableOpacity>
                </View>
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
  username: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: -20,
  },
  iconButton: {
    padding: 5,
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
  followButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#8701AD',
    backgroundColor: '#8701AD',
    alignSelf: 'center',
    marginBottom: 10,
  },
  followingButton: {
    backgroundColor: '#fff',
    borderColor: '#8701AD',
    borderWidth: 1,
    marginBottom: 10,
  },
  followText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  followingText: {
    color: '#8701AD',
    fontWeight: 'bold',
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#8701AD',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
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
    justifyContent: 'flex-end',
  },
  closeButton: {
    padding: 5,
  },
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
