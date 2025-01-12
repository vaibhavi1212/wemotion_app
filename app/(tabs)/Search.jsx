import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // Import the router hook
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / numColumns;

const mockImages = Array.from({ length: 30 }, (_, index) => ({
  id: `${index}`,
  uri: `https://picsum.photos/seed/${index}/300/300`,
}));

export default function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter(); // Initialize the router

  const handleSearchBarClick = () => {
    router.push('/no bottom/SearchPage'); // Navigate to the "searchpage"
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={handleSearchBarClick}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#888"
            editable={false} // Make the input non-editable (since it navigates to another page)
          />
        </TouchableOpacity>
      </View>

      {/* Grid of Images */}
      <FlatList
        data={mockImages}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    elevation: 2,
  },
  gridItem: {
    width: imageSize,
    height: imageSize,
    margin: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
