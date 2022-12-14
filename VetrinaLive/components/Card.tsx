import React from 'react';
import {ImageStyle, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {colors, spacing} from '../theme/main';
import LinearGradient from 'react-native-linear-gradient';

type StyleProps = {
  backgroundColor?: string;
  height?: number | string;
  elevation?: number;
  marginTop?: number;
  marginBottom?: number;
  marginStart?: number;
  marginEnd?: number;
  borderRadius?: number;
  style?: ViewStyle | TextStyle | ImageStyle;
};

type Props = StyleProps & {
  linearGradient?: string[];
  children?: React.ReactNode | React.ReactNode[];
};

const Card: React.FC<Props> = ({children, linearGradient, ...styleProps}) => {
  const {root} = styles(styleProps);
  return (
    <View style={root}>
      {linearGradient ? (
        <LinearGradient
          colors={linearGradient}
          style={{minHeight: styleProps.height}}>
          {React.Children.toArray(children) ?? <></>}
        </LinearGradient>
      ) : (
        React.Children.toArray(children) ?? <></>
      )}
    </View>
  );
};

const styles = ({
  backgroundColor,
  height,
  elevation,
  marginTop,
  marginBottom,
  marginEnd,
  marginStart,
  borderRadius,
  style,
}: StyleProps) =>
  StyleSheet.create({
    root: {
      backgroundColor: backgroundColor ?? colors.white,
      height: height,
      shadowColor: colors.grey[700],
      elevation: elevation,
      marginTop: marginTop ?? 1.5 * spacing.s,
      marginBottom: marginBottom ?? 1.5 * spacing.s,
      marginStart: marginStart ?? 1.8125 * spacing.s,
      marginEnd: marginEnd ?? 1.8125 * spacing.s,
      borderRadius: borderRadius ?? 1.25 * spacing.s,
      ...style,
    },
  });

export default Card;
