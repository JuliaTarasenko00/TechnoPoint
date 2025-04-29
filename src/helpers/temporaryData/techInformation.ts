import play from "../../assets/image/play.webp";
import pods from "../../assets/image/pods.webp";
import vision from "../../assets/image/vision.webp";
import air from "../../assets/image/air.webp";

export type TTechInformation = {
  name: string;
  description: string;
  img: string;
};

export const techInformation: Array<TTechInformation> = [
  {
    name: "Playstation 5",
    description:
      "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
    img: play,
  },
  {
    name: "Apple AirPods Max",
    description: "Computational audio. Listen, it's powerful",
    img: pods,
  },
  {
    name: "Apple Vision Pro",
    description: "An immersive way to experience entertainment",
    img: vision,
  },
  {
    name: "Macbook Air",
    description:
      "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
    img: air,
  },
];
