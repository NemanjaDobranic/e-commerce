import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import useApi from '../../hooks/useApi';
import {payments} from '../../services/vetrinaLive';
import {colors, spacing} from '../../theme/main';
import textVariants from '../../theme/textVariants';

interface Payment {
  id: string;
  name: string;
  image: string;
  enabled: string;
}

const Payment = () => {
  const [{response, loading}] = useApi(payments(), true);
  const [paymentsData, setPaymentsData] = React.useState<Payment[]>();

  React.useEffect(() => {
    if (response) {
      setPaymentsData(response as Payment[]);
    }
  }, [response]);

  const getButtonStyle = (enabled: string): object => {
    const style = enabled !== '' ? styles.comingSoon : styles.comingSoon;
    return {...styles.btn, ...style};
  };

  return !loading && paymentsData ? (
    <ScrollView>
      {paymentsData.map(payment => (
        <Card
          key={payment.id}
          style={styles.paymentContainer}
          height={3.35 * spacing.xl}>
          <View style={styles.paymentInfo}>
            <Image
              resizeMode="contain"
              source={{uri: payment.image}}
              style={styles.image}
            />
            <Text style={styles.text}>{payment.name}</Text>
          </View>
          <Button
            style={getButtonStyle(payment.enabled)}
            borderColor={colors.primary.default}
            borderRadius={0.625 * spacing.s}
            textVariant={textVariants.button.large}
            textColor={colors.white}>
            {payment.enabled !== '' ? 'Disable' : 'Comming soon'}
          </Button>
        </Card>
      ))}
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
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentContainer: {
    padding: spacing.m,
    flexDirection: 'row',
  },
  paymentInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    height: 1.3 * spacing.xl,
    width: 1.3 * spacing.xl,
    flex: 0.5,
  },
  text: {
    ...textVariants.title.title5,
    color: colors.primary.black,
    fontFamily: 'SourceSansPro-Bold',
  },
  btn: {
    backgroundColor: colors.primary.default,
    minWidth: 1.2 * spacing.xl,
    height: 2 * spacing.m,
    padding: 0,
    paddingHorizontal: spacing.m,
  },
  comingSoon: {
    backgroundColor: '#F0F2FE',
  },
});
export default Payment;
