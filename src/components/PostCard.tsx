import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PostCardProps {
  userName: string;
  userAvatar: string;
  postImage: string;
  caption: string;
  likes: number;
  timestamp: number;
}

const formatTimestamp = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return `${Math.floor(days / 7)}w ago`;
};

export const PostCard: React.FC<PostCardProps> = ({
  userName,
  userAvatar,
  postImage,
  caption,
  likes,
  timestamp,
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: userAvatar }} style={styles.avatar} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: postImage }} style={styles.postImage} />

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={28}
            color={liked ? '#E91E63' : '#E91E63'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={26} color="#E91E63" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="paper-plane-outline" size={26} color="#E91E63" />
        </TouchableOpacity>
      </View>

      {/* Likes & Caption */}
      <View style={styles.info}>
        <Text style={styles.likes}>{likeCount.toLocaleString()} likes</Text>
        <Text style={styles.caption}>
          <Text style={styles.captionUser}>{userName}</Text> {caption}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#E91E63',
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  timestamp: {
    fontSize: 13,
    color: '#999',
  },
  postImage: {
    width: '100%',
    height: 400,
    backgroundColor: '#F5F5F5',
  },
  actions: {
    flexDirection: 'row',
    padding: 12,
    paddingBottom: 8,
  },
  actionButton: {
    marginRight: 16,
  },
  info: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  likes: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  caption: {
    fontSize: 14,
    color: '#000',
    lineHeight: 18,
  },
  captionUser: {
    fontWeight: '600',
  },
});
