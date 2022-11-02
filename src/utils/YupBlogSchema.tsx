import * as yup from "yup";
import { imageSchema } from "./ImageSchema";
/**
 * * sign up user schema validation for name, email and password
 */
const blogInputs = yup.object().shape({
  title: yup.string().required("Please enter blog  title").min(4).max(20),
  description: yup.string().required("Please enter blog description").min(4),
  category: yup.string().required("Please enter blog category").min(4).max(20),
  source: yup.string().required("Please enter blog source").min(4).max(20),
  image: imageSchema,
});

export { blogInputs };
