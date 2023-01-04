import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../../screens/vetrinaLive/Dashboard';
import Payment from '../../screens/vetrinaLive/Payment';

import Subsription from '../../screens/vetrinaLive/Subsription';
import NavigationDrawer from '../../components/NavigationDrawer';
import NavigationHeader from '../../components/NavigationHeader';
import {NavigatorScreenParams} from '@react-navigation/native';
import {ProductsRoot, ProductsParamList} from './ProductsRoot/ProductsRoot';
import {OrdersRoot, OrdersParamList} from './OrdersRoot/OrdersRoot';

export type VetrinaLiveList = {
  Dashboard: undefined;
  Products: NavigatorScreenParams<ProductsParamList>;
  Orders: NavigatorScreenParams<OrdersParamList>;
  Subsription: undefined;
  Payment: undefined;
};

const Drawer = createDrawerNavigator<VetrinaLiveList>();

export default function VetrinaLiveRoot() {
  return (
    <Drawer.Navigator
      drawerContent={props => <NavigationDrawer {...props} />}
      screenOptions={{header: props => <NavigationHeader {...props} />}}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Products" component={ProductsRoot} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Orders" component={OrdersRoot} />
      <Drawer.Screen name="Subsription" component={Subsription} />
    </Drawer.Navigator>
  );
}
