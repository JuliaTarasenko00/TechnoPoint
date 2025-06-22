import img1 from "/src/assets/image/iphone/f_auto.webp";
import img2 from "/src/assets/image/iphone/f_auto_1.webp";
import img3 from "/src/assets/image/iphone/f_auto_2.webp";
import img4 from "/src/assets/image/iphone/f_auto_3.webp";

export const product = [
  {
    _id: "666f1234567890abcdef0002",
    groupId: "666f1234567890abcdef0001",
    name: "Apple iPhone 16 Pro Max 256Gb Desert Titanium",
    color: "Cream",
    storage: 256,
    sku: "IPH14PM-256-DPUR",
    price: 1499,
    discountPrice: 1399,
    stock: 25,
    images: [img1, img2, img3, img4],
    specs: {
      screen: {
        diagonal: 6.7,
        resolution: "2796x1290",
        refreshRate: 120,
        brightness: 2000,
        features: ["Always-On Display", "HDR", "ProMotion", "True Tone"],
      },
      cpu: {
        name: "A18 Pro chip with 6‑core GPU",
        cores: 6,
      },
      autoFeatures: [
        "Dynamic Island",
        "Face ID",
        "Emergency SOS",
        "Crash Detection",
      ],
    },
    reviews: [
      {
        user: "Ігор К.",
        rating: 5,
        comment: "Дуже задоволений покупкою! Камера супер!",
        createdAt: "2025-06-10T10:15:00.000Z",
      },
      {
        user: "Наталя В.",
        rating: 4,
        comment: "Все добре, але батарея могла б бути краща.",
        createdAt: "2025-06-12T18:45:00.000Z",
      },
    ],
  },
];
