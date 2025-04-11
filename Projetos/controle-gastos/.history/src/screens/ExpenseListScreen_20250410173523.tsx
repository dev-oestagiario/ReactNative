import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useExpenses } from '../contexts/ExpenseContext';
import { Expense } from '../types';

export const ExpenseListScreen: React.FC = () => {
  const { expenses, removeExpense } = useExpenses();

  const renderItem = ({ item }: { item: Expense }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.description}</Title>
        <Paragraph>R$ {item.amount.toFixed(2)}</Paragraph>
        <Paragraph>{item.category}</Paragraph>
        <Paragraph>{item.date.toLocaleDateString()}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => removeExpense(item.id)}>Remover</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});