import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, spacing} from '../theme/main';
import textVariants from '../theme/textVariants';

interface Props {
  content?: string;
  marginVertical?: number;
  color?: string;
}

const Divider: React.FC<Props> = ({content, marginVertical, color}) => {
  return (
    <View
      style={{
        ...styles.root,
        marginVertical: marginVertical,
        backgroundColor: color,
      }}>
      <View style={styles.divider} />
      {content && (
        <View style={styles.content}>
          <Text style={styles.text}>{content}</Text>
        </View>
      )}
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grey[500],
  },
  content: {
    paddingLeft: spacing.l,
    paddingRight: spacing.l,
  },
  text: {
    ...textVariants.button.large,
    color: colors.grey[500],
  },
});

export default Divider;
