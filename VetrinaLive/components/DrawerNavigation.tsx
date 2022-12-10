import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Products from '../screens/Products';
import SideMenu from './SideMenu';

export type DrawerParamList = {
  Home: undefined;
  Products: undefined;
};

const screens = [
  {
    name: 'Home' as keyof DrawerParamList,
    component: Home,
  },
  {
    name: 'Products' as keyof DrawerParamList,
    component: Products,
  },
];

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function VetrinaLiveRoot() {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideMenu {...props} />}
      initialRouteName="Home">
      {screens.map(({name, component}) => (
        <Drawer.Screen name={name} component={component} key={name} />
      ))}
    </Drawer.Navigator>
  );
}
