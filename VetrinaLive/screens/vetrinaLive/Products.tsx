import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import Card from '../../components/Card';
import {colors, spacing} from '../../theme/main';
import textVariants from '../../theme/textVariants';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import useApi from '../../hooks/useApi';
import {products} from '../../services/vetrinaLive';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductsTable {
  tableHead: Array<string | JSX.Element>;
  tableData: Array<Array<string | number | JSX.Element>>;
}

const Products = () => {
  const [{response, loading}] = useApi(products(), true);
  const [productsTable, setProductsTable] = useState<ProductsTable>();
  const size = [10, 25, 50, 100];
  const [featuredProducts, setFeaturedProducts] = useState(false);

  React.useEffect(() => {
    if (response) {
      const productsData: Product[] = response;

      const tableHead = [
        'Product name',
        'Price',
        <EntypoIcon
          name="dots-three-horizontal"
          color={colors.primary.black}
          size={spacing.l}
          style={styles.more}
        />,
      ];
      const tableData = productsData.map(product => [
        <View style={styles.productName}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{uri: product.image}}
          />
          <Text style={styles.text}>{product.name}</Text>
        </View>,
        product.price,
        <EntypoIcon
          name="dots-three-horizontal"
          color={colors.primary.black}
          size={spacing.l}
          style={styles.more}
        />,
      ]);
      setProductsTable({tableHead: tableHead, tableData: tableData});
    }
  }, [response]);

  return !loading && productsTable ? (
    <ScrollView>
      <View style={styles.toolbarContainer}>
        <View>
          <Text style={styles.toolbarText}>
            Products ( {productsTable.tableData.length} / 100 )
          </Text>
          <Text style={styles.toolbarText}>
            Featured products ({Math.floor(10 * Math.random())}/10)
          </Text>
          <Switch
            trackColor={{false: colors.grey[300], true: colors.primary.default}}
            thumbColor={colors.white}
            style={styles.switch}
            ios_backgroundColor="#3e3e3e"
            onChange={() => setFeaturedProducts(!featuredProducts)}
            value={featuredProducts}
          />
        </View>
        <Button
          style={styles.btn}
          borderColor={colors.primary.default}
          borderRadius={0.625 * spacing.s}
          textVariant={textVariants.button.large}
          textColor={colors.white}>
          <FeatherIcon name="plus" color={colors.white} size={spacing.l} />
        </Button>
      </View>
      <Card elevation={8}>
        <Table borderStyle={styles.table}>
          <Row
            data={productsTable.tableHead}
            style={styles.head}
            textStyle={styles.headText}
            widthArr={[5 * spacing.xl, 2.5 * spacing.xl, 1.6 * spacing.xl]}
          />
          <Rows
            data={productsTable.tableData}
            widthArr={[5 * spacing.xl, 2.5 * spacing.xl, 1.6 * spacing.xl]}
            style={styles.row}
            textStyle={styles.text}
          />
        </Table>

        <View style={styles.footer}>
          <SelectDropdown
            data={size}
            onSelect={selectedItem => console.log(selectedItem)}
            buttonTextAfterSelection={selectedItem =>
              'P' + '   ' + selectedItem
            }
            rowTextForSelection={item => item}
            defaultValue={size[1]}
            buttonStyle={styles.selectBtn}
            buttonTextStyle={styles.selectText}
            rowTextStyle={styles.selectText}
            renderDropdownIcon={() => (
              <MaterialIcon
                name="keyboard-arrow-down"
                size={spacing.l}
                color={colors.grey[500]}
              />
            )}
          />
          <Text style={styles.selectText}>1-25 of 25</Text>
          <View style={styles.arrows}>
            <MaterialIcon
              name="keyboard-arrow-left"
              size={spacing.l}
              color={colors.grey[500]}
            />
            <MaterialIcon
              name="keyboard-arrow-right"
              size={spacing.l}
              color={colors.grey[500]}
            />
          </View>
        </View>
      </Card>
    </ScrollView>
  ) : (
    <ActivityIndicator
      style={styles.loading}
      color={colors.primary.default}
      size="large"
    />
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
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 2 * spacing.m,
    height: 2 * spacing.m,
    borderRadius: spacing.m,
  },
  productName: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 1.5 * spacing.s,
  },
  footer: {
    paddingVertical: spacing.m,
    paddingHorizontal: 2 * spacing.m,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  selectBtn: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    height: 'auto',
    maxWidth: 1.85 * spacing.xl,
    marginStart: spacing.l,
    position: 'relative',
  },
  selectText: {
    color: colors.grey[500],
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 1.5 * spacing.s,
    lineHeight: 1.375 * spacing.m,
  },
  arrows: {
    flexDirection: 'row',
    marginStart: spacing.l,
  },
  toolbarContainer: {
    flexDirection: 'row',
    marginVertical: spacing.m,
    marginStart: 1.8125 * spacing.s,
    marginEnd: 1.8125 * spacing.s,
  },
  toolbarText: {
    ...textVariants.paragraph.tiny,
    color: colors.grey[700],
    marginBottom: spacing.m,
  },
  switch: {
    marginEnd: 'auto',
  },
  btn: {
    backgroundColor: colors.primary.default,
    width: 1.5 * spacing.xl,
    height: 1.5 * spacing.xl,
    padding: 0,
    alignSelf: 'center',
    marginStart: 'auto',
  },
});

export default Products;
