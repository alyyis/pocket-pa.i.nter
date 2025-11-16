import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PostCard } from '../components/PostCard';
import { posts } from '../data/posts';

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>PocketPainter</Text>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            userName={item.user.name}
            userAvatar={item.user.avatar}
            postImage={item.image}
            caption={item.caption}
            likes={item.likes}
            timestamp={item.timestamp}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8BBD0',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
    fontStyle: 'italic',
  },
});
