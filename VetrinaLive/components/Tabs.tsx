import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, spacing} from '../theme/main';

interface Props {
  items: Array<{id: number; name: string}>;
  marginHorizontal?: string | number;
}

const Tabs: React.FC<Props> = ({items, marginHorizontal}) => {
  const [active, setActive] = useState<number>(items[0].id);
  const {root, tab, tabText, activeTab} = styles(
    `${100 / items.length}%`,
    marginHorizontal,
  );
  return (
    <View style={root}>
      {items.map(item => (
        <TouchableOpacity
          style={
            active !== item.id
              ? tab
              : {
                  ...tab,
                  ...activeTab,
                }
          }
          key={item.id}
          onPress={() => setActive(item.id)}>
          <Text
            style={
              active !== item.id
                ? tabText
                : {
                    ...tabText,
                    color: colors.primary.default,
                  }
            }>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = (flexBasis: string, marginHorizontal?: string | number) =>
  StyleSheet.create({
    root: {
      flexWrap: 'nowrap',
      flexDirection: 'row',
      height: spacing.xl,
      justifyContent: 'flex-start',
      marginHorizontal: marginHorizontal ?? 1.875 * spacing.s,
    },
    tab: {
      alignItems: 'center',
      justifyContent: 'center',
      flexBasis: flexBasis,
    },
    tabText: {
      color: colors.grey[600],
    },
    activeTab: {
      borderBottomColor: colors.primary.default,
      borderBottomWidth: spacing.s / 4,
    },
  });

export default Tabs;
