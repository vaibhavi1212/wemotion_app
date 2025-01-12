import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUserSearch } from '../services/api'; // Import the updated API function
import { Link } from 'expo-router';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.trim() !== '') {
      const fetchSearchResults = async () => {
        setIsLoading(true);
        try {
          const results = await getUserSearch(query);
          setSearchResults(results); // Assuming `results` is the array of users
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          setIsLoading(false);
        }
      };

      const debounceTimeout = setTimeout(fetchSearchResults, 500);

      return () => clearTimeout(debounceTimeout); // Cleanup timeout on unmount or query change
    } else {
      setSearchResults([]); // Clear results if query is empty
    }
  }, [query]);

  const renderUserItem = ({ item }) => (
    <Link href={"/no bottom/user1"}>
    <TouchableOpacity style={styles.userItem}>
      <Image
        source={{ uri: item.profile_picture_url }}
        style={styles.profilePicture}
      />
      <View>
        <Text style={styles.userName}>{`${item.first_name} ${item.last_name}`}</Text>
        <Text style={styles.username}>@{item.username}</Text>
      </View>
    </TouchableOpacity>
    </Link>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor="#888"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
      </View>

      {/* Search Results */}
      {isLoading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => `${item.username}-${index}`}
          renderItem={renderUserItem}
          ListEmptyComponent={
            query && (
              <Text style={styles.emptyText}>No results found for "{query}"</Text>
            )
          }
        />
      )}
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
  loadingText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#888',
  },
  emptyText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#888',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  username: {
    fontSize: 14,
    color: '#666',
  },
});
