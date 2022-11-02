import { Box } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { styles } from "./Styles/FromInputStyles";

type InputFileUploadProps = {
  name: string;
};

const InputFileUpload: React.FC<InputFileUploadProps> = ({ name }) => {
  const { control,register } = useFormContext();
  return (
    <>
      <Box sx={styles.imageInput}>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error }, formState }) => (
            <>
              <input
                type="file"
                // onChange={(e) => {
                //   field.onChange(e.target.files);
                // }}
                {...register('image')}
              />
              <br />
              {<small>{error ? error.message : null}</small>}
            </>
          )}
        />
      </Box>
    </>
  );
};
export default InputFileUpload;
