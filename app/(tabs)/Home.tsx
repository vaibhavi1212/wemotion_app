import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Trending from '../trending';
import Following from '../following';
import { useRouter } from "expo-router";

const Tab = createMaterialTopTabNavigator();

export default function Index() {
  const router = useRouter();
  

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,0,0)', // Transparent background
          // opacity: 0,
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'purple', // Customize the indicator color if needed
        },
        tabBarLabelStyle: {
          color: 'black', // Text color for labels
        },
      }}
      
    >
      <Tab.Screen name="Trending" component={Trending} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator>
  );
}
