import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export const AskAIScreen: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = () => {
    if (!question.trim()) return;

    setLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setResponse(
        `This is a demo AI response to: "${question}"\n\nIn a real app, this would connect to an AI API like OpenAI, Claude, or similar service to generate intelligent responses based on your question.`
      );
      setLoading(false);
    }, 1500);
  };

  const handleClear = () => {
    setQuestion('');
    setResponse('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="sparkles" size={24} color="#E91E63" />
        <Text style={styles.headerTitle}>Ask AI</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Input Section */}
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            placeholder="Ask me anything..."
            placeholderTextColor="#999"
            multiline
            value={question}
            onChangeText={setQuestion}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.askButton, !question.trim() && styles.buttonDisabled]}
              onPress={handleAsk}
              disabled={!question.trim() || loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name="send" size={20} color="#FFFFFF" />
                  <Text style={styles.buttonText}>Ask</Text>
                </>
              )}
            </TouchableOpacity>
            {response && (
              <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                <Text style={styles.clearButtonText}>Clear</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Response Section */}
        {response && (
          <View style={styles.responseSection}>
            <View style={styles.responseHeader}>
              <Ionicons name="bulb" size={20} color="#E91E63" />
              <Text style={styles.responseTitle}>AI Response</Text>
            </View>
            <Text style={styles.responseText}>{response}</Text>
          </View>
        )}

        {/* Suggestions */}
        {!response && !loading && (
          <View style={styles.suggestionsSection}>
            <Text style={styles.suggestionsTitle}>Try asking:</Text>
            {[
              'What painting techniques work best for beginners?',
              'How do I improve my color mixing?',
              'What are some creative post ideas?',
            ].map((suggestion, index) => (
              <TouchableOpacity
                key={index}
                style={styles.suggestionChip}
                onPress={() => setQuestion(suggestion)}
              >
                <Text style={styles.suggestionText}>{suggestion}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    gap: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  inputSection: {
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    minHeight: 120,
    textAlignVertical: 'top',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  askButton: {
    flex: 1,
    backgroundColor: '#E91E63',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonDisabled: {
    backgroundColor: '#CCC',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  clearButton: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
  },
  clearButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  responseSection: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#E91E63',
  },
  responseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  responseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  responseText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  suggestionsSection: {
    marginTop: 8,
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 12,
  },
  suggestionChip: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  suggestionText: {
    fontSize: 14,
    color: '#333',
  },
});
