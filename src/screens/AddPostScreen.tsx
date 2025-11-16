import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export const AddPostScreen: React.FC = () => {
  const [caption, setCaption] = useState('');
  const [imageSelected, setImageSelected] = useState(false);

  const handleSelectImage = () => {
    setImageSelected(true);
  };

  const handlePost = () => {
    alert('Post created! (This is a demo - no backend)');
    setCaption('');
    setImageSelected(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Post</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Image Selector */}
        <TouchableOpacity style={styles.imageSelector} onPress={handleSelectImage}>
          {imageSelected ? (
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400' }}
              style={styles.selectedImage}
            />
          ) : (
            <View style={styles.placeholderContainer}>
              <Ionicons name="image-outline" size={64} color="#E91E63" />
              <Text style={styles.placeholderText}>Tap to select image</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Caption Input */}
        <TextInput
          style={styles.captionInput}
          placeholder="Write a caption..."
          placeholderTextColor="#999"
          multiline
          value={caption}
          onChangeText={setCaption}
        />

        {/* Post Button */}
        <TouchableOpacity
          style={[styles.postButton, !imageSelected && styles.postButtonDisabled]}
          onPress={handlePost}
          disabled={!imageSelected}
        >
          <Text style={styles.postButtonText}>Share Post</Text>
        </TouchableOpacity>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F8BBD0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  imageSelector: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
    borderWidth: 2,
    borderColor: '#E91E63',
    borderStyle: 'dashed',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  captionInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  postButton: {
    backgroundColor: '#E91E63',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  postButtonDisabled: {
    backgroundColor: '#CCC',
  },
  postButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
