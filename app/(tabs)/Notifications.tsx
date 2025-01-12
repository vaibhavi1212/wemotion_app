import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const notificationsData = [
  { id: '1', type: 'like', user: '@m.john_22', postImage: 'https://picsum.photos/seed/1/100/100', timestamp: '2025-01-01', message: 'liked your post' },
  { id: '2', type: 'comment', user: '@alice.black', postImage: 'https://picsum.photos/seed/2/100/100', timestamp: '2025-01-01', message: 'commented on your post' },
  { id: '3', type: 'like', user: '@mike_star', postImage: 'https://picsum.photos/seed/3/100/100', timestamp: '2025-01-02', message: 'liked your post' },
  { id: '4', type: 'comment', user: '@bellabelle', postImage: 'https://picsum.photos/seed/4/100/100', timestamp: '2025-01-03', message: 'commented on your post' },
];

export default function Notifications() {
  // Function to render individual notifications
  const renderNotification = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.notificationItem}>
        <Image source={{ uri: item.postImage }} style={styles.postImage} />
        <View style={styles.notificationText}>
          <Text style={styles.message}>
            <Text style={styles.user}>{item.user} </Text>
            {item.message}
          </Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Function to filter notifications by type
  const filterNotifications = (type: string) => {
    return notificationsData.filter((notification) => notification.type === type);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Notifications</Text>
      {/* New Notifications */}
      <Text style={styles.sectionTitle}>New</Text>
      <FlatList
        data={filterNotifications('like')}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        showsHorizontalScrollIndicator={false}
        style={styles.notificationsList}
      />

      {/* Today's Notifications */}
      <Text style={styles.sectionTitle}>Today</Text>
      <FlatList
        data={filterNotifications('comment')}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        showsVerticalScrollIndicator={false}
      />

      {/* Oldest Notifications */}
      <Text style={styles.sectionTitle}>Oldest</Text>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'regular',
    marginVertical: 10,
  },
  notificationsList: {
    marginBottom: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  postImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  message: {
    fontSize: 16,
  },
  user: {
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
  },
});