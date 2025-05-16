import * as Yup from "yup";
import { phonePattern } from "../../../helpers/patterns";

export const validatePhone = Yup.object().shape({
  phone: Yup.string()
    .matches(phonePattern, "Enter the correct phone number '+380 00 000 0000'")
    .required("Enter the correct phone number '+380 00 000 0000'"),
});

export type TValidatePhone = Yup.InferType<typeof validatePhone>;
