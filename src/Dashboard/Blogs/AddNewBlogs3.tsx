import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import TodayIcon from "@mui/icons-material/Today";
import { LoadingButton } from "@mui/lab";
import {
    Box,
    // Typography,
    Container, Grid, MenuItem, TextField
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import PageTitle from "../../common/PageTitle/PageTitle";
import auth from "../../config/firebase.config";
import data from "../../data/data";
import { slugCreator } from "../../utils/Functions/SlugCreator";
import todayDate from "../../utils/Functions/TodayDate";
import { blogInputs } from "../../utils/Schemas/YupBlogSchema";
import { IBlogInputs } from "../../utils/Types";
import { styles } from "./Styles/AddNewBlogStyles";

const AddNewBlog: FC = () => {
  const [user] = useAuthState(auth);
  // const [loading, setLoading] = useState(false);
  const fullDate = todayDate;

  // react hooks from with you validation schema
  const {
    handleSubmit,
    control,
    register,
    // reset,
    formState: { errors },
  } = useForm<IBlogInputs>({
    resolver: yupResolver(blogInputs),
    mode: "onChange",
  });
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
    console.log(newBlog);
    // setLoading(true);
    // reset();
    // toast.success("Sign Up Success");
  };

  return (
    <Container component="div" maxWidth="md">
      <PageTitle title="Add New Blog " />
      <Box sx={styles.main}>
        <Box
          component="form"
          onSubmit={handleSubmit(fromSubmitHandler)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            {/* blog title */}
            <Grid item xs={12} md={6}>
              <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    type="text"
                    {...field}
                    autoComplete="given-title"
                    fullWidth
                    label="Title"
                    autoFocus
                    error={!!errors?.title}
                    helperText={errors.title ? errors.title?.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="source"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    type="text"
                    {...field}
                    autoComplete="source"
                    fullWidth
                    label="Source"
                    autoFocus
                    error={!!errors?.source}
                    helperText={errors.source ? errors.source?.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="author"
                control={control}
                defaultValue={user?.displayName as string}
                render={({ field }) => (
                  <TextField
                    disabled
                    type="text"
                    {...field}
                    value={user?.displayName as string}
                    autoComplete="author"
                    fullWidth
                    label="Author"
                    autoFocus
                    error={!!errors?.author}
                    helperText={errors.author ? errors.author?.message : ""}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="category"
                defaultValue="Java"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    fullWidth
                    label="Category"
                    id="outlined-select-currency"
                    select
                    error={!!errors?.category}
                    helperText={errors.category ? errors.category?.message : ""}
                  >
                    {data?.blogCategory?.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={styles.imageInput}>
                <input
                  {...register("image")}
                  type="file"
                />
                <br />
                {errors?.image && <small>{errors?.image?.message}</small>}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Chip icon={<TodayIcon />} label={fullDate} />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="description"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    fullWidth
                    label="Description"
                    multiline
                    rows={4}
                    autoFocus
                    error={!!errors?.description}
                    helperText={
                      errors.description ? errors.description?.message : ""
                    }
                  />
                )}
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
      </Box>
    </Container>
  );
};
export default AddNewBlog;
