import * as Yup from "yup";
import { emailPattern, phonePattern } from "../../../helpers/patterns";

export const registerSchema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  phone: Yup.string()
    .matches(phonePattern, "Enter the correct phone number '+380 00 000 0000'")
    .required("Enter the correct phone number '+380 00 000 0000'"),
  email: Yup.string()
    .matches(emailPattern, "Enter the correct email 'email@gmail.com'")
    .required(),
});

export type TRegisterSchema = Yup.InferType<typeof registerSchema>;
