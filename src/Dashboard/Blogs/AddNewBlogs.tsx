import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import TodayIcon from "@mui/icons-material/Today";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  // Typography,
  Container,
  Grid,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { useAuthState } from "react-firebase-hooks/auth";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FormInputDefaultText from "../../common/FromInputs/FormInputDefaultText";
import { FormInputDropdown } from "../../common/FromInputs/FormInputDropdown";
import FormInputTextarea from "../../common/FromInputs/FormInputTextarea";
import FormInputText from "../../common/FromInputs/FromInputText";
import PageTitle from "../../common/PageTitle/PageTitle";
import auth from "../../config/firebase.config";
import { slugCreator } from "../../utils/SlugCreator";
import todayDate from "../../utils/TodayDate";
import { IBlogInputs } from "../../utils/Types";
import { blogInputs } from "../../utils/YupBlogSchema";
import { styles } from "./Styles/AddNewBlogStyles";
import { defaultValues } from "./DefaultValue";
import InputFileUpload from "../../common/FromInputs/InputFileUpload";

const AddNewBlog: FC = () => {
  const [user] = useAuthState(auth);
  // const [loading, setLoading] = useState(false);
  const fullDate = todayDate;

  /**
   * 1. use methods property from react hooks from
   * 2. pass 'IBlogInputs' interface and pass the YUP validation  'blogInputs' schema
   */
  const methods = useForm<IBlogInputs>({
    resolver: yupResolver(blogInputs),
    mode: "onChange",
    defaultValues: defaultValues,
  });
  /**
   * 1. Destructure the all property from 'methods'
   */
  const { handleSubmit, control } = methods;
  /**
   * 1. Form handle submit function
   */
  const fromSubmitHandler: SubmitHandler<IBlogInputs> = async (
    data: IBlogInputs
  ) => {
    const title = data?.title;
    // ! slugCreator is a function call from utility
    const slug = slugCreator(title);
    const description = data?.description;
    const image = data?.image;
    const source = data.source;
    const category = data?.category;
    const author = user?.displayName;
    const date = fullDate;

    const newBlog = {
      title,
      slug,
      description,
      image,
      source,
      category,
      author,
      date,
    };
    console.log("new dynamic", newBlog);
    // setLoading(true);
    // reset();
    // toast.success("Sign Up Success");
  };

  return (
    <Container component="div" maxWidth="md">
      <PageTitle title="Add New Blog " />
      <Box sx={styles.main}>
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(fromSubmitHandler)}
            // sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* blog title inputs */}
              <Grid item xs={12} md={6}>
                <FormInputText name="title" control={control} label="Title" />
              </Grid>
              {/* blog source inputs */}
              <Grid item xs={12} md={6}>
                <FormInputText name="source" control={control} label="Source" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* blog author inputs from firebase user name  */}
                <FormInputDefaultText
                  name="author"
                  setValue={user?.displayName as string}
                  control={control}
                  label="Author"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                {/* blog dropdown category from dynamic data */}
                <FormInputDropdown
                  control={control}
                  name="category"
                  label="Category"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                {/* image upload */}
                {/* <Box sx={styles.imageInput}>
                  <input {...register("image")} type="file" />
                  <br />
                  {errors?.image && <small>{errors?.image?.message}</small>}
                </Box> */}
                <InputFileUpload name="image" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* blog date  */}
                <Chip icon={<TodayIcon />} label={fullDate} />
              </Grid>
              <Grid item xs={12}>
                {/* blog textarea */}
                <FormInputTextarea
                  name="description"
                  control={control}
                  label="Description"
                />
              </Grid>
            </Grid>
            {/* submit button  */}
            <LoadingButton
              type="submit"
              variant="contained"
              endIcon={<AddIcon />}
              // loading={loading}
              sx={{ mt: 3, mb: 2, py: 1.5, px: 4 }}
            >
              Add Blog
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};
export default AddNewBlog;
