import React from 'react';
import Bulk from '../../../screens/vetrinaLive/orders/Bulk';
import OrderInfo from '../../../screens/vetrinaLive/orders/OrderInfo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type OrdersParamList = {
  Bulk: undefined;
  OrderInfo: undefined;
};
const Stack = createNativeStackNavigator<OrdersParamList>();

export function OrdersRoot() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bulk" component={Bulk} />
      <Stack.Screen name="OrderInfo" component={OrderInfo} />
    </Stack.Navigator>
  );
}
