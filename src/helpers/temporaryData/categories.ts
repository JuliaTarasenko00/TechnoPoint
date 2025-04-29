import { ElementType } from "react";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import {
  IoGameControllerOutline,
  IoHeadsetOutline,
  IoLaptopOutline,
  IoPhonePortraitOutline,
  IoWatchOutline,
} from "react-icons/io5";

export const categories: Array<{ category: string; img: ElementType }> = [
  {
    category: "Phones",
    img: IoPhonePortraitOutline,
  },
  {
    category: "Smart Watches",
    img: IoWatchOutline,
  },
  {
    category: "Headphones",
    img: IoHeadsetOutline,
  },
  {
    category: "Laptops",
    img: IoLaptopOutline,
  },
  {
    category: "Gaming",
    img: IoGameControllerOutline,
  },
  {
    category: "Refrigerators",
    img: CgSmartHomeRefrigerator,
  },
];
