import * as yup from "yup";
export const categoryRejex = yup.object({
  categoryName: yup.string().required("Category name is required."),
});
