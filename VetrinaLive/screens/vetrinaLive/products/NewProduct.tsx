import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Card from '../../../components/Card';
import Input from '../../../components/Input';
import {spacing, colors} from '../../../theme/main';
import textVariants from '../../../theme/textVariants';

// {
//   navigation,
// }: NativeStackScreenProps<ProductsParamList, 'NewProduct'>
const NewProduct = () => {
  return (
    <ScrollView>
      <Card style={styles.cardContainer}>
        <Text style={styles.header}>General Information</Text>
        <Text style={styles.label}>Product name</Text>
        <Input
          type="name"
          placeholder="Lorem ipsum"
          value=""
          style={styles.input}
        />
        <Text style={styles.label}>Description</Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {padding: spacing.l},
  header: {
    ...textVariants.title.title4,
    color: colors.primary.black,
    marginBottom: spacing.l,
  },
  label: {
    ...textVariants.form.label,
    color: colors.grey[700],
    marginBottom: spacing.s,
  },
  input: {
    marginBottom: spacing.l,
    paddingHorizontal: 1.25 * spacing.s,
    paddingVertical: 1.25 * spacing.s,
  },
});

export default NewProduct;
