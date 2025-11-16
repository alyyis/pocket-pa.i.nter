import { ChatScreen } from '@/src/screens/ChatScreen';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

export default function ChatPage() {
  const params = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  // Handle id being an array (Expo Router can return string | string[])
  const conversationId = Array.isArray(params.id) ? params.id[0] : params.id;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ChatScreen conversationId={conversationId} onBack={() => router.back()} />
    </>
  );
}
