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
  type: 'name' | 'password' | 'emailAddress' | 'telephoneNumber' | 'none';
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  isValid?: (isValid: boolean) => void;
  dirty?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Input: React.FC<Props> = ({
  placeholder,
  style,
  value,
  type,
  onChange,
  isValid,
  dirty,
  icon,
  disabled,
}) => {
  const {textInputWrapper, textInput, onBlur, onFocus, errorLabel} = styles(
    style,
    icon,
    disabled,
  );
  const [inputStyle, setInputStyle] = useState(textInput);
  const [error, setError] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(!!dirty);

  useEffect(() => {
    setTouched(!!(value && value.length > 0));
    const validationString = validateInput(value as string, type);
    isValid && isValid(!validationString.length);
    if (touched || dirty) {
      setError(validationString);
    }
  }, [value, dirty, touched]);

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
      <View style={textInputWrapper}>
        {icon && <View>{icon}</View>}
        <TextInput
          style={inputStyle}
          textContentType={type}
          secureTextEntry={type === 'password'}
          value={value}
          placeholder={placeholder}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleTextChange}
          editable={!disabled}
        />
      </View>
      {error && <Text style={errorLabel}>{error}</Text>}
    </View>
  );
};

const styles = (
  style?: ViewStyle | TextStyle | ImageStyle,
  icon?: React.ReactNode,
  disabled?: boolean,
) =>
  StyleSheet.create({
    textInputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      ...(icon && {
        borderWidth: spacing.s / 8,
        borderColor: '#0a254052',
        color: '#0a254052',
        borderRadius: 0.75 * spacing.s,
        paddingVertical: spacing.m,
        paddingHorizontal: 1.25 * spacing.m,
        ...style,
      }),
      ...(disabled && {
        backgroundColor: colors.grey[300],
        color: colors.grey[300],
        opacity: 0.5,
      }),
    },
    textInput: {
      flexGrow: 1,
      flexShrink: 0,
      fontSize: 0.875 * spacing.m,
      lineHeight: 1.125 * spacing.m,
      ...(!icon
        ? {
            borderWidth: spacing.s / 8,
            borderColor: '#0a254052',
            color: '#0a254052',
            borderRadius: 0.75 * spacing.s,
            paddingVertical: spacing.m,
            paddingHorizontal: 1.25 * spacing.m,
            ...style,
          }
        : {paddingHorizontal: 1.25 * spacing.s}),
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
      marginBottom: 1.5 * spacing.s,
      marginLeft: spacing.s / 2,
    },
  });

export default Input;
