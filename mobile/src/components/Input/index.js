import React, { useEffect, useRef, useCallback } from 'react';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

const Input = ({ name, icon, onChangeText, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const handleChangeText = useCallback(
    (text) => {
      if (inputRef.current) inputRef.current.value = text;

      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      getValue() {
        if (inputRef.current) return inputRef.current.value;

        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        inputRef.current.setNativeProps({ text: '' });
        inputRef.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={18} color="#5065a8" />

      <TextInput
        ref={inputRef}
        placeholderTextColor="#5065a8"
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};

export default Input;
