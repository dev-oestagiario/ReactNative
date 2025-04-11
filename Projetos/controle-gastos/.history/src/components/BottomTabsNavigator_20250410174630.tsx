import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AddExpenseScreen } from '../screens/AddExpenseScreen';
import { ExpenseListScreen } from '../screens/ExpenseListScreen';
import { SummaryScreen } from '../screens/SummaryScreen';

const Tab = createBottomTabNavigator();

// Tipo para os parâmetros do ícone
type TabBarIconProps = {
  color: string;
  size: number;
};

export const BottomTabsNavigator: React.FC = () => {
  // Opções com tipagem explícita
  const addExpenseOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color, size }: TabBarIconProps) => (
      <MaterialCommunityIcons name="plus" color={color} size={size} />
    ),
  };

  const expenseListOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color, size }: TabBarIconProps) => (
      <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
    ),
  };

  const summaryOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color, size }: TabBarIconProps) => (
      <MaterialCommunityIcons name="chart-pie" color={color} size={size} />
    ),
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Adicionar"
        component={AddExpenseScreen}
        options={addExpenseOptions}
      />
      <Tab.Screen
        name="Gastos"
        component={ExpenseListScreen}
        options={expenseListOptions}
      />
      <Tab.Screen
        name="Resumo"
        component={SummaryScreen}
        options={summaryOptions}
      />
    </Tab.Navigator>
  );
};