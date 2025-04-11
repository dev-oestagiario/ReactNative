import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AddExpenseScreen } from '../screens/AddExpenseScreen';
import { ExpenseListScreen } from '../screens/ExpenseListScreen';
import { SummaryScreen } from '../screens/SummaryScreen';

type RootTabParamList = {
  Adicionar: undefined;
  Gastos: undefined;
  Resumo: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type TabBarIconProps = {
  color: string;
  size: number;
};

export const BottomTabsNavigator: React.FC = () => {
  const getIconName = (routeName: keyof RootTabParamList): string => {
    switch (routeName) {
      case 'Adicionar': return 'plus';
      case 'Gastos': return 'format-list-bulleted';
      case 'Resumo': return 'chart-pie';
      default: return 'circle';
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }: TabBarIconProps) => (
          <MaterialCommunityIcons 
            name={getIconName(route.name)} 
            size={size} 
            color={color} 
          />
        ),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Adicionar" component={AddExpenseScreen} />
      <Tab.Screen name="Gastos" component={ExpenseListScreen} />
      <Tab.Screen name="Resumo" component={SummaryScreen} />
    </Tab.Navigator>
  );
};