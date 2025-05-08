import { ElementType } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSecurity } from "react-icons/md";
import { PiContactlessPayment } from "react-icons/pi";
import { RiArrowGoBackLine } from "react-icons/ri";

type TInformation = {
  svg: ElementType;
  title: string;
  description: string;
};

export const information: TInformation[] = [
  {
    svg: LiaShippingFastSolid,
    title: "Delivery",
    description:
      "Pickup from the store 'TechnoPoint' delivery to the address or to the department 'Post'",
  },
  {
    svg: MdSecurity,
    title: "Guarantee",
    description:
      "Certified equipment with an official guarantee from the manufacturer.",
  },
  {
    svg: PiContactlessPayment,
    title: "Payment",
    description:
      "It is possible to pay for the purchase in cash, by card or by bank transfer.",
  },
  {
    svg: RiArrowGoBackLine,
    title: "Return",
    description:
      "Return of goods takes place within 14 days after purchase, in accordance with the current law.",
  },
];
