import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CartScreen from '~/Screens/Cart/Screens/CartScreen/CartScreen.tsx';
import Checkout from '~/Screens/Cart/Screens/CartScreen/modals/Checkout.tsx';

type ScreenProps = {
  CartScreen: undefined;
  Checkout: undefined;
};

const Stack = createStackNavigator<ScreenProps>();

const CartNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="CartScreen">
      <Stack.Screen
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
        name="CartScreen"
        component={CartScreen}
      />
      <Stack.Screen
        options={{
          presentation: 'modal',
          headerShown: false,
          animationTypeForReplace: 'push',
          cardStyle: {
            backgroundColor: '#141414',
          },
        }}
        name="Checkout"
        component={Checkout}
      />
    </Stack.Navigator>
  );
};

export default CartNavigation;
