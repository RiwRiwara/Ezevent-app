import React, { useState } from "react";
import {
  Input,
  InputField,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
} from "@gluestack-ui/themed";

export const CustomTextInput = ({ label, placeholder, errorMessage, type, onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
    onInputChange(value); 
  };
  

  return (
    <>
      <FormControlLabel mb="$1">
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputField
          type={type}
          value={inputValue} 
          placeholder={placeholder}
          onChangeText={handleInputChange} 
        />
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </>
  );
};
