import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { getComments } from '../services/api'; // Import your API function

interface Comment {
  id: string;
  profileImage: string;
  username: string;
  text: string;
}

export const Comment = ({ isVisible, onClose, postId }: { isVisible: boolean; onClose: () => void; postId: string }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const snapPoints = ['50%'];

  // Fetch comments when bottom sheet is visible
  useEffect(() => {
    if (isVisible) {
      fetchComments();
    }
  }, [isVisible]);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await getComments(postId);
      // Assume API response contains an array of comments in response.votings
      const fetchedComments = response.votings.map((vote, index) => ({
        id: String(index),
        profileImage: `https://randomuser.me/api/portraits/men/${index % 10 + 1}.jpg`, // Mock image
        username: `user_${index + 1}`, // Mock username
        text: vote,
      }));
      setComments(fetchedComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  const renderCommentItem = ({ item }: { item: Comment }) => (
    <View style={styles.commentItem}>
      <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
      <View style={styles.commentTextContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isVisible ? 0 : -1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onChange={handleSheetChanges}
    >
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
      ) : (
        <BottomSheetFlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={renderCommentItem}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentTextContainer: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  commentText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  flatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
