import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useEvent } from 'expo';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { Comment } from './components/bottomSheet';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { VideoView, createVideoPlayer } from 'expo-video';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getFeed, getComments } from './services/api'; 

interface Comment {
  id: string;
  profileImage: string;
  username: string;
  text: string;
}

export default function Trending() {
  const [feed, setFeed] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false); // State for more-vert bottom sheet

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const data = await getFeed();
        setFeed(data.posts);
      } catch (error) {
        console.error('Error fetching feed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  
  
  const renderItem = ({ item }: { item: any }) => {
    const player = createVideoPlayer(item.video_link);

    return (
      <View style={styles.feedItem}>
        {/* Video Player */}
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          contentFit="contain"
        />

        {/* User Info */}
        <View style={styles.userInfo}>
          <Image source={{ uri: item.picture_url }} style={styles.userImage} />
          <View style={styles.userInfoText}>
            <Text style={styles.username}>
              {item.first_name} {item.last_name}
            </Text>
            <Text style={styles.caption}>{item.title}</Text>
          </View>
        </View>
      </View>
    );
  };

  

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={feed}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* Interactive Icon Buttons - Positioned on the right side vertically */}
      <View style={styles.iconButtonsContainer}>
        {/* Like Button */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setLiked(!liked)} // Toggle like status
        >
          <FontAwesome5
            name={liked ? 'heart' : 'heart'} // Filled or outlined heart
            size={24}
            color={liked ? 'red' : 'white'} // Red for liked, white for not liked
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => setCommentOpen(true)}>
          <MaterialIcons name="comment" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => setIsBottomSheetOpen(true)}>
          <MaterialIcons name="send" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="bookmark" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => setIsMoreOptionsOpen(true)}>
          <MaterialIcons name="more-vert" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Overlay and BottomSheet */}
      {commentOpen && (
        <View style={StyleSheet.absoluteFill}>
          <View style={styles.overlay} />
          <Comment isVisible={commentOpen} onClose={() => setCommentOpen(false)} />
        </View>
      )}

      {/* Overlay for Bottom Sheets */}
      {(isBottomSheetOpen || isMoreOptionsOpen) && (
        <View style={StyleSheet.absoluteFill}>
        <View style={styles.overlay} />
        </View>
      )}

      {/* Bottom Sheet for "Send" */}
      {isBottomSheetOpen && (
        <BottomSheet
          index={0}
          snapPoints={['50%']}
          enablePanDownToClose
          onClose={() => setIsBottomSheetOpen(false)}
        >
          <BottomSheetView style={styles.bottomSheetContent}>
            <Text style={styles.sheetHeader}>Share this video</Text>
            <TouchableOpacity>
              <Text style={styles.sheetOption}>Send via Direct Message</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.sheetOption}>Copy Link</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.sheetOption}>Share on social media</Text>
            </TouchableOpacity>
            <View style={styles.socialIconsContainer}>
              <TouchableOpacity style={styles.iconWrapper}>
                <FontAwesome5 name="whatsapp" size={30} color="#25D366" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconWrapper}>
                <FontAwesome5 name="instagram" size={30} color="#E1306C" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconWrapper}>
                <FontAwesome5 name="facebook" size={30} color="#1877F2" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconWrapper}>
                <FontAwesome5 name="linkedin" size={30} color="#0077B5" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconWrapper}>
                <FontAwesome5 name="twitter" size={30} color="#1DA1F2" />
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}

      {/* Bottom Sheet for "More-Vert" */}
      {isMoreOptionsOpen && (
        <BottomSheet
          index={0}
          snapPoints={['50%']}
          enablePanDownToClose
          onClose={() => setIsMoreOptionsOpen(false)}
        >
          <BottomSheetView style={styles.bottomSheetContent}>
            <Text style={styles.sheetHeader}>Options</Text>
            <TouchableOpacity>
              <Text style={styles.sheetOption}>Report</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.sheetOption}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.sheetOption}>Not Interested</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  feedItem: {
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 500,
  },
  bottomSheetContent: {
    padding: 20,
  },
  sheetHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sheetOption: {
    fontSize: 16,
    paddingVertical: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  iconWrapper: {
    paddingHorizontal: 10,
  },
  userInfo: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfoText: {
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  caption: {
    fontSize: 12,
    color: '#fff',
  },
  iconButtonsContainer: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -50 }],
  },
  iconButton: {
    marginBottom: 28,
  },
    profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  
  flatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
  },

});
