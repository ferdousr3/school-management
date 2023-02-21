import * as yup from "yup";
/**
 * * sign up user schema validation for name, email and password
 */
const eventInputs = yup.object().shape({
  name: yup.string().required("Please enter event name").min(6).max(30),
  time: yup.string().required("Please enter event time ").min(4),
  date: yup.string().required("Please enter event date ").min(4).max(20),
  organizer: yup
    .string()
    .required("Please enter event organizer")
    .min(4)
    .max(10),
  place: yup.string().required("Please enter event place").min(4).max(10),
});

export { eventInputs };
