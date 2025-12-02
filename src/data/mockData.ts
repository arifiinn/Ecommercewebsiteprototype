export const mockProducts = [
  {
    id: 1,
    title: 'Sofa Kulit Modern',
    price: 8990000,
    location: 'Jakarta Selatan, DKI Jakarta',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    condition: 'Baru',
    category: 'Furniture',
    description: 'Sofa kulit modern yang nyaman dan stylish, cocok untuk ruang tamu. Kondisi sangat baik dan terawat.',
    seller: {
      name: 'Budi Santoso',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      rating: 4.8,
      joined: 'Jan 2023',
      responseTime: '1 jam'
    },
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800'
    ]
  },
  {
    id: 2,
    title: 'Kamera Vintage Klasik',
    price: 4500000,
    location: 'Bandung, Jawa Barat',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800',
    condition: 'Bekas',
    category: 'Elektronik',
    description: 'Kamera vintage klasik dalam kondisi berfungsi dengan baik. Cocok untuk kolektor atau penggemar fotografi.',
    seller: {
      name: 'Siti Nurhaliza',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      rating: 4.9,
      joined: 'Mar 2022',
      responseTime: '30 menit'
    },
    images: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800'
    ]
  },
  {
    id: 3,
    title: 'Sepeda Gunung MTB',
    price: 6500000,
    location: 'Surabaya, Jawa Timur',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800',
    condition: 'Bekas',
    category: 'Olahraga',
    description: 'Sepeda gunung terawat dengan baik, cocok untuk trail dan petualangan outdoor.',
    seller: {
      name: 'Ahmad Wijaya',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      rating: 4.7,
      joined: 'Jun 2023',
      responseTime: '2 jam'
    },
    images: [
      'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800'
    ]
  },
  {
    id: 4,
    title: 'Jam Tangan Mewah',
    price: 12000000,
    location: 'Jakarta Pusat, DKI Jakarta',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    condition: 'Baru',
    category: 'Fashion',
    description: 'Jam tangan mewah brand terkenal, baru dengan kemasan original dan garansi resmi.',
    seller: {
      name: 'Dewi Lestari',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      rating: 5.0,
      joined: 'Feb 2023',
      responseTime: '15 menit'
    },
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'
    ]
  },
  {
    id: 5,
    title: 'Laptop Gaming ROG',
    price: 15000000,
    location: 'Yogyakarta, DIY',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800',
    condition: 'Bekas',
    category: 'Elektronik',
    description: 'Laptop gaming performa tinggi dengan kartu grafis RTX. Cocok untuk gaming dan pekerjaan kreatif.',
    seller: {
      name: 'Riko Pratama',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      rating: 4.6,
      joined: 'Aug 2022',
      responseTime: '1 jam'
    },
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800'
    ]
  },
  {
    id: 6,
    title: 'Meja Makan Kayu Jati',
    price: 7500000,
    location: 'Semarang, Jawa Tengah',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800',
    condition: 'Baru',
    category: 'Furniture',
    description: 'Meja makan kayu jati handmade, bisa untuk 6-8 orang. Kualitas premium dan tahan lama.',
    seller: {
      name: 'Lisa Anggraeni',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
      rating: 4.9,
      joined: 'Jan 2023',
      responseTime: '45 menit'
    },
    images: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800'
    ]
  }
];

export const categories = [
  { name: 'Elektronik', count: 1234 },
  { name: 'Furniture', count: 856 },
  { name: 'Fashion', count: 2341 },
  { name: 'Olahraga', count: 645 },
  { name: 'Buku', count: 432 },
  { name: 'Rumah & Taman', count: 987 },
];

export const communityChannels = [
  {
    id: 1,
    name: 'Promo Lokal',
    members: 2453,
    lastMessage: 'Cek promo menarik ini!',
    lastMessageTime: '2m lalu',
    unread: 3
  },
  {
    id: 2,
    name: 'Penjual Terdekat',
    members: 1876,
    lastMessage: 'Ada yang jual furniture?',
    lastMessageTime: '15m lalu',
    unread: 0
  },
  {
    id: 3,
    name: 'Barang Murah',
    members: 3421,
    lastMessage: 'Dapet barang bagus cuma 200rb!',
    lastMessageTime: '1j lalu',
    unread: 12
  },
  {
    id: 4,
    name: 'Pecinta Teknologi',
    members: 987,
    lastMessage: 'Promo smartphone terbaru',
    lastMessageTime: '3j lalu',
    unread: 0
  },
  {
    id: 5,
    name: 'Dekorasi Rumah',
    members: 654,
    lastMessage: 'Lampu vintage cantik tersedia',
    lastMessageTime: '5j lalu',
    unread: 2
  }
];

export const mockChatMessages = [
  {
    id: 1,
    message: "Halo! Barangnya masih tersedia?",
    timestamp: "10:30",
    isOwn: true
  },
  {
    id: 2,
    message: "Ya, masih tersedia! Tertarik?",
    timestamp: "10:32",
    isOwn: false
  },
  {
    id: 3,
    message: "Iya, boleh tahu kondisinya gimana?",
    timestamp: "10:33",
    isOwn: true
  },
  {
    id: 4,
    message: "Kondisi sangat bagus. Jarang dipakai, disimpan di tempat yang bersih.",
    timestamp: "10:35",
    isOwn: false
  },
  {
    id: 5,
    message: "Oke! Bisa COD weekend ini?",
    timestamp: "10:36",
    isOwn: true
  },
  {
    id: 6,
    message: "Bisa! Sabtu sore oke. Nanti saya kirim alamatnya.",
    timestamp: "10:38",
    isOwn: false
  }
];

export const mockCommunityChatMessages = [
  {
    id: 1,
    userName: 'Siti N.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    message: "Baru saja dapat kamera vintage dengan harga bagus!",
    timestamp: "2m lalu",
    isOwn: false
  },
  {
    id: 2,
    userName: 'Ahmad W.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    message: "Dimana belinya? Saya juga lagi nyari!",
    timestamp: "1m lalu",
    isOwn: false
  },
  {
    id: 3,
    userName: 'Anda',
    message: "Saya ada yang mau dijual! Cek listing saya",
    timestamp: "Baru saja",
    isOwn: true
  }
];