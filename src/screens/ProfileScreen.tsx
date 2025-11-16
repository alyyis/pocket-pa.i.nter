import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export const ProfileScreen: React.FC = () => {
  const userStats = {
    posts: 24,
    followers: 1234,
    following: 567,
  };

  const userPosts = [
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=200',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=200',
    'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=200',
    'https://images.unsplash.com/photo-1518599807935-37015b9cefcb?w=200',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.username}>Rebecca_33</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#E91E63" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=1' }}
            style={styles.profileImage}
          />
          
          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{userStats.posts}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{userStats.followers.toLocaleString()}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{userStats.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioSection}>
          <Text style={styles.displayName}>Rebecca Johnson</Text>
          <Text style={styles.bio}>
            🎨 Artist & Painter{'\n'}
            📍 San Francisco{'\n'}
            ✨ Sharing my creative journey
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-outline" size={20} color="#E91E63" />
          </TouchableOpacity>
        </View>

        {/* Posts Grid */}
        <View style={styles.postsGrid}>
          {userPosts.map((post, index) => (
            <TouchableOpacity key={index} style={styles.postItem}>
              <Image source={{ uri: post }} style={styles.postImage} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F8BBD0',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  profileSection: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 3,
    borderColor: '#E91E63',
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 24,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  bioSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  displayName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 8,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#F8BBD0',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E91E63',
  },
  shareButton: {
    backgroundColor: '#F8BBD0',
    borderRadius: 8,
    padding: 10,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
  },
  postImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
});
