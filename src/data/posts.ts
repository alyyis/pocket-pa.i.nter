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

export const posts: Post[] = [
  {
    id: 'p1',
    user: {
      name: 'Rebecca_33',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400',
    caption: 'A painting I recently did. 3 Super proud of how it turned out!',
    likes: 234,
    timestamp: Date.now() - 3600000,
  },
  {
    id: 'p2',
    user: {
      name: 'josephine.myers',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400',
    caption: 'Breakfast vibes ☕️',
    likes: 156,
    timestamp: Date.now() - 7200000,
  },
  {
    id: 'p3',
    user: {
      name: 'SavannahSmith',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    caption: 'Mountain therapy 🏔️',
    likes: 432,
    timestamp: Date.now() - 14400000,
  },
];
