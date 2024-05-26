import {
  Box,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Text,
} from "@gluestack-ui/themed";
import React from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { TextInputProps } from "react-native";
import { SchoolFormData } from "../interface/register";

interface FormInputProps {
  control: Control<FieldValues | any>;
  errors?: FieldErrors<FieldValues>;
  name: keyof SchoolFormData;
  label?: string;
  placeholder: string;
  props?: TextInputProps;
}
const FormInput: React.FC<FormInputProps> = ({
  control,
  errors,
  name,
  label,
  placeholder,
  props,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <Box>
            <FormControlLabel mb={4} mt="$2">
              <FormControlLabelText>{label}</FormControlLabelText>
            </FormControlLabel>
            <Input width={"100%"}>
              <InputField
                type="text"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder={placeholder}
                {...props}
              />
            </Input>
            {errors && errors[name] && (
              <Text color={"$red600"}>{errors[name]?.message}</Text>
            )}
          </Box>
        )}
      />
    </>
  );
};

export default FormInput;
