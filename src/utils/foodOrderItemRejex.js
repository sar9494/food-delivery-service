import yup from "yup";
export const foodOrderItemRejex = yup.object({
  quantity: yup.number().required("Quantity is required."),
});
