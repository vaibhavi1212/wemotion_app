// Settings.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <View style={styles.container}>
      {/* Profile Option */}
      <Text style={styles.text}>Account</Text>
      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLeft}>
          <FontAwesome5 name="user" size={20} color="black" />
          <Text style={styles.optionText}>Manage account</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Theme Toggle Option */}
      <Text style={styles.text}>General</Text>
      <View style={styles.option}>
        <View style={styles.optionLeft}>
          <MaterialIcons name="brightness-6" size={24} color="black" />
          <Text style={styles.optionText}>Theme</Text>
        </View>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLeft}>
          <FontAwesome5 name="globe" size={20} color="black" />
          <Text style={styles.optionText}>One vibe tribe</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLeft}>
          <FontAwesome5 name="search" size={20} color="black" />
          <Text style={styles.optionText}>search for the best vibe</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLeft}>
          <FontAwesome5 name="lock" size={20} color="black" />
          <Text style={styles.optionText}>Privacy Policy</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Terms and Conditions */}
      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLeft}>
          <FontAwesome5 name="file-alt" size={22} color="black" />
          <Text style={styles.optionText}>Terms and Conditions</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Sign Out Option */}
      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLeft}>
          <MaterialIcons name="logout" size={24} color="black" />
          <Text style={styles.optionText}>Sign Out</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
