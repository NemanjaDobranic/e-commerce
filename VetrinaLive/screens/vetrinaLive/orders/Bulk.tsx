import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Table, Row, Rows} from 'react-native-table-component';
import {colors, spacing} from '../../../theme/main';
import textVariants from '../../../theme/textVariants';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Checkbox from '@react-native-community/checkbox';
import useApi from '../../../hooks/useApi';
import {orders} from '../../../services/vetrinaLive';
import Button from '../../../components/Button';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface OrdersTable {
  tableHead: Array<string | JSX.Element>;
  tableData: Array<Array<string | number | JSX.Element>>;
}

type Status = 'new' | 'inProgress' | 'cancelled' | 'returnMade' | 'shipped';

const getStatus = (status: Status) => {
  switch (status) {
    case 'new':
      return (
        <View
          style={{
            ...styles.statusContainer,
            backgroundColor: colors.primary.default,
          }}>
          <Text style={styles.statusText}>New</Text>
        </View>
      );
    case 'shipped':
      return (
        <View
          style={{
            ...styles.statusContainer,
            backgroundColor: colors.tyrianPurple,
          }}>
          <Text style={styles.statusText}>Shipped</Text>
        </View>
      );
    case 'cancelled':
      return (
        <View
          style={{
            ...styles.statusContainer,
            backgroundColor: colors.strawberry,
          }}>
          <Text style={styles.statusText}>Cancelled</Text>
        </View>
      );
    case 'inProgress':
      return (
        <View
          style={{
            ...styles.statusContainer,
            backgroundColor: colors.atomicTangerine,
          }}>
          <Text style={styles.statusText}>In Progress</Text>
        </View>
      );
    case 'returnMade':
      return (
        <View
          style={{
            ...styles.statusContainer,
            backgroundColor: colors.cornflower,
          }}>
          <Text style={styles.statusText}>Reso effettuato</Text>
        </View>
      );
  }
};

interface Order {
  id: number;
  name: string;
  status: Status;
}

const Sort = () => (
  <View>
    <TouchableOpacity>
      <MaterialIcon
        name="keyboard-arrow-up"
        color={colors.primary.black}
        size={1.75 * spacing.s}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <MaterialIcon
        name="keyboard-arrow-down"
        color={colors.primary.black}
        size={1.75 * spacing.s}
      />
    </TouchableOpacity>
  </View>
);

const Bulk = () => {
  const [checkAll, setCheckAll] = useState(false);
  const initialTable = {
    tableHead: [
      <View style={styles.thContainer}>
        <Checkbox
          tintColors={{true: colors.primary.black, false: colors.grey[200]}}
          value={checkAll}
          onValueChange={() => setCheckAll(old => !old)}
        />
        <Text style={styles.thText}>#</Text>
        <Sort />
      </View>,
      <View style={styles.thContainer}>
        <Text style={styles.thText}>Name</Text>
        <Sort />
      </View>,
      <View style={styles.thContainer}>
        <Text style={styles.thText}>Stato</Text>
        <Sort />
      </View>,
      '',
    ],
    tableData: [],
  };
  const [ordersTable, setOrdersTable] = useState<OrdersTable>(initialTable);
  const [{response, loading}] = useApi(orders(), true);

  useEffect(() => {
    if (response) {
      const tableData = response.map((order: Order) => [
        <View style={styles.thContainer}>
          <Checkbox
            tintColors={{true: colors.primary.black, false: colors.grey[200]}}
          />
          <Text style={styles.thText}>{order.id}</Text>
        </View>,
        order.name,
        getStatus(order.status),
        <EntypoIcon
          name="dots-three-horizontal"
          color={colors.primary.black}
          size={spacing.l}
          style={styles.more}
        />,
      ]);
      setOrdersTable(old => {
        return {...old, tableData: tableData};
      });
    }
  }, [response]);

  return !loading ? (
    <ScrollView>
      <View style={styles.ordersHeader}>
        <Text style={styles.ordersCount}>
          Orders: {ordersTable.tableData.length}
        </Text>
        <Button
          borderColor={colors.grey[100]}
          textColor={colors.grey[300]}
          textVariant={textVariants.button.large}
          borderRadius={0.625 * spacing.s}
          icon={
            <FeatherIcon
              name="external-link"
              color={colors.grey[300]}
              size={spacing.l}
            />
          }
          style={styles.shipOrderBtn}>
          Ship order
        </Button>
      </View>
      <Table borderStyle={styles.tableBorders} style={styles.table}>
        <Row
          data={ordersTable.tableHead}
          style={styles.head}
          textStyle={styles.headText}
          widthArr={[
            2.2 * spacing.xl,
            3.1 * spacing.xl,
            2.5 * spacing.xl,
            1.25 * spacing.xl,
          ]}
        />
        <Rows
          data={ordersTable.tableData}
          widthArr={[
            2.2 * spacing.xl,
            3.1 * spacing.xl,
            2.5 * spacing.xl,
            1.25 * spacing.xl,
          ]}
          style={styles.row}
          textStyle={styles.text}
        />
      </Table>
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
    backgroundColor: colors.white,
    marginHorizontal: 1.875 * spacing.s,
    marginBottom: spacing.l,
  },
  tableBorders: {
    borderWidth: 1,
    borderColor: colors.grey[100],
  },
  head: {
    height: 1.2 * spacing.xl,
  },
  thContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1.5 * spacing.s,
  },
  thText: {
    ...textVariants.title.title5,
    color: colors.darkBlue,
    marginEnd: 1.5 * spacing.s,
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
  statusText: {
    color: colors.white,
    ...textVariants.caption.regular,
    padding: spacing.s,
    textAlign: 'center',
  },
  statusContainer: {
    width: 1.8 * spacing.xl,
    alignSelf: 'center',
    borderRadius: spacing.s / 2,
  },
  shipOrderBtn: {
    width: 3.4 * spacing.xl,
    backgroundColor: colors.grey[100],
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
  ordersHeader: {
    flexDirection: 'row',
    marginVertical: spacing.l,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: 0.475 * spacing.xl,
    marginEnd: spacing.l,
  },
  ordersCount: {
    ...textVariants.title.title5,
    color: colors.primary.black,
  },
});

export default Bulk;
