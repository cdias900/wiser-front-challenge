import React, { Dispatch, SetStateAction } from 'react';

import { Input, ErrorMsg, Label } from './styles';

interface CustomInputProps {
  onChange: Dispatch<SetStateAction<string>>;
  required?: boolean;
  error?: boolean;
  type?: string;
  placeholder?: string;
  label: string;
  errorMsg?: string;

}

const CustomInput: React.FC<CustomInputProps> = ({
  onChange, required, error, type, placeholder, label, errorMsg,
}) => (
  <>
    <Label>{label}</Label>
    <Input
      type={type || 'text'}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      error={error}
    />
    {error && <ErrorMsg>{errorMsg}</ErrorMsg>}
  </>
);

export default CustomInput;
