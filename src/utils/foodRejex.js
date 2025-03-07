import yup from "yup";
export const foodRejex = yup.object({
  foodName: yup.string().required("Food name is required."),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be positive.")
    .integer("Price must be an integer."),
  image: yup.string().required("Image is required."),
  ingredients: yup.string().required("Ingredient is required."),
  categories: yup.required("Categories are required."),
});
