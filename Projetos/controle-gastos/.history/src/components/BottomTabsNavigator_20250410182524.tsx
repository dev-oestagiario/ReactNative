import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AddExpenseScreen } from '../screens/AddExpenseScreen';
import { ExpenseListScreen } from '../screens/ExpenseListScreen';
import { SummaryScreen } from '../screens/SummaryScreen';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  color: string;
  size: number;
};

type RootTabParamList = {
  Adicionar: undefined;
  Gastos: undefined;
  Resumo: undefined;
};

export const BottomTabsNavigator: React.FC = () => {
  const screenOptions = ({ route }: { route: RouteProp<RootTabParamList> }): BottomTabNavigationOptions => ({
    tabBarIcon: ({ color, size }: TabBarIconProps) => {
      let iconName: string;

      if (route.name === 'Adicionar') {
        iconName = 'plus';
      } else if (route.name === 'Gastos') {
        iconName = 'format-list-bulleted';
      } else {
        iconName = 'chart-pie';
      }

      return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Adicionar"
        component={AddExpenseScreen}
      />
      <Tab.Screen
        name="Gastos"
        component={ExpenseListScreen}
      />
      <Tab.Screen
        name="Resumo"
        component={SummaryScreen}
      />
    </Tab.Navigator>
  );
};