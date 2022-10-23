import * as yup from "yup";


const LoginSchema = yup.object().shape({
  name: yup.string().required().min(4).max(20),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(10),
});

export { LoginSchema };
