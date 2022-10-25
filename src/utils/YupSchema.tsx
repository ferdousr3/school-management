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
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid Email"
    ),
});
const ContactForm = yup.object().shape({
  name: yup.string().required("Please enter your name").min(5).max(15),
  email: yup
    .string()
    .email()
    .required("Please enter your Email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid Email"
    ),
  phone: yup
    .string()
    .required("Please enter your name")
    .min(10)
    .max(14)
    .matches(/^(\+|00)[1-9][0-9 \-.]{7,32}$/, "add country code and only number "),
  message: yup.string().required("Please enter your name").min(10).max(100),
});

export { SignUpSchema, LoginSchema, PassReset, ContactForm };
