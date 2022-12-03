import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import {ITextVarinat} from '../theme/textVariants';

interface StyleProps {
  style?: ViewStyle | TextStyle | ImageStyle;
  borderColor: string;
  borderRadius: number;
  textColor: string;
  textVariant: ITextVarinat;
  gap?: number;
}

interface Props extends StyleProps {
  icon?: React.ReactElement;
  onPress?: () => void;
  children: string;
}

const Button: React.FC<Props> = ({icon, onPress, children, ...styleProps}) => {
  const {root, text, image} = styles(styleProps);

  return (
    <TouchableOpacity style={root} onPress={onPress}>
      <View style={image}>{icon}</View>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = ({
  borderColor,
  textColor,
  textVariant,
  borderRadius,
  gap,
  style,
}: StyleProps) =>
  StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      padding: 15,
      borderColor: borderColor,
      borderRadius: borderRadius,
      ...style,
    },
    text: {
      fontFamily: textVariant.fontFamily,
      fontSize: textVariant.fontSize,
      lineHeight: textVariant.lineHeight,
      color: textColor,
    },
    image: {
      marginRight: gap,
    },
  });

export default Button;
