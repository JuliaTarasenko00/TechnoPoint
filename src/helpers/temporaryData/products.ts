import play from "../../assets/image/play.webp";
import pods from "../../assets/image/pods.webp";
import vision from "../../assets/image/vision.webp";
import air from "../../assets/image/air.webp";

export interface IProducts {
  _id: string;
  img: string;
  name: string;
  price: number;
}

export const products: IProducts[] = [
  {
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    img: pods,
    _id: "1",
    price: 900,
  },
  {
    name: "Blackmagic Pocket Cinema Camera 6k",
    img: vision,
    _id: "2",
    price: 1230,
  },
  {
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    img: play,
    _id: "3",
    price: 250,
  },
  {
    name: "Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021",
    img: air,
    _id: "4",
    price: 2100,
  },
  {
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    img: pods,
    _id: "5",
    price: 900,
  },
  {
    name: "Blackmagic Pocket Cinema Camera 6k",
    img: vision,
    _id: "6",
    price: 1230,
  },
  {
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    img: play,
    _id: "7",
    price: 250,
  },
  {
    name: "Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021",
    img: air,
    _id: "8",
    price: 2100,
  },
];
