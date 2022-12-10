import {DrawerHeaderProps} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, TextStyle, View} from 'react-native';
import {Text} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {colors, spacing} from '../theme/main';
import textVariants from '../theme/textVariants';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.m,
    paddingVertical: 1.125 * spacing.m,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey[400],
  },
  menu: {
    fontWeight: '300',
  },
  route: {
    color: colors.primary.black,
    marginLeft: spacing.m,
    ...textVariants.title.title4,
  },
  actions: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    marginLeft: spacing.l,
  } as TextStyle,
});

const headerToolbar = [
  {
    routeName: 'Home',
    actions: [],
  },
  {
    routeName: 'Products',
    actions: [
      <FeatherIcon
        name="search"
        color={colors.primary.black}
        size={0.875 * spacing.xl}
      />,
      <FeatherIcon
        style={styles.action}
        name="filter"
        color={colors.primary.black}
        size={0.875 * spacing.xl}
      />,
    ],
  },
  {
    routeName: 'Orders',
    actions: [
      <FeatherIcon
        name="search"
        color={colors.primary.black}
        size={0.875 * spacing.xl}
      />,
      <FeatherIcon
        style={styles.action}
        name="filter"
        color={colors.primary.black}
        size={0.875 * spacing.xl}
      />,
    ],
  },

  {
    routeName: 'Subsription',
    actions: [],
  },
];

const DrawerHeader: React.FC<DrawerHeaderProps> = ({navigation, route}) => {
  const getActions = (routeName: string) =>
    headerToolbar.find(element => element.routeName === routeName)?.actions ??
    [];

  return (
    <View style={styles.root}>
      <FeatherIcon
        name="menu"
        size={0.875 * spacing.xl}
        color={colors.primary.black}
        style={styles.menu}
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.route}>{route.name}</Text>
      <View style={styles.actions}>
        {getActions(route.name).map((action, index) => (
          <View key={index}>{action}</View>
        ))}
      </View>
    </View>
  );
};

export default DrawerHeader;
