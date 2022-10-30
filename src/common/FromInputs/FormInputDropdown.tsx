import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import data from "../../data/data";
import { FormInputProps } from "../../utils/Types";

const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  label,
  defaultValue,
}) => {
  const { control } = useFormContext();

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Select
            onChange={onChange}
            value={value}
            input={<OutlinedInput label={label} />}
          >
            {data.blogCategory.map((item) => (
              <MenuItem key={item.id} value={item.label}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};
export { FormInputDropdown };

