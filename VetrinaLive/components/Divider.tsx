import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, spacing} from '../theme/main';
import textVariants from '../theme/textVariants';

interface StyleProps {
  marginVertical?: number;
  color?: string;
}

interface Props extends StyleProps {
  content?: string;
}

const Divider: React.FC<Props> = ({content, ...styleProps}) => {
  const {root, contentStyle, divider, text} = styles(styleProps);
  return (
    <View style={root}>
      <View style={divider} />
      {content && (
        <View style={contentStyle}>
          <Text style={text}>{content}</Text>
        </View>
      )}
      <View style={divider} />
    </View>
  );
};

const styles = ({marginVertical, color}: StyleProps) =>
  StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: marginVertical,
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: color ?? colors.grey[500],
    },
    contentStyle: {
      paddingLeft: spacing.l,
      paddingRight: spacing.l,
    },
    text: {
      ...textVariants.button.large,
      color: colors.grey[500],
    },
  });

export default Divider;
