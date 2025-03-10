import * as yup from "yup";
export const userYup = yup.object({
  email: yup.string().email().required("Email is required."),
  password: yup
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  phoneNumber: yup
    .number("Phone number is only contains digits")
    .positive("Age must be positive")
    .integer("Age must be an integer"),
  address: yup.string(),
});
