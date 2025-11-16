export interface Message {
  id: string;
  text: string;
  sender: 'me' | 'them';
  timestamp: number;
}

export interface Conversation {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  messages: Message[];
}

export interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  image: string;
  caption: string;
  likes: number;
  timestamp: number;
}
