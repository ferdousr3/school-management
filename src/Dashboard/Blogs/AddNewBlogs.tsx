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
import { FC } from "react";
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

const AddNewBlog: FC = () => {
  const [user] = useAuthState(auth);
  // const [loading, setLoading] = useState(false);
  const fullDate = todayDate;

  // react hooks from with you validation schema
  const methods = useForm<IBlogInputs>({
    resolver: yupResolver(blogInputs),
    mode: "onChange",
  });

  const {
    handleSubmit,
    // reset,
    control,
    formState: { errors },
    register,
  } = methods;
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
    const author = data?.author;
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
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* blog title */}
              <Grid item xs={12} md={6}>
                <FormInputText
                  defaultValue=""
                  name="title"
                  control={control}
                  label="Title"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormInputText
                  defaultValue=""
                  name="source"
                  control={control}
                  label="Source"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormInputDefaultText
                  defaultValue={user?.displayName as string}
                  name="author"
                  setValue={user?.displayName as string}
                  control={control}
                  label="Author"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormInputDropdown
                  defaultValue="Java"
                  control={control}
                  name="category"
                  label="Category"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={styles.imageInput}>
                  <input {...register("image")} type="file" />
                  <br />
                  {errors?.image && <small>{errors?.image?.message}</small>}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Chip icon={<TodayIcon />} label={fullDate} />
              </Grid>
              <Grid item xs={12}>
                <FormInputTextarea
                  defaultValue=""
                  name="description"
                  control={control}
                  label="Description"
                />
              </Grid>
            </Grid>
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
