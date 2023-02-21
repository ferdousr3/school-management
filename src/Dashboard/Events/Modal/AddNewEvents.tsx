import { FC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import { LoadingButton } from "@mui/lab";
import { Box, Container, Grid } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../config/firebase.config";
import PageTitle from "../../../common/PageTitle/PageTitle";
import { styles } from "../Styles/AddNewEventStyles";
import FormInputText from "../../../common/FromInputs/FromInputText";
import { mainLink } from "../../../utils/ApiLInk";
import { IEventInputs } from "../../../utils/Types";
import { eventInputs } from "../../../utils/Schemas/YupEventSchema";
import { defaultValues } from "../defaultValues";

const AddNewEvent: FC = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  /**
   * 1. use methods property from react hooks from
   * 2. pass 'IeventInputs' interface and pass the YUP validation  'eventInputs' schema
   */
  const methods = useForm<IEventInputs>({
    resolver: yupResolver(eventInputs),
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
  const fromSubmitHandler: SubmitHandler<IEventInputs> = async (
    data: IEventInputs
  ) => {
    /**
     **setLoading active here for dabble clicking on button
     */
    setLoading(true);
    /**
     **add data from input form
     */
    const name = data?.name;
    const place = data?.place;
    const time = data?.time;
    const date = data?.date;
    const organizer = data?.organizer;
    // * slugCreator is a function call from utility
    const newEvent = {
      name: name,
      place: place,
      time: time,
      date: date,
      organizer: organizer,
    };

    const baseUrl = `${mainLink}/event`;
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("dad", data);
        if (data.data._id) {
          toast.success(`${name} added `);
          reset();
          setLoading(false);
        } else {
          toast.error(`${name} not added `);
          setLoading(false);
        }
      });
  };

  return (
    <Container component="div" maxWidth="md">
      <PageTitle title="Add New Event " />
      <Box sx={styles.main}>
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(fromSubmitHandler)}
            // sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* event name inputs */}
              <Grid item xs={12} md={6}>
                <FormInputText name="name" control={control} label="Name" />
              </Grid>
              {/* event time inputs */}
              <Grid item xs={12} md={6}>
                <FormInputText name="time" control={control} label="Time" />
              </Grid>
              {/* event title inputs */}
              <Grid item xs={12} md={6}>
                <FormInputText name="date" control={control} label="Date" />
              </Grid>
              {/* event source inputs */}
              <Grid item xs={12} md={6}>
                <FormInputText
                  name="organizer"
                  control={control}
                  label="Organizer"
                />
              </Grid>
              {/* event source inputs */}
              <Grid item xs={12} md={6}>
                <FormInputText name="place" control={control} label="place" />
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
              Add Event
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};
export default AddNewEvent;
