import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {colors, spacing} from '../theme/main';
import textVariants from '../theme/textVariants';
import Icon from 'react-native-vector-icons/MaterialIcons';

export enum AlertType {
  success = 'success',
  error = 'error',
}

interface Props {
  type: AlertType;
  message: string;
  close?: () => void;
  style?: ViewStyle | TextStyle | ImageStyle;
}

const getAssets = (type: AlertType) => {
  switch (type) {
    case 'success':
      return {
        color: colors.green.primary,
        backgroundColor: colors.green.light,
        iconName: 'check-circle-outline',
      };
    case 'error':
      return {
        color: colors.strawberry,
        backgroundColor: colors.coral,
        iconName: 'error-outline',
      };
    default:
      return {
        color: colors.grey[700],
        backgroundColor: colors.grey[300],
        iconName: '',
      };
  }
};

const Alert: React.FC<Props> = ({message, type, close, style}) => {
  const {backgroundColor, color, iconName} = getAssets(type);
  const {root, text} = styles(color, backgroundColor, style);
  return (
    <View style={root}>
      <Icon name={iconName} size={30} color={color} />
      <Text style={text}>{message}</Text>
      <TouchableOpacity onPress={() => close && close()}>
        <Icon name={'close'} size={30} color={color} />
      </TouchableOpacity>
    </View>
  );
};

const styles = (
  color: string,
  backgroundColor: string,
  style?: ViewStyle | TextStyle | ImageStyle,
) =>
  StyleSheet.create({
    root: {
      borderRadius: spacing.s,
      borderWidth: spacing.s / 6,
      borderColor: color,
      backgroundColor: backgroundColor,
      padding: spacing.s,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      marginVertical: spacing.s,
      ...style,
    },

    text: {
      color: color,
      paddingHorizontal: spacing.s,
      ...textVariants.title.title5,
      flexBasis: '80%',
      textAlign: 'justify',
    },
  });

export default Alert;
