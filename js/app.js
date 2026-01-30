const postsData = [
  {
    id: 1,
    author: 'Sarah',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    time: '11h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800',
    text: 'Beautiful waterfall hike today! Nature never fails to amaze me 🌿💦',
    likes: 74,
    comments: 12,
    shares: 3
  },
  {
    id: 2,
    author: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    time: '5h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    text: 'Beach vibes only 🏖️ Who else loves the ocean?',
    likes: 128,
    comments: 24,
    shares: 8
  },
  {
    id: 3,
    author: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200',
    time: '2h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
    text: 'Sunset chasing is my favorite hobby 🌅✨',
    likes: 256,
    comments: 45,
    shares: 12
  },
  {
    id: 4,
    author: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
    time: '1h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800',
    text: 'City lights at night hit different 🌃',
    likes: 189,
    comments: 32,
    shares: 5
  },
  {
    id: 5,
    author: 'Tech Daily',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200',
    time: '30m',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/855573/855573-hd_1920_1080_30fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
    text: 'Amazing drone footage of the mountains! 🚁🏔️',
    likes: 892,
    comments: 156,
    shares: 234
  },
  {
    id: 6,
    author: 'Cooking With Lisa',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200',
    time: '45m',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/4253350/4253350-hd_1920_1080_24fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    text: 'Quick 5-minute pasta recipe! 🍝 Save this for later!',
    likes: 1247,
    comments: 89,
    shares: 567
  },
  {
    id: 7,
    author: 'Travel Guide',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    time: '1h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    text: 'Hidden beaches you need to visit this summer! 🏝️',
    likes: 2341,
    comments: 312,
    shares: 892
  },
  {
    id: 8,
    author: 'Fitness Pro',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    time: '2h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/5319087/5319087-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
    text: '10 min morning workout routine! No equipment needed 💪',
    likes: 3421,
    comments: 245,
    shares: 1203
  },
  {
    id: 9,
    author: 'Music Vibes',
    avatar: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=200',
    time: '3h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/1722691/1722691-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
    text: 'Live concert footage from last night! 🎵🎸',
    likes: 1567,
    comments: 189,
    shares: 445
  },
  {
    id: 10,
    author: 'Nature Channel',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    time: '4h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/857251/857251-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
    text: 'Wildlife in 4K - This lion encounter was incredible! 🦁',
    likes: 4521,
    comments: 567,
    shares: 2134
  },
  {
    id: 11,
    author: 'Car Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    time: '5h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/5309381/5309381-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    text: 'Test driving the new sports car! 🏎️💨',
    likes: 2890,
    comments: 334,
    shares: 678
  },
  {
    id: 12,
    author: 'Art Studio',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    time: '6h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/4349828/4349828-hd_1920_1080_30fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
    text: 'Time-lapse of my latest painting! 🎨',
    likes: 1234,
    comments: 156,
    shares: 334
  },
  {
    id: 13,
    author: 'Dance Academy',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e382a71b716b?w=200',
    time: '7h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800',
    text: 'Our students performing at the annual show! 💃🕺',
    likes: 2134,
    comments: 278,
    shares: 556
  },
  {
    id: 14,
    author: 'Foodie Adventures',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    time: '8h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/4253350/4253350-hd_1920_1080_24fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    text: 'Street food tour in Bangkok! 🍜🌶️',
    likes: 3422,
    comments: 445,
    shares: 1234
  },
  {
    id: 15,
    author: 'Gaming Zone',
    avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200',
    time: '9h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/4824363/4824363-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    text: 'Epic gaming moments compilation! 🎮🔥',
    likes: 4567,
    comments: 678,
    shares: 2341
  },
  {
    id: 16,
    author: 'Tech News Daily',
    avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200',
    time: '15m',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    text: '📱 BREAKING: New smartphone announced with revolutionary camera technology! What do you think about this innovation?',
    likes: 5678,
    comments: 1234,
    shares: 3456
  },
  {
    id: 17,
    author: 'World News',
    avatar: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200',
    time: '25m',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800',
    text: '🌍 Climate summit reaches historic agreement. Leaders commit to new emissions targets by 2030.',
    likes: 8901,
    comments: 2345,
    shares: 5678
  },
  {
    id: 18,
    author: 'Sports Central',
    avatar: 'https://images.unsplash.com/photo-1461896836934- voices-9e13a5?w=200',
    time: '35m',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1461896836934- voices-9e13a5?w=800',
    text: '⚽ Championship finals this weekend! Who are you supporting? Drop your predictions below!',
    likes: 12345,
    comments: 4567,
    shares: 8901
  },
  {
    id: 19,
    author: 'Science Daily',
    avatar: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=200',
    time: '50m',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    text: '🔬 Scientists discover new species in the deep ocean. Nature still has so many secrets!',
    likes: 6789,
    comments: 1234,
    shares: 4567
  },
  {
    id: 20,
    author: 'Business Insider',
    avatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200',
    time: '1h',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    text: '📈 Stock markets hit record highs today! Economic recovery continues to surprise analysts.',
    likes: 4567,
    comments: 890,
    shares: 2345
  },
  {
    id: 21,
    author: 'Entertainment Tonight',
    avatar: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=200',
    time: '1h 15m',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800',
    text: '🎬 New blockbuster movie breaks opening weekend records! Have you watched it yet?',
    likes: 15678,
    comments: 5678,
    shares: 12345
  },
  {
    id: 22,
    author: 'Health Today',
    avatar: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200',
    time: '1h 30m',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800',
    text: '💊 New medical breakthrough in cancer research gives hope to millions worldwide.',
    likes: 23456,
    comments: 8901,
    shares: 15678
  },
  {
    id: 23,
    author: 'Space Exploration',
    avatar: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=200',
    time: '2h',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800',
    text: '🚀 Mars mission update: Rover sends back stunning new images from the red planet!',
    likes: 34567,
    comments: 12345,
    shares: 23456
  },
  {
    id: 24,
    author: 'Fashion Weekly',
    avatar: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=200',
    time: '2h 30m',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800',
    text: '👗 Fashion Week highlights: Top trends you need to know for this season!',
    likes: 8901,
    comments: 1234,
    shares: 5678
  },
  {
    id: 25,
    author: 'Auto News',
    avatar: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200',
    time: '3h',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
    text: '🚗 Electric vehicle sales surge 200% this quarter. The future is electric!',
    likes: 6789,
    comments: 2345,
    shares: 4567
  },
  {
    id: 26,
    author: 'Photography Pro',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    time: '30m',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    text: 'Morning light hitting just right 📸✨',
    likes: 2345,
    comments: 234,
    shares: 567
  },
  {
    id: 27,
    author: 'Food Lover',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    time: '1h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800',
    text: 'Sunday brunch goals 🥞🍓',
    likes: 3456,
    comments: 456,
    shares: 890
  },
  {
    id: 28,
    author: 'Travel Bug',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    time: '2h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
    text: 'Swiss Alps in winter ❄️🏔️ Absolutely magical!',
    likes: 5678,
    comments: 678,
    shares: 1234
  },
  {
    id: 29,
    author: 'Pet Paradise',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    time: '3h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800',
    text: 'My cat decided my laptop is his new bed 😹💻',
    likes: 12345,
    comments: 2345,
    shares: 4567
  },
  {
    id: 30,
    author: 'Architecture Daily',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    time: '4h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800',
    text: 'Modern architecture at its finest 🏢',
    likes: 4567,
    comments: 567,
    shares: 1234
  },
  {
    id: 31,
    author: 'Coffee Addict',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    time: '5h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    text: 'But first, coffee ☕️ Monday motivation!',
    likes: 8901,
    comments: 1234,
    shares: 2345
  },
  {
    id: 32,
    author: 'Fitness Journey',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e382a71b716b?w=200',
    time: '6h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
    text: 'Gym session complete! 💪 Progress, not perfection.',
    likes: 6789,
    comments: 890,
    shares: 1234
  },
  {
    id: 33,
    author: 'Bookworm',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
    time: '7h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
    text: 'Cozy reading corner setup 📚✨ Perfect weekend vibes.',
    likes: 4567,
    comments: 678,
    shares: 1234
  },
  {
    id: 34,
    author: 'Car Collector',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    time: '8h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800',
    text: 'Classic beauty restored to perfection 🚗💨',
    likes: 8901,
    comments: 1234,
    shares: 3456
  },
  {
    id: 35,
    author: 'Plant Parent',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    time: '9h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800',
    text: 'My indoor jungle is thriving! 🌿🪴',
    likes: 12345,
    comments: 2345,
    shares: 5678
  },
  {
    id: 36,
    author: 'Night Owl',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    time: '10h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
    text: 'Stargazing tonight 🌌 Found the perfect spot away from city lights.',
    likes: 23456,
    comments: 3456,
    shares: 8901
  },
  {
    id: 37,
    author: 'Street Art',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    time: '11h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1569091791842-7cfb64e04797?w=800',
    text: 'Incredible mural spotted downtown! 🎨',
    likes: 6789,
    comments: 890,
    shares: 2345
  },
  {
    id: 38,
    author: 'Wedding Planner',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
    time: '12h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    text: 'Beautiful wedding from last weekend 💒💍',
    likes: 15678,
    comments: 2345,
    shares: 5678
  },
  {
    id: 39,
    author: 'Drone Pilot',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    time: '13h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
    text: 'City from above 🏙️ Drone photography at its best!',
    likes: 8901,
    comments: 1234,
    shares: 4567
  },
  {
    id: 40,
    author: 'Vintage Lover',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    time: '14h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800',
    text: 'Thrifting finds of the day! 🛍️',
    likes: 5678,
    comments: 678,
    shares: 1234
  },
  {
    id: 41,
    author: 'Startup News',
    avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200',
    time: '20m',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    text: '💼 Unicorn startup announces IPO plans. Valuation reaches $10 billion!',
    likes: 4567,
    comments: 890,
    shares: 2345
  },
  {
    id: 42,
    author: 'Ocean Explorer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    time: '40m',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    text: 'Swimming with dolphins! 🐬 An unforgettable experience.',
    likes: 23456,
    comments: 4567,
    shares: 12345
  },
  {
    id: 43,
    author: 'Mountain Hiker',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    time: '1h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
    text: 'Summit conquered! ⛰️ The view was worth every step.',
    likes: 12345,
    comments: 2345,
    shares: 5678
  },
  {
    id: 44,
    author: 'Crypto Daily',
    avatar: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=200',
    time: '1h 30m',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
    text: '💰 Bitcoin reaches new all-time high! Market reacts positively.',
    likes: 8901,
    comments: 2345,
    shares: 4567
  },
  {
    id: 45,
    author: 'DIY Crafts',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    time: '2h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/4349828/4349828-hd_1920_1080_30fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800',
    text: 'DIY home decor project! Easy and budget-friendly ✂️',
    likes: 15678,
    comments: 2345,
    shares: 8901
  },
  {
    id: 46,
    author: 'Weather Channel',
    avatar: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=200',
    time: '2h 30m',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800',
    text: '🌪️ Severe weather alert: Storm system approaching the coast. Stay safe everyone!',
    likes: 12345,
    comments: 5678,
    shares: 15678
  },
  {
    id: 47,
    author: 'Yoga Instructor',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    time: '3h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/5319087/5319087-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
    text: 'Morning yoga flow for beginners 🧘‍♀️ Start your day right!',
    likes: 23456,
    comments: 4567,
    shares: 12345
  },
  {
    id: 48,
    author: 'Real Estate Pro',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200',
    time: '4h',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    text: 'Dream home goals! 🏡 This architecture is stunning.',
    likes: 8901,
    comments: 1234,
    shares: 4567
  },
  {
    id: 49,
    author: 'Movie Buff',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    time: '5h',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800',
    text: '🎭 Oscars nominations announced! Who got snubbed this year?',
    likes: 34567,
    comments: 8901,
    shares: 15678
  },
  {
    id: 50,
    author: 'Adventure Seeker',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    time: '6h',
    type: 'video',
    video: 'https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    text: 'Road trip adventures! 🚐 Where should we go next?',
    likes: 45678,
    comments: 12345,
    shares: 23456
  }
];

let currentTab = 'home';
let likedPosts = new Set();

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initPosts();
  initActionButtons();
  initInfiniteScroll();
});

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      handleTabChange(item.dataset.tab);
    });
  });
  
  const subNavItems = document.querySelectorAll('.sub-nav-item');
  subNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      subNavItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
  
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  bottomNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      bottomNavItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function handleTabChange(tab) {
  currentTab = tab;
  switch(tab) {
    case 'home': showHome(); break;
    case 'friends': showToast('Friends feature coming soon!'); break;
    case 'watch': showToast('Watch feature coming soon!'); break;
    case 'notifications': showToast('Notifications feature coming soon!'); break;
    case 'menu': showToast('Menu feature coming soon!'); break;
  }
}

function showHome() {
  const container = document.getElementById('posts-container');
  if (!container) return;
  container.innerHTML = '';
  postsData.slice(1, 11).forEach(post => {
    container.innerHTML += createPostHTML(post);
  });
  initActionButtons();
  initVideoPlayers();
}

function initPosts() {
  const container = document.getElementById('posts-container');
  if (!container) return;
  postsData.slice(4, 14).forEach(post => {
    container.innerHTML += createPostHTML(post);
  });
  initActionButtons();
  initVideoPlayers();
}

function createPostHTML(post) {
  const isLiked = likedPosts.has(post.id);
  let mediaHTML = '';
  if (post.type === 'video') {
    mediaHTML = `
      <div class="post-video-container">
        <video class="post-video" poster="${post.thumbnail}" preload="metadata" playsinline muted loop>
          <source src="${post.video}" type="video/mp4">
        </video>
        <div class="video-play-btn" onclick="playVideo(this)">
          <svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <div class="video-duration">0:15</div>
      </div>
    `;
  } else {
    mediaHTML = `
      <div class="post-image-container">
        <img src="${post.image}" alt="Post" class="post-image" loading="lazy">
      </div>
    `;
  }
  const newsBadge = post.type === 'news' ? '<span class="news-badge">NEWS</span>' : '';
  
  return `
    <article class="post-card" data-post-id="${post.id}" data-type="${post.type}">
      <div class="post-header">
        <div class="post-author">
          <img src="${post.avatar}" alt="${post.author}" class="author-avatar">
          <div class="author-info">
            <h3 class="author-name">${post.author} ${newsBadge}</h3>
            <div class="post-meta">
              <span class="post-time">${post.time}</span>
              <span class="privacy-icon">🌐</span>
            </div>
          </div>
        </div>
        <button class="more-btn">⋯</button>
      </div>
      ${post.text ? `<div class="post-text-content">${post.text}</div>` : ''}
      ${mediaHTML}
      <div class="reactions-bar">
        <div class="reaction-icons">
          <span class="reaction-icon like">👍</span>
          <span class="reaction-icon love">❤️</span>
        </div>
        <span class="reaction-count">${formatNumber(post.likes)}</span>
      </div>
      <div class="action-buttons">
        <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" data-post-id="${post.id}">
          <svg viewBox="0 0 24 24" fill="${isLiked ? '#1877f2' : 'none'}" stroke="${isLiked ? '#1877f2' : 'currentColor'}" stroke-width="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
          </svg>
          <span style="color: ${isLiked ? '#1877f2' : 'inherit'}">Like</span>
        </button>
        <button class="action-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <span>Comment</span>
        </button>
        <button class="action-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          <span>Share</span>
        </button>
      </div>
    </article>
  `;
}

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

function initVideoPlayers() {
  const videos = document.querySelectorAll('.post-video');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.5 });
  videos.forEach(video => observer.observe(video));
}

function playVideo(btn) {
  const container = btn.closest('.post-video-container');
  const video = container.querySelector('video');
  if (video.paused) {
    video.play();
    video.muted = false;
    btn.style.display = 'none';
  } else {
    video.pause();
    btn.style.display = 'flex';
  }
  video.addEventListener('pause', () => { btn.style.display = 'flex'; });
  video.addEventListener('play', () => { btn.style.display = 'none'; });
}

function initActionButtons() {
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const postId = parseInt(btn.dataset.postId);
      toggleLike(postId, btn);
    });
  });
  
  const firstLikeBtn = document.querySelector('.post-card:not([data-post-id]) .action-btn');
  if (firstLikeBtn) {
    firstLikeBtn.addEventListener('click', () => {
      firstLikeBtn.classList.toggle('liked');
      const isLiked = firstLikeBtn.classList.contains('liked');
      const svg = firstLikeBtn.querySelector('svg');
      const span = firstLikeBtn.querySelector('span');
      if (isLiked) {
        svg.setAttribute('fill', '#1877f2');
        svg.setAttribute('stroke', '#1877f2');
        span.style.color = '#1877f2';
      } else {
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        span.style.color = 'inherit';
      }
    });
  }
}

function toggleLike(postId, btn) {
  const isLiked = likedPosts.has(postId);
  if (isLiked) likedPosts.delete(postId);
  else likedPosts.add(postId);
  
  const svg = btn.querySelector('svg');
  const span = btn.querySelector('span');
  
  if (!isLiked) {
    svg.setAttribute('fill', '#1877f2');
    svg.setAttribute('stroke', '#1877f2');
    span.style.color = '#1877f2';
    btn.classList.add('liked');
  } else {
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    span.style.color = 'inherit';
    btn.classList.remove('liked');
  }
  
  const postCard = btn.closest('.post-card');
  const countEl = postCard.querySelector('.reaction-count');
  const post = postsData.find(p => p.id === postId);
  if (post) {
    post.likes += isLiked ? -1 : 1;
    countEl.textContent = formatNumber(post.likes);
  }
}

let loadedCount = 14;
let isLoading = false;

function initInfiniteScroll() {
  const mainContent = document.querySelector('.main-content');
  mainContent.addEventListener('scroll', () => {
    if (isLoading) return;
    const scrollTop = mainContent.scrollTop;
    const scrollHeight = mainContent.scrollHeight;
    const clientHeight = mainContent.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      loadMorePosts();
    }
  });
}

function loadMorePosts() {
  if (loadedCount >= postsData.length) return;
  isLoading = true;
  const container = document.getElementById('posts-container');
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'loading-more';
  loadingDiv.innerHTML = '<div class="spinner"></div> Loading more...';
  container.appendChild(loadingDiv);
  
  setTimeout(() => {
    loadingDiv.remove();
    const nextBatch = postsData.slice(loadedCount, loadedCount + 5);
    nextBatch.forEach(post => {
      container.innerHTML += createPostHTML(post);
    });
    loadedCount += 5;
    isLoading = false;
    initActionButtons();
    initVideoPlayers();
  }, 800);
}

function showToast(message) {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 12px 24px;
    border-radius: 20px;
    font-size: 14px;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateX(-50%) translateY(10px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes fadeOut {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to { opacity: 0; transform: translateX(-50%) translateY(10px); }
  }
`;
document.head.appendChild(style);
