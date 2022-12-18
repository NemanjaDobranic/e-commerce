import React, {useEffect, useState} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Switch,
  View,
  Dimensions,
} from 'react-native';
import Card from '../../components/Card';
import useApi from '../../hooks/useApi';
import {plans, SubscriptionType} from '../../services/vetrinaLive';
import {colors, spacing} from '../../theme/main';
import textVariants from '../../theme/textVariants';

const {height, width} = Dimensions.get('window');

interface Plan {
  id: number;
  type: 'free' | 'showcase' | 'shop';
  subscription: {
    value: string;
    type: SubscriptionType;
  };
  productsLimit: number;
  bonus: string | null;
}

const Subsription = () => {
  const [{response, loading}, executeApiCall] = useApi(plans('yearly'), true);
  const [plansData, setPlansData] = useState<Plan[]>();
  const [isYearlySub, setIsYearlySub] = useState(true);

  useEffect(() => {
    if (response) {
      setPlansData(response);
    }
  }, [response]);

  const changeSubscriptionType = () => {
    const newSub = !isYearlySub;

    newSub === true
      ? executeApiCall(plans('yearly'))
      : executeApiCall(plans('monthly'));

    setIsYearlySub(newSub);
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Choose your plan</Text>
        <View style={styles.switchContainer}>
          <Text
            style={{
              ...styles.monthly,
              color:
                !loading && !isYearlySub
                  ? colors.primary.black
                  : colors.grey[400],
            }}>
            Monthly
          </Text>
          <Switch
            trackColor={{false: colors.grey[300], true: colors.primary.default}}
            thumbColor={colors.white}
            onChange={changeSubscriptionType}
            value={isYearlySub}
            disabled={loading}
          />
          <Text
            style={{
              ...styles.yearly,
              color:
                !loading && isYearlySub
                  ? colors.primary.black
                  : colors.grey[400],
            }}>
            Yearly
          </Text>
          <View style={styles.promoContainer}>
            <Text style={styles.promoText}>Promo</Text>
          </View>
        </View>
      </View>
      <View
        style={{...styles.body, height: !loading ? 'auto' : (height * 3) / 4}}>
        {!loading && plansData ? (
          plansData.map(plan => (
            <Card
              key={plan.id}
              marginTop={0}
              marginEnd={0}
              marginStart={0}
              marginBottom={spacing.m}
              style={styles.planCard}>
              <View>
                <Text>{plan.type}</Text>
              </View>
            </Card>
          ))
        ) : (
          <ActivityIndicator
            style={styles.loading}
            color={colors.primary.default}
            size="large"
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: height / 8,
    paddingTop: 2 * spacing.m,
    alignItems: 'center',
  },
  headerTitle: {
    ...textVariants.title.title3,
    color: colors.primary.black,
    marginBottom: spacing.l,
  },
  body: {
    paddingTop: 1.8 * spacing.xl,
    paddingHorizontal: spacing.m,
    paddingBottom: spacing.m,
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthly: {
    ...textVariants.title.title5,
    color: colors.grey[400],
    marginEnd: 0.85 * spacing.l,
  },
  yearly: {
    ...textVariants.title.title5,
    color: colors.grey[400],
    marginStart: spacing.l,
  },
  promoContainer: {
    backgroundColor: colors.green.primary,
    paddingVertical: spacing.s / 2,
    paddingHorizontal: 1.25 * spacing.s,
    borderRadius: 0.625 * spacing.s,
    marginStart: 1.5 * spacing.s,
    position: 'absolute',
    right: -width / 5,
  },
  promoText: {
    ...textVariants.caption.semibold,
    color: colors.white,
  },
  planCard: {
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.l,
    height: height / 5,
  },
});

export default Subsription;
