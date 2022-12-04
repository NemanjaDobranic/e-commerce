import React, {useState} from 'react';
import {
  ImageStyle,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {colors, spacing} from '../theme/main';

interface Props {
  style?: ViewStyle | TextStyle | ImageStyle;
  placeholder?: string;
}

const Input: React.FC<Props> = ({placeholder, style}) => {
  const {input, onBlur, onFocus} = styles(style);
  const [inputStyle, setInputStyle] = useState(input);

  const handleOnFocus = () => {
    setInputStyle({...inputStyle, ...onFocus});
  };

  const handleOnBlur = () => {
    setInputStyle({...inputStyle, ...onBlur});
  };

  return (
    <TextInput
      style={inputStyle}
      placeholder={placeholder}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    />
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
  });

export default Input;
