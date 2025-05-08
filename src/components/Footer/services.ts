import { ElementType } from "react";
import { BiSolidHelpCircle } from "react-icons/bi";
import { BsChatTextFill } from "react-icons/bs";
import { FaFacebookMessenger, FaTelegram, FaViber } from "react-icons/fa";

export const services = [
  "Bonus program",
  "Gift cards",
  "Credit and payment",
  "Service contracts",
  "Non-cash account",
  "Payment",
];

export const assistance = [
  "Find an order",
  "Terms of delivery",
  "Exchange and return of goods",
  "Guarantee",
  "Frequently asked questions",
  "Terms of use of the site",
];

export const consultation: Array<{ img: ElementType; title: string }> = [
  { img: BiSolidHelpCircle, title: "Help Center" },
  { img: BsChatTextFill, title: "Chat on the site" },
  { img: FaTelegram, title: "Telegram" },
  { img: FaViber, title: "Viber" },
  { img: FaFacebookMessenger, title: "Messenger" },
];
