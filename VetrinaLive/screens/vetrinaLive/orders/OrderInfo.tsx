import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {OrdersParamList} from '../../../navigation/VetrinaLive/OrdersRoot/OrdersRoot';
import {colors, spacing} from '../../../theme/main';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import textVariants from '../../../theme/textVariants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Divider from '../../../components/Divider';
import Tabs from '../../../components/Tabs';
import SelectDropdown from 'react-native-select-dropdown';
import Button from '../../../components/Button';

const tabItems = [
  {
    id: 1,
    name: 'Info orders',
  },
  {
    id: 2,
    name: 'Products',
  },
  {
    id: 3,
    name: 'Shipping',
  },
];

const OrderInfo = ({
  navigation,
}: NativeStackScreenProps<OrdersParamList, 'OrderInfo'>) => {
  const couriers = ['Poste Italiane', 'BRT', 'DHL', 'UPS', 'FedEx'];

  useEffect(() => {
    navigation.getParent()?.setOptions({headerShown: false});

    return () => {
      navigation.getParent()?.setOptions({headerShown: true});
    };
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.root}>
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
        <Divider marginVertical={spacing.m} color={colors.grey[100]} />
        <Tabs items={tabItems} marginHorizontal={0} />
        <Divider marginVertical={spacing.m} color={colors.grey[100]} />
        <Text style={{...textVariants.title.title6, color: colors.grey[700]}}>
          29/05/2020 18:54
        </Text>
        <Text style={styles.client}>Cliente</Text>
        <Text style={styles.name}>Mario Rossi</Text>
        <Text style={styles.email}>mariorossi@vetrinalive.it</Text>
        <View style={styles.phoneContainer}>
          <Text style={styles.label}>Telefono: </Text>
          <Text style={styles.phoneValue}>+39 3333232331</Text>
        </View>
        <Text style={{...styles.label, marginTop: spacing.m}}>
          Codice Fiscale: RSSMAR22T33M123K
        </Text>
        <View style={styles.socialMedia}>
          <FontistoIcon
            name="whatsapp"
            color={colors.green.primary}
            size={spacing.l}
          />
          <Text style={styles.whatsapp}>Contatta su Whatsapp</Text>
        </View>
        <View style={styles.socialMedia}>
          <FontistoIcon
            name="telegram"
            color={colors.primary.default}
            size={spacing.l}
          />
          <Text style={styles.telegram}>Contatta su Telegram</Text>
        </View>
        <Divider marginVertical={spacing.l} color={colors.grey[100]} />
        <Text style={{...textVariants.title.title5, color: colors.grey[700]}}>
          Shipping Address
        </Text>
        <Text style={styles.address}>
          Via Roma, 59, Torre del Greco, NA, 80059
        </Text>
        <Divider marginVertical={spacing.l} color={colors.grey[100]} />
        <Text style={{...textVariants.title.title5, color: colors.grey[700]}}>
          Shipping Info
        </Text>
        <Text style={{...styles.label, marginTop: spacing.l}}>
          Nome corriere: Fedex
        </Text>
        <Text style={{...styles.label, marginTop: 1.5 * spacing.s}}>
          Numero/Link ordine: FR12342123 2314
        </Text>
        <View style={styles.couriersContainer}>
          <MaterialIcon
            name="info-outline"
            size={spacing.l}
            color={colors.primary.black}
          />
          <SelectDropdown
            data={couriers}
            onSelect={selectedItem => console.log(selectedItem)}
            buttonTextAfterSelection={selectedItem => selectedItem}
            rowTextForSelection={item => item}
            defaultButtonText="Spedizione Corriere"
            buttonStyle={styles.select}
            buttonTextStyle={styles.selectText}
            renderDropdownIcon={() => (
              <MaterialIcon
                name="keyboard-arrow-down"
                size={1.25 * spacing.m}
                color={colors.primary.black}
              />
            )}
          />
        </View>
        <Text style={{...textVariants.paragraph.tiny, color: colors.grey[400]}}>
          Se cambi la modalità e i costi di consegna, ricordati di comunicarlo
          al cliente.
        </Text>
        <View style={styles.footer}>
          <View style={styles.footerRow}>
            <Text
              style={{
                ...textVariants.title.title5,
                color: colors.primary.black,
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                ...textVariants.title.title5,
                color: colors.primary.black,
              }}>
              € 47,00
            </Text>
          </View>
          <View style={styles.footerRow}>
            <Text
              style={{
                ...textVariants.title.title5,
                color: colors.primary.black,
              }}>
              Courier Shipping
            </Text>
            <Text
              style={{
                ...textVariants.title.title5,
                color: colors.primary.black,
              }}>
              € 2,00
            </Text>
          </View>
          <View style={styles.footerRow}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>€ 49,00</Text>
          </View>

          <Button
            borderColor={colors.cornflower}
            textColor={colors.white}
            textVariant={textVariants.button.giant}
            borderRadius={0.625 * spacing.s}
            icon={
              <MaterialIcon
                name="keyboard-arrow-down"
                size={spacing.l}
                color={colors.white}
              />
            }
            style={styles.shippedBtn}>
            Ship order
          </Button>
        </View>
      </View>
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
  client: {
    ...textVariants.title.title5,
    color: colors.grey[700],
    marginVertical: spacing.m,
  },
  name: {
    ...textVariants.title.title6,
    color: colors.primary.black,
    marginBottom: spacing.s,
  },
  email: {
    ...textVariants.title.title6,
    color: colors.primary.default,
    marginBottom: spacing.m,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    ...textVariants.title.title6,
    color: colors.primary.black,
  },
  phoneValue: {
    ...textVariants.title.title6,
    color: colors.primary.default,
  },
  socialMedia: {
    flexDirection: 'row',
    marginTop: spacing.m,
    alignItems: 'center',
  },
  whatsapp: {
    color: colors.green.primary,
    ...textVariants.title.title6,
    marginStart: spacing.m,
  },
  telegram: {
    color: colors.primary.default,
    ...textVariants.title.title6,
    marginStart: spacing.m,
  },
  address: {
    ...textVariants.paragraph.small,
    color: colors.grey[700],
    marginTop: spacing.m,
  },
  select: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    minWidth: 1.8 * spacing.xl,
  },
  selectText: {
    color: colors.primary.black,
    ...textVariants.title.title6,
  },
  couriersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1.25 * spacing.s,
  },
  footer: {
    marginTop: 2.4 * spacing.xl,
    marginBottom: spacing.l,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.l,
  },
  total: {
    ...textVariants.title.title5,
    fontFamily: 'SourceSansPro-Bold',
    color: colors.primary.black,
  },
  shippedBtn: {
    backgroundColor: colors.cornflower,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    paddingVertical: spacing.l,
  },
});

export default OrderInfo;
