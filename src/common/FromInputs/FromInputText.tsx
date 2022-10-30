import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "../../utils/Types";

const FromInputText: React.FC<FormInputProps> = ({
  name,
  label,
  defaultValue,
}) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <TextField
            helperText={error ? error.message : null}
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant="outlined"
          />
        )}
      />
    </>
  );
};
export default FromInputText;
