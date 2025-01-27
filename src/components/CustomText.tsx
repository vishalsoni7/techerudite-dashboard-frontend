import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

export interface CustomTextFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  label,
  type,
  disabled,
  placeholder,
  ...rest
}) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      sx={{ border: "none" }}
      id={name}
      label={label}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      disabled={disabled}
      fullWidth
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error ? meta.error : ""}
      {...field}
      {...rest}
    />
  );
};
