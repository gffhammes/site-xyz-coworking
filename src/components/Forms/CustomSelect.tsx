import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export interface ICustomSelectProps<T> {
  options: T[];
  displayKey: keyof T;
  valueKey: keyof T;
  onChange: (newValue: string) => void;
  currentValue: string;
  label: string;
}

export const CustomSelect = <T,>({
  currentValue,
  displayKey,
  onChange,
  options,
  valueKey,
  label,
}: ICustomSelectProps<T>) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={currentValue} label={label} onChange={handleChange}>
          {options.map((option) => {
            return (
              <MenuItem value={option[valueKey] as string}>
                {option[displayKey] as string}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
