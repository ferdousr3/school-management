import * as yup from "yup";

const imageSchema = yup
  .mixed()
  .test("required", "You need to provide a image", (value) => {
    return value && value.length;
  })
  .test("fileType", "Only support jpeg, png, jpg", (value) => {
    if (value && value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        if (
          value[i].type !== "image/png" &&
          value[i].type !== "image/jpg" &&
          value[i].type !== "image/jpeg"
        ) {
          return false;
        }
      }
    }
    return true;
  })
  .test("fileSize", "The file is too large", (value, context) => {
    return value && value[0] && value[0].size <= 3000000;
  });

export { imageSchema };
