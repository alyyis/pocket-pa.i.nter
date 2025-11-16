import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MessageBubbleProps {
  text: string;
  sender: 'me' | 'them';
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ text, sender }) => {
  const isMe = sender === 'me';

  return (
    <View style={[styles.container, isMe ? styles.containerMe : styles.containerThem]}>
      <View style={[styles.bubble, isMe ? styles.bubbleMe : styles.bubbleThem]}>
        <Text style={[styles.text, isMe ? styles.textMe : styles.textThem]}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    flexDirection: 'row',
  },
  containerMe: {
    justifyContent: 'flex-end',
  },
  containerThem: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '75%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bubbleMe: {
    backgroundColor: '#E91E63',
    borderBottomRightRadius: 4,
  },
  bubbleThem: {
    backgroundColor: '#F5F5F5',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
  },
  textMe: {
    color: '#FFFFFF',
  },
  textThem: {
    color: '#000000',
  },
});
