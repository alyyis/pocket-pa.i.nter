# PocketPainter 🎨

An Instagram-style social media app built with React Native (Expo) and TypeScript. Features a beautiful pink theme, DM messaging, posts feed, AI assistant, and user profiles.

![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey)
![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue)
![Expo](https://img.shields.io/badge/Expo-~54.0-000020)

## Features

### Home Feed
- Instagram-style posts feed with images
- Like, comment, and share functionality
- User avatars with pink accent borders
- Real-time like counter
- Timestamp for each post

### Messages (DM)
- Conversation list with last message preview
- Full chat screen with message history
- Message bubbles (pink for sent, gray for received)
- Real-time message input with send button
- Keyboard-aware design
- Navigation between conversation list and individual chats

### Add Post
- Image selection interface
- Caption input
- Share button to create posts
- Demo implementation (frontend only)

### Ask AI
- AI assistant interface
- Question input with multi-line support
- Simulated AI responses
- Suggested questions
- Clear/reset functionality

### Profile
- User profile with avatar and stats
- Posts, followers, following counts
- Bio section
- Edit profile button
- 3x3 posts grid gallery
- Pink-themed UI elements

## Design

- **Theme Color**: Pink (#E91E63) and Light Pink (#F8BBD0)
- **UI Style**: Instagram-inspired with modern, clean interface
- **Navigation**: Bottom tab navigation with 5 main screens
- **Icons**: SF Symbols for iOS-style icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/alyyis/pocket-pa.i.nter.git
   cd pocket-painter
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

4. Run on your device
   - **iOS**: Press `i` to open in iOS simulator
   - **Android**: Press `a` to open in Android emulator
   - **Physical Device**: Scan QR code with Expo Go app

## App Structure

```
pocket-painter/
├── app/
│   ├── (tabs)/              # Tab navigation screens
│   │   ├── index.tsx        # Home feed
│   │   ├── explore.tsx      # Messages list
│   │   ├── add-post.tsx     # Create post
│   │   ├── ask-ai.tsx       # AI assistant
│   │   └── profile.tsx      # User profile
│   ├── chat/
│   │   └── [id].tsx         # Individual chat screen
│   └── _layout.tsx          # Root layout with navigation
├── src/
│   ├── components/          # Reusable components
│   │   ├── PostCard.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── MessageInput.tsx
│   │   └── ConversationItem.tsx
│   ├── screens/             # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── ConversationListScreen.tsx
│   │   ├── ChatScreen.tsx
│   │   ├── AddPostScreen.tsx
│   │   ├── AskAIScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── data/                # Mock data
│   │   ├── posts.ts
│   │   └── conversations.ts
│   └── types/               # TypeScript types
│       └── index.ts
├── constants/
│   └── theme.ts             # App colors and theme
└── package.json
```

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router (file-based routing)
- **UI Components**: React Native core components
- **Icons**: @expo/vector-icons (Ionicons)
- **State Management**: React hooks (useState, useRef)

## Key Dependencies

```json
{
  "expo": "~54.0.23",
  "expo-router": "~6.0.14",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "@expo/vector-icons": "^15.0.3",
  "typescript": "~5.9.2"
}
```

## Features Overview

| Feature | Status | Description |
|---------|--------|-------------|
| Home Feed | ✅ | Instagram-style posts with likes |
| DM/Chat | ✅ | Full messaging functionality |
| Add Post | ✅ | Image selection and caption |
| Ask AI | ✅ | AI assistant interface (demo) |
| Profile | ✅ | User profile with posts grid |
| Pink Theme | ✅ | Cohesive pink color scheme |
| TypeScript | ✅ | 100% TypeScript coverage |

## Mock Data

The app uses mock data for demonstration:
- 3 sample conversations with message history
- 3 sample posts with images from Unsplash
- Demo user profile with stats

In production, these would connect to a backend API.

## Customization

### Changing Theme Colors

Edit `constants/theme.ts`:

```typescript
const tintColorLight = '#E91E63'; // Change primary color
const tintColorDark = '#F06292';  // Change dark mode color
```

### Adding New Posts

Edit `src/data/posts.ts` to add new posts to the feed.

### Adding New Conversations

Edit `src/data/conversations.ts` to add new DM conversations.

## Future Enhancements

- [ ] Backend integration with Firebase/Supabase
- [ ] Real image upload functionality
- [ ] Actual AI integration (OpenAI, Claude)
- [ ] Push notifications
- [ ] Comments on posts
- [ ] Follow/unfollow users
- [ ] Stories feature
- [ ] Dark mode support
- [ ] Search functionality

## License

This project is open source and available under the MIT License.

## Author

**Alice Gurung**
- GitHub: [@alyyis](https://github.com/alyyis)
- Email: alicegurung88@gmail.com

## Acknowledgments

- Design inspired by Instagram
- Images from [Unsplash](https://unsplash.com)
- Icons from Expo Vector Icons
- Built with [Expo](https://expo.dev)

---

Made with ❤️ and React Native
