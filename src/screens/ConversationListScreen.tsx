import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ConversationItem } from '../components/ConversationItem';
import { conversations } from '../data/conversations';

export const ConversationListScreen: React.FC = () => {
  const router = useRouter();

  const handleConversationPress = (conversationId: string) => {
    try {
      router.push(`/chat/${conversationId}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>
      <FlatList
        data={conversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const lastMessage = item.messages[item.messages.length - 1];
          return (
            <ConversationItem
              name={item.user.name}
              avatar={item.user.avatar}
              lastMessage={lastMessage.text}
              timestamp={lastMessage.timestamp}
              onPress={() => handleConversationPress(item.id)}
            />
          );
        }}
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
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F8BBD0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
  },
});
