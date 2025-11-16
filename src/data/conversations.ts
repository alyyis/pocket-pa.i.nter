import { Conversation } from '../types';

export const conversations: Conversation[] = [
  {
    id: '1',
    user: {
      name: 'Emma Watson',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    messages: [
      {
        id: 'm1',
        text: 'Hey! How are you?',
        sender: 'them',
        timestamp: Date.now() - 3600000,
      },
      {
        id: 'm2',
        text: "I'm doing great! Just finished that project we talked about.",
        sender: 'me',
        timestamp: Date.now() - 3500000,
      },
      {
        id: 'm3',
        text: 'That sounds awesome! Would love to see it sometime.',
        sender: 'them',
        timestamp: Date.now() - 3400000,
      },
      {
        id: 'm4',
        text: "Sure! I'll send you the details later today.",
        sender: 'me',
        timestamp: Date.now() - 3300000,
      },
    ],
  },
  {
    id: '2',
    user: {
      name: 'John Smith',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    messages: [
      {
        id: 'm5',
        text: 'Did you see the game last night?',
        sender: 'them',
        timestamp: Date.now() - 7200000,
      },
      {
        id: 'm6',
        text: 'Yes! It was incredible! What a finish!',
        sender: 'me',
        timestamp: Date.now() - 7100000,
      },
      {
        id: 'm7',
        text: 'I know right! Best game of the season.',
        sender: 'them',
        timestamp: Date.now() - 7000000,
      },
    ],
  },
  {
    id: '3',
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    messages: [
      {
        id: 'm8',
        text: 'Meeting at 3pm tomorrow?',
        sender: 'them',
        timestamp: Date.now() - 86400000,
      },
      {
        id: 'm9',
        text: 'Perfect! See you then.',
        sender: 'me',
        timestamp: Date.now() - 86300000,
      },
    ],
  },
  {
    id: '4',
    user: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=13',
    },
    messages: [
      {
        id: 'm10',
        text: 'Happy Birthday! 🎉',
        sender: 'them',
        timestamp: Date.now() - 172800000,
      },
      {
        id: 'm11',
        text: 'Thank you so much! 😊',
        sender: 'me',
        timestamp: Date.now() - 172700000,
      },
      {
        id: 'm12',
        text: 'Hope you have an amazing day!',
        sender: 'them',
        timestamp: Date.now() - 172600000,
      },
    ],
  },
  {
    id: '5',
    user: {
      name: 'Lisa Anderson',
      avatar: 'https://i.pravatar.cc/150?img=9',
    },
    messages: [
      {
        id: 'm13',
        text: 'Coffee tomorrow morning?',
        sender: 'them',
        timestamp: Date.now() - 259200000,
      },
      {
        id: 'm14',
        text: "Sounds good! What time works for you?",
        sender: 'me',
        timestamp: Date.now() - 259100000,
      },
      {
        id: 'm15',
        text: '9am at the usual place?',
        sender: 'them',
        timestamp: Date.now() - 259000000,
      },
      {
        id: 'm16',
        text: 'Perfect! See you there!',
        sender: 'me',
        timestamp: Date.now() - 258900000,
      },
    ],
  },
];
