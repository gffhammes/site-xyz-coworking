"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

export interface ICustomTextFieldProps {
  placeholder: string;
  name: string;
  textFieldProps?: TextFieldProps;
}

export const CustomTextField = ({
  name,
  placeholder,
  textFieldProps,
}: ICustomTextFieldProps) => {
  const [input, meta, helper] = useField({ name });

  return (
    <TextField
      placeholder={placeholder}
      {...textFieldProps}
      {...input}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
    />
  );
};
