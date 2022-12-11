import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/vetrinaLive/Dashboard';
import Products from '../screens/vetrinaLive/Products';
import Orders from '../screens/vetrinaLive/Orders';
import Subsription from '../screens/vetrinaLive/Subsription';
import SideMenu from '../components/SideMenu';
import DrawerHeader from '../components/DrawerHeader';
export type VetrinaLiveList = {
  Dashboard: undefined;
  Products: undefined;
  Orders: undefined;
  Subsription: undefined;
};

const Drawer = createDrawerNavigator<VetrinaLiveList>();

export default function VetrinaLiveRoot() {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideMenu {...props} />}
      screenOptions={{header: props => <DrawerHeader {...props} />}}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Subsription" component={Subsription} />
    </Drawer.Navigator>
  );
}
