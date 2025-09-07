import img1 from '/src/assets/image/iphone/f_auto.webp';
import img2 from '/src/assets/image/iphone/f_auto_1.webp';
import img3 from '/src/assets/image/iphone/f_auto_2.webp';
import img4 from '/src/assets/image/iphone/f_auto_3.webp';

export const product = [
  {
    _id: '666f1234567890abcdef0002',
    groupId: '666f1234567890abcdef0001',
    name: 'Apple iPhone 16 Pro Max',
    model: '16 Pro Max',
    brand: 'Apple',
    color: {
      desert_titanium: '#C0C0C0',
    },
    storage: '256GB',
    ram: 8,
    sku: 'IPH16PM-256-DT',
    price: 1499,
    discount: 10,
    inStock: true,
    stock: 50,
    images: [img1, img2, img3, img4],
    specs: {
      screen: {
        diagonal: 6.9,
        resolution: {
          width: 2868,
          height: 1320,
        },
        refreshRate: 120,
        pixelDensity: 460,
        type: 'Super Retina XDR OLED',
        additional: ['Always-On display', 'HDR10', 'Dynamic Island'],
      },
      cpu: {
        name: 'A18 Pro',
        cores: 6,
        gpuCores: 6,
        neuralEngineTOPS: 35,
      },
      battery: {
        capacity: 4685,
        unit: 'mAh',
        videoPlaybackHours: 33,
      },
      camera: {
        rear: {
          wide: {
            megapixels: 48,
            aperture: 'ƒ/1.78',
            stabilization: '2nd-generation sensor-shift OIS',
            features: [
              'Fusion sensor',
              '100% Focus Pixels',
              '24MP and 48MP capture',
            ],
          },
          ultraWide: {
            megapixels: 48,
            fieldOfView: '120°',
            features: ['macro support', 'low-light optimized'],
          },
          telephoto: {
            megapixels: 12,
            opticalZoom: '5×',
            features: ['tetraprism lens', 'PDAF', '3D sensor-shift OIS'],
          },
          video: [
            '4K 120 fps Dolby Vision',
            'ProRes',
            'Log',
            'Spatial video support',
          ],
        },
        front: {
          megapixels: 12,
          features: ['TrueDepth', 'Portrait mode', 'HDR', 'Smart HDR 5'],
        },
      },
      features: [
        'Camera Control button',
        'Spatial Audio Recording',
        'USB-C',
        'MagSafe 25W',
        'Wi-Fi 7',
        'Dual SIM (eSIM)',
        'Face ID',
        'IP68',
      ],
      dimensions: {
        height_mm: 163,
        width_mm: 77.6,
        thickness_mm: 8.25,
        weight_g: 227,
      },
    },
    reviews: [
      {
        user: 'Ігор К.',
        rating: 5,
        comment: 'Дуже задоволений покупкою! Камера супер!',
        createdAt: '2025-06-10T10:15:00.000Z',
      },
      {
        user: 'Наталя В.',
        rating: 4,
        comment: 'Все добре, але батарея могла б бути краща.',
        createdAt: '2025-06-12T18:45:00.000Z',
      },
    ],
  },
];

export const brandColors = {
  desert_titanium: '#D2B48C',
  natural_itanium: '#C0C0C0',
  white_titanium: '#e8e8e8',
  black_titanium: '#000000',
};
