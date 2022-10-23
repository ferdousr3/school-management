import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  name: yup.string().required("Please enter your name").min(4).max(20),
  email: yup.string().email().required("Please enter your email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8)
    .max(10)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
});

const LoginSchema = yup.object().shape({
  email: yup.string().email().required("Please enter your Email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8)
    .max(10)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
});
const PassReset = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Please enter your Email")
    .matches(
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
    ),
});

export { SignUpSchema, LoginSchema, PassReset };
