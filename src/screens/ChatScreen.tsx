import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { MessageBubble } from '../components/MessageBubble';
import { MessageInput } from '../components/MessageInput';
import { conversations } from '../data/conversations';
import { Message } from '../types';

interface ChatScreenProps {
  conversationId: string;
  onBack: () => void;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({ conversationId, onBack }) => {
  const conversation = conversations.find((c) => c.id === conversationId);
  
  const [messages, setMessages] = useState<Message[]>(conversation?.messages || []);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const handleSend = () => {
    if (inputText.trim().length === 0) return;

    const newMessage: Message = {
      id: `m${Date.now()}`,
      text: inputText.trim(),
      sender: 'me',
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText('');

    // Scroll to bottom after sending
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  if (!conversation) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Conversation not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton} activeOpacity={0.7}>
          <Ionicons name="chevron-back" size={28} color="#000000" />
        </TouchableOpacity>
        <Image source={{ uri: conversation.user.avatar }} style={styles.headerAvatar} />
        <Text style={styles.headerName}>{conversation.user.name}</Text>
      </View>

      {/* Messages */}
      <View style={styles.chatContainer}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MessageBubble text={item.text} sender={item.sender} />
          )}
          contentContainerStyle={styles.messageList}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        />
        <MessageInput
          value={inputText}
          onChangeText={setInputText}
          onSend={handleSend}
        />
      </View>
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
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    paddingRight: 8,
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  headerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  chatContainer: {
    flex: 1,
  },
  messageList: {
    paddingVertical: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#999999',
  },
});
