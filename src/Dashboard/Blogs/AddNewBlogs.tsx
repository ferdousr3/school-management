import { FC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import TodayIcon from "@mui/icons-material/Today";
import { LoadingButton } from "@mui/lab";
import { Box, Container, Grid } from "@mui/material";
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
import { imageBBKey, mainLink } from "../../utils/ApiLInk";
import { toast } from "react-toastify";

const AddNewBlog: FC = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
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
  const { handleSubmit, control, reset } = methods;
  /**
   * 1. Form handle submit function
   */
  const fromSubmitHandler: SubmitHandler<IBlogInputs> = async (
    data: IBlogInputs
  ) => {
    /**
     **setLoading active here for dabble clicking on button
     */
    setLoading(true);
    /**
     **add data from input form
     */
    const title = data?.title;
    // * slugCreator is a function call from utility
    const slug = slugCreator(title);
    const description = data?.description;
    const source = data?.source;
    const category = data?.category;
    const author = user?.displayName;
    const date = fullDate;

    /**
     **FormData for image POST request,
     ** if we don't use it then image element will be broken
     */
    const image = data.image[0];
    const formDate = new FormData();
    formDate.append("image", image);

    //image bb picture upload link
    const imageBBUrl = `https://api.imgbb.com/1/upload?key=${imageBBKey}`;
    /**
     **upload image by imageBBUrl link
     */
    fetch(imageBBUrl, {
      method: "POST",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
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

          const baseUrl = `${mainLink}/blog`;
          fetch(baseUrl, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newBlog),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.id) {
                toast.success(`${title} added `);
                reset();
                setLoading(false);
              } else {
                toast.error(`${title} not added `);
                setLoading(false);
              }
            });
        }
      });
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
                  name={user?.displayName as string}
                  setValue={user?.displayName as string}
                  control={control}
                  label={user?.displayName as string}
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
                <InputFileUpload name="image" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* blog date  */}
                <Chip color="primary" icon={<TodayIcon />} label={fullDate} />
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
              loadingPosition="end"
              endIcon={<AddIcon />}
              loading={loading}
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
