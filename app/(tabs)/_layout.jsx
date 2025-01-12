import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const [activeIcon, setActiveIcon] = useState('reply'); // State to track active icon

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust based on platform
    >
      {/* Tabs Navigation */}
      <Tabs
        screenOptions={({ navigation }) => ({
          tabBarActiveTintColor: '#8701AD',
          headerShown: false,
          tabBarStyle: {
            justifyContent: 'space-between', // Ensure even spacing
            height: "8%",
          },
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={styles.tabBarButton} // Custom style for touchable area
            />
          ),
        })}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
            tabBarItemStyle: {
              marginLeft: -40, // Move left
            },
          }}
        />
        <Tabs.Screen
          name="Search"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="search" color={color} />,
            tabBarItemStyle: {
              marginLeft: -60, // Move slightly left
            },
          }}
        />
        <Tabs.Screen
          name="Notifications"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="bell" color={color} />,
            tabBarItemStyle: {
              marginRight: -60, // Move slightly right
            },
          }}
        />
        <Tabs.Screen
          name="Account"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
            tabBarItemStyle: {
              marginRight: -40, // Move further right
            },
          }}
        />
      </Tabs>

      {/* Floating Circular Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <FontAwesome name={activeIcon} size={24} color="white" />
      </TouchableOpacity>

      {/* Options Below the Circular Button */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => setActiveIcon('video-camera')} style={styles.optionButton}>
          <Text style={styles.optionText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveIcon('reply')} style={styles.optionButton}>
          <Text style={styles.optionText}>Reply</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30, // Adjust to place above the options
    left: '50%',
    marginLeft: -30, // Half of button width to center it
    width: 60,
    height: 60,
    borderRadius: 35, // Circular shape
    backgroundColor: '#8701AD', // Purple background
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, // Ensure it appears above other elements
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 10, // Adjust to place below the circular button
    left: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -60, // Center the options horizontally
  },
  optionButton: {
    marginHorizontal: 15, // Spacing between buttons
  },
  optionText: {
    fontSize: 13,
    fontWeight: "semibold",
    color: '#000', // Match the theme color
  },
});
