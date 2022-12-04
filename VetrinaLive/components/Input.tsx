import React, {useState, useEffect} from 'react';
import {
  ImageStyle,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
  View,
  Text,
} from 'react-native';
import {colors, spacing} from '../theme/main';
import validateInput from '../helpers/validateInput';

interface Props {
  style?: ViewStyle | TextStyle | ImageStyle;
  placeholder?: string;
  value?: string;
  type: 'name' | 'password' | 'emailAddress';
}

const Input: React.FC<Props> = ({placeholder, style, value, type}) => {
  const {input, onBlur, onFocus} = styles(style);
  const [text, setText] = useState<string>();
  const [inputStyle, setInputStyle] = useState(input);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (value) {
      setText(value);
      setError(validateInput(value, type));
    }
    console.log(text);
  }, [text, type, value]);

  const handleOnFocus = () => {
    setInputStyle({...inputStyle, ...onFocus});
  };

  const handleOnBlur = () => {
    setInputStyle({...inputStyle, ...onBlur});
  };

  return (
    <View>
      <TextInput
        style={inputStyle}
        textContentType={type}
        secureTextEntry={type === 'password'}
        value={text}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {error && <Text>{error}</Text>}
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
  });

export default Input;
