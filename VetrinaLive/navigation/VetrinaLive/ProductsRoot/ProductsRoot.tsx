import React from 'react';
import ListView from '../../../screens/vetrinaLive/products/ListView';
import NewProduct from '../../../screens/vetrinaLive/products/NewProduct';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type ProductsParamList = {
  ListView: undefined;
  NewProduct: undefined;
};
const ProductsStack = createNativeStackNavigator<ProductsParamList>();

export function ProductsRoot() {
  return (
    <ProductsStack.Navigator screenOptions={{headerShown: false}}>
      <ProductsStack.Screen name="ListView" component={ListView} />
      <ProductsStack.Screen name="NewProduct" component={NewProduct} />
    </ProductsStack.Navigator>
  );
}
