import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface MessageInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  value,
  onChangeText,
  onSend,
}) => {
  const handleSend = () => {
    if (value.trim().length > 0) {
      onSend();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Message..."
            placeholderTextColor="#999999"
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[styles.sendButton, !value.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!value.trim()}
            activeOpacity={0.7}
          >
            <Ionicons
              name="send"
              size={20}
              color={value.trim() ? '#E91E63' : '#CCCCCC'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E0E0E0',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 40,
  },
  input: {
    flex: 1,
    fontSize: 15,
    maxHeight: 100,
    color: '#000000',
  },
  sendButton: {
    marginLeft: 8,
    padding: 4,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
});
