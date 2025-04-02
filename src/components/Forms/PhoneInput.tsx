"use client";

import { BaseTextFieldProps, TextField } from "@mui/material";
import { useField } from "formik";
import { forwardRef } from "react";
import { PatternFormat, PatternFormatProps } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const NumericFormatCustom = forwardRef<PatternFormatProps, CustomProps>(
  function NumericFormatCustom({ onChange, name, ...other }, ref) {
    return (
      <PatternFormat
        {...other}
        name={name}
        getInputRef={ref}
        valueIsNumericString
        format="(##) #####-####"
        onValueChange={(values) => {
          onChange({
            target: {
              name: name,
              value: values.value,
            },
          });
        }}
      />
    );
  }
);

export interface ICurrencyInputProps extends BaseTextFieldProps {
  name: string;
}

export const PhoneInput = ({ name, ...props }: ICurrencyInputProps) => {
  const [input, meta] = useField({ name });

  return (
    <TextField
      {...props}
      {...input}
      name={name}
      InputProps={{
        inputComponent: NumericFormatCustom as any,
      }}
      variant="outlined"
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
    />
  );
};
