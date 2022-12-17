import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../../screens/vetrinaLive/Dashboard';
import Payment from '../../screens/vetrinaLive/Payment';
import Orders from '../../screens/vetrinaLive/Orders';
import Subsription from '../../screens/vetrinaLive/Subsription';
import SideMenu from '../../components/SideMenu';
import DrawerHeader from '../../components/DrawerHeader';
import {NavigatorScreenParams} from '@react-navigation/native';
import {ProductsRoot, ProductsParamList} from './ProductsRoot/ProductsRoot';

export type VetrinaLiveList = {
  Dashboard: undefined;
  Products: NavigatorScreenParams<ProductsParamList>;
  Orders: undefined;
  Subsription: undefined;
  Payment: undefined;
};

const Drawer = createDrawerNavigator<VetrinaLiveList>();

export default function VetrinaLiveRoot() {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideMenu {...props} />}
      screenOptions={{header: props => <DrawerHeader {...props} />}}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Products" component={ProductsRoot} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Subsription" component={Subsription} />
    </Drawer.Navigator>
  );
}
