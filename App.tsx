import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BuyerScreen from './screens/BuyerScreen';
import SellerScreen from './screens/SellerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Buyer">
        <Stack.Screen name="Buyer" component={BuyerScreen} />
        <Stack.Screen name="Seller" component={SellerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
