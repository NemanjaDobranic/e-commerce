import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {OrdersParamList} from '../../../navigation/VetrinaLive/OrdersRoot/OrdersRoot';
import {colors, spacing} from '../../../theme/main';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import textVariants from '../../../theme/textVariants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Divider from '../../../components/Divider';

const OrderInfo = ({
  navigation,
}: NativeStackScreenProps<OrdersParamList, 'OrderInfo'>) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({headerShown: false});

    return () => {
      navigation.getParent()?.setOptions({headerShown: true});
    };
  }, [navigation]);

  return (
    <ScrollView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Orders: #1292</Text>
        <View style={styles.printContainer}>
          <MaterialIcon
            name="stars"
            size={spacing.l}
            color={colors.primary.default}
          />
          <Text
            style={{
              ...textVariants.title.title6,
              color: colors.primary.default,
            }}>
            Stampa ordine
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Bulk')}>
          <MaterialIcon
            name="close"
            size={spacing.l}
            color={colors.primary.black}
          />
        </TouchableOpacity>
      </View>
      <Divider marginVertical={spacing.m} color={colors.strawberry} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 3.125 * spacing.s,
    paddingHorizontal: spacing.l,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    ...textVariants.title.title5,
    color: colors.primary.black,
  },
  printContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexBasis: 3.1 * spacing.xl,
  },
});

export default OrderInfo;
