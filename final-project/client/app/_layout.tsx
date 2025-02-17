import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { Colors } from '@/constants/Colors';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="createNew"
        options={{
          title: 'New Post',
          tabBarIcon: ({ color }) => <MaterialIcons name="add" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'My Profile',
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
