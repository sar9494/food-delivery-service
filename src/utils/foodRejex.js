import * as yup from "yup";

export const foodRejex = yup.object({
  foodName: yup.string().required("Food name is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be positive")
    .typeError("Price must be a number"),
  image: yup.string().required("Image URL is required"),
  ingredients: yup.string().required("Ingredients are required"),
  category: yup.string().required("Category is required"),
});
