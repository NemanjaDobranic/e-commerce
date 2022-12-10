import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/vetrinaLive/Dashboard';
import Products from '../screens/vetrinaLive/Products';
import Orders from '../screens/vetrinaLive/Orders';
import Subsription from '../screens/vetrinaLive/Subsription';
import SideMenu from '../components/SideMenu';
import DrawerHeader from '../components/DrawerHeader';
export type DrawerParamList = {
  Dashboard: undefined;
  Products: undefined;
  Orders: undefined;
  Subsription: undefined;
};

const screens = [
  {
    name: 'Dashboard' as keyof DrawerParamList,
    component: Dashboard,
  },
  {
    name: 'Products' as keyof DrawerParamList,
    component: Products,
  },
  {
    name: 'Orders' as keyof DrawerParamList,
    component: Orders,
  },
  {
    name: 'Subsription' as keyof DrawerParamList,
    component: Subsription,
  },
];

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function VetrinaLiveRoot() {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideMenu {...props} />}
      screenOptions={{header: props => <DrawerHeader {...props} />}}>
      {screens.map(({name, component}) => (
        <Drawer.Screen name={name} component={component} key={name} />
      ))}
    </Drawer.Navigator>
  );
}
