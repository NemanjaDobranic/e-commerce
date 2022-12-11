import {DrawerContentComponentProps} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, spacing} from '../theme/main';
import textVariants from '../theme/textVariants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../assets/images/logo.svg';
import useAuth from '../hooks/useAuth';

const icons = [
  {
    routeName: 'Dashboard',
    icon: 'home',
  },
  {
    routeName: 'Products',
    icon: 'shop',
  },
  {
    routeName: 'Orders',
    icon: 'shopping-cart',
  },
  {
    routeName: 'Subsription',
    icon: 'euro',
  },
];

const SideMenu: React.FC<DrawerContentComponentProps> = props => {
  const {state, navigation} = props;
  const [focused, setFocused] = useState(state.routes[0].name);
  const {signOut} = useAuth();
  const getIcon = (routeName: string) =>
    icons.find(icon => icon.routeName === routeName)?.icon ?? 'device-unknown';

  return (
    <DrawerContentScrollView {...props} style={styles.root}>
      <Logo style={styles.logo} />
      {state.routes.map(route => (
        <DrawerItem
          label={route.name}
          key={route.key}
          onPress={() => {
            setFocused(route.name);
            navigation.navigate(route.name);
          }}
          inactiveTintColor={colors.white}
          labelStyle={styles.labelStyle}
          pressColor={colors.white}
          activeTintColor={colors.primary.black}
          activeBackgroundColor={colors.white}
          focused={focused === route.name}
          icon={iconProps => <Icon name={getIcon(route.name)} {...iconProps} />}
        />
      ))}

      <DrawerItem
        label="Logout"
        labelStyle={styles.labelStyle}
        onPress={() => signOut()}
        inactiveTintColor={colors.white}
        pressColor={colors.white}
        icon={iconProps => <Icon name="logout" {...iconProps} />}
      />
    </DrawerContentScrollView>
  );
};

type Style = {
  root: ViewStyle;
  labelStyle: TextStyle;
  logo: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  root: {
    backgroundColor: colors.primary.black,
  },
  labelStyle: {...textVariants.title.title4},
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: spacing.l,
  },
});

export default SideMenu;
