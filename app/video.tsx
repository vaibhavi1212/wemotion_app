import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';

// Sample data for posts
const posts = [
  { id: '1', imageUrl: 'https://i.pinimg.com/736x/19/89/44/198944f71d18c01d4316fd76d3a5a410.jpg' },
  { id: '2', imageUrl: 'https://i.pinimg.com/736x/77/b4/21/77b421686d6088e6527cf57d68c69e96.jpg' },
  { id: '3', imageUrl: 'https://i.pinimg.com/736x/47/4d/74/474d749c6a9699f4b2057edb553d40c0.jpg' },
  { id: '4', imageUrl: 'https://i.pinimg.com/236x/87/0d/83/870d833d3741fa5c190406df866d12a1.jpg' },
  { id: '5', imageUrl: 'https://i.pinimg.com/236x/81/91/af/8191af327537ecd53e3a66837be8d827.jpg' },
  { id: '6', imageUrl: 'https://i.pinimg.com/474x/c8/4e/99/c84e9983b56216d85eced012a75215c8.jpg' },
  { id: '7', imageUrl: 'https://i.pinimg.com/236x/7d/5c/c6/7d5cc60fe88abd1fab066611dfb9f60c.jpg' },
  { id: '8', imageUrl: 'https://i.pinimg.com/236x/0a/42/13/0a42135939719806c381436f388b3ada.jpg' },
  { id: '9', imageUrl: 'https://i.pinimg.com/474x/7b/d3/60/7bd360b1861c7a1c4b5ac184b5f21eab.jpg' },
];

const windowWidth = Dimensions.get('window').width;

export default function Videos() {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // Number of columns for the grid
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false} // Hides scroll indicator
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3, // Distance between screen edges and posts
    backgroundColor: '#fff',
  },
  grid: {
    justifyContent: 'space-between',
  },
  postContainer: {
    flex: 1 / 3, // Adjust to fit three items per row
    margin: 1.5, // Half of the padding (3) for even spacing
  },
  postImage: {
    width: (windowWidth - 12) / 3, // Screen width minus total padding divided by 3
    height: (windowWidth - 12) / 3, // Make it square
  },
});
