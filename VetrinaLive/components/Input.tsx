/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  ImageStyle,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {colors, spacing} from '../theme/main';
import validateInput from '../helpers/validateInput';

interface Props {
  style?: ViewStyle | TextStyle | ImageStyle;
  placeholder?: string;
  value?: string;
  type: 'name' | 'password' | 'emailAddress';
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  isValid?: (isValid: boolean) => void;
}

const Input: React.FC<Props> = ({
  placeholder,
  style,
  value,
  type,
  onChange,
  isValid,
}) => {
  const {input, onBlur, onFocus, errorLabel} = styles(style);
  const [inputStyle, setInputStyle] = useState(input);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (value) {
      const validationString = validateInput(value, type);
      setError(validationString);
      isValid && isValid(!!validationString);
    }
  }, [value]);

  const handleOnFocus = () => {
    setInputStyle({...inputStyle, ...onFocus});
  };

  const handleOnBlur = () => {
    setInputStyle({...inputStyle, ...onBlur});
  };

  const handleTextChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => onChange && onChange(e);
  return (
    <View>
      <TextInput
        style={inputStyle}
        textContentType={type}
        secureTextEntry={type === 'password'}
        value={value}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleTextChange}
      />
      {error && <Text style={errorLabel}>{error}</Text>}
    </View>
  );
};

const styles = (style?: ViewStyle | TextStyle | ImageStyle) =>
  StyleSheet.create({
    input: {
      borderWidth: spacing.s / 8,
      borderColor: '#0a254052',
      color: '#0a254052',
      borderRadius: 0.75 * spacing.s,
      paddingVertical: spacing.m,
      paddingLeft: 1.25 * spacing.m,
      fontSize: 0.875 * spacing.m,
      lineHeight: 1.125 * spacing.m,
      ...style,
    },
    onFocus: {
      borderColor: colors.primary.default,
      color: colors.primary.black,
    },
    onBlur: {
      borderColor: '#0a254052',
    },
    errorLabel: {
      color: colors.strawberry,
      marginTop: -spacing.s,
      marginBottom: spacing.s,
    },
  });

export default Input;
