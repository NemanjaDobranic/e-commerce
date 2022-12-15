import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import Card from '../../components/Card';
import {colors, spacing} from '../../theme/main';
import textVariants from '../../theme/textVariants';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface ProductsTable {
  tableHead: Array<string>;
  tableData: Array<string | number | React.FC>;
}

const Products = () => {
  const [productsTable, setProductsTable] = useState<ProductsTable>();

  const state = {
    tableHead: [
      'Product name',
      'Price',
      <EntypoIcon
        name="dots-three-horizontal"
        color={colors.primary.black}
        size={spacing.l}
        style={styles.more}
      />,
    ],
    tableData: [
      [
        '1',
        '2',
        <EntypoIcon
          name="dots-three-horizontal"
          color={colors.primary.black}
          size={spacing.l}
          style={styles.more}
        />,
      ],
      [
        'a',
        'b',
        <EntypoIcon
          name="dots-three-horizontal"
          color={colors.primary.black}
          size={spacing.l}
          style={styles.more}
        />,
      ],
      [
        '1',
        '2',
        <EntypoIcon
          name="dots-three-horizontal"
          color={colors.primary.black}
          size={spacing.l}
          style={styles.more}
        />,
      ],
      [
        'a',
        'b',
        <EntypoIcon
          name="dots-three-horizontal"
          color={colors.primary.black}
          size={spacing.l}
          style={styles.more}
        />,
      ],
    ],
  };

  return (
    <Card elevation={8}>
      <Table borderStyle={styles.table}>
        <Row
          data={state.tableHead}
          style={styles.head}
          textStyle={styles.headText}
          widthArr={[5 * spacing.xl, 2.5 * spacing.xl, 1.6 * spacing.xl]}
        />
        <Rows
          data={state.tableData}
          widthArr={[5 * spacing.xl, 2.5 * spacing.xl, 1.6 * spacing.xl]}
          style={styles.row}
          textStyle={styles.text}
        />
      </Table>
    </Card>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: colors.grey[100],
  },
  head: {
    height: 1.2 * spacing.xl,
  },
  headText: {
    color: colors.primary.black,
    ...textVariants.title.title5,
    paddingHorizontal: 1.5 * spacing.s,
  },
  row: {height: 1.5 * spacing.xl},
  text: {
    color: colors.primary.black,
    ...textVariants.button.medium,
    paddingHorizontal: 1.5 * spacing.s,
  },
  more: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Products;
