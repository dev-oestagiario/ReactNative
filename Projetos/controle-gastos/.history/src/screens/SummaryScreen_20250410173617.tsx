import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useExpenses } from '../contexts/ExpenseContext';

export const SummaryScreen: React.FC = () => {
  const { expenses } = useExpenses();

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const getCategoryTotal = (category: string) => {
    return expenses
      .filter(expense => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Total Gastos</Title>
          <Paragraph>R$ {total.toFixed(2)}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Mercado</Title>
          <Paragraph>R$ {getCategoryTotal('mercado').toFixed(2)}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Combustível</Title>
          <Paragraph>R$ {getCategoryTotal('combustivel').toFixed(2)}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Lazer</Title>
          <Paragraph>R$ {getCategoryTotal('lazer').toFixed(2)}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Alimentação</Title>
          <Paragraph>R$ {getCategoryTotal('alimentacao').toFixed(2)}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Outros</Title>
          <Paragraph>R$ {getCategoryTotal('outros').toFixed(2)}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});