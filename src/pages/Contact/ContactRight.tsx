import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ContactForm } from "../../utils/Schemas/YupSchema";
import { IContactInputs } from "../../utils/Types";
import { styles } from "./Styles/ContactStyles";

// type ContactRightProps = {

// };

const ContactRight: React.FC = () => {
  // ! react hooks from
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IContactInputs>({
    resolver: yupResolver(ContactForm),
    mode: "onChange",
  });

  /**
   * contact from submit handler
   */
  const fromSubmitHandler: SubmitHandler<IContactInputs> = async (
    data: IContactInputs
  ) => {
    reset();
  };
  return (
    <Grid item xs={12} md={6}>
      <Grid container>
        <Grid item sx={styles.contactRight}>
          <Typography component="h1" sx={styles.contactRightTitle}>
            Get In Touch:
          </Typography>
          <Typography component="h6" sx={styles.contactRightSubTitle}>
            Fields marked with an * are required
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(fromSubmitHandler)}
            sx={{ mt: 2, maxWidth: "30rem" }}
          >
            <Controller
              defaultValue="Jon"
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  required
                  type="text"
                  {...field}
                  sx={{ mb: "14px" }}
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="Name"
                  autoFocus
                  error={!!errors?.name}
                  helperText={errors.name ? errors.name?.message : ""}
                />
              )}
            />
            <Controller
              name="email"
              defaultValue="exp@mail"
              control={control}
              render={({ field }) => (
                <TextField
                  required
                  type="email"
                  {...field}
                  sx={{ mb: "14px" }}
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="Email"
                  autoFocus
                  error={!!errors?.email}
                  helperText={errors.email ? errors.email?.message : ""}
                />
              )}
            />
            <Controller
              name="phone"
              defaultValue="+8801122"
              control={control}
              render={({ field }) => (
                <TextField
                  required
                  type="text"
                  {...field}
                  sx={{ mb: "14px" }}
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="Phone"
                  autoFocus
                  error={!!errors?.phone}
                  helperText={errors.phone ? errors.phone?.message : ""}
                />
              )}
            />
            <Controller
              name="message"
              defaultValue="Write Your messages"
              control={control}
              render={({ field }) => (
                <TextField
                  required
                  type="text"
                  {...field}
                  fullWidth
                  name="message"
                  autoComplete="Message"
                  id="outlined-multiline-static"
                  label="Your Comment"
                  multiline
                  rows={2}
                  autoFocus
                  error={!!errors?.message}
                  helperText={errors.message ? errors.message?.message : ""}
                />
              )}
            />
            {/* contact from submit button */}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={styles.submitButton}
            >
              Contact Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ContactRight;
