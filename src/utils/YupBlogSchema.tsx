import * as yup from "yup";
import { imageSchema } from "./ImageSchema";
/**
 * * sign up user schema validation for name, email and password
 */
const blogInputs = yup.object().shape({
  title: yup.string().required("Please enter blog  title").min(10).max(50),
  description: yup.string().required("Please enter blog description").min(10),
  category: yup.string().required("Please enter blog category").min(4).max(20),
  source: yup.string().required("Please enter blog source").min(4).max(10),
  image: imageSchema,
});

export { blogInputs };
