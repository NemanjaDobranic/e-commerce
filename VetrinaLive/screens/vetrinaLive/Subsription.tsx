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
import Button from '../../components/Button';
import Card from '../../components/Card';
import useApi from '../../hooks/useApi';
import {subscriptions, PlanType} from '../../services/vetrinaLive';
import {colors, spacing} from '../../theme/main';
import textVariants from '../../theme/textVariants';

const {height, width} = Dimensions.get('window');

interface Types {
  type: 'free' | 'showcase' | 'shop';
}

interface SubscriptionType extends Types {
  name: 'Free' | 'Vetrina' | 'Negozio';
}

const SubscriptionTypes: SubscriptionType[] = [
  {
    type: 'free',
    name: 'Free',
  },
  {
    type: 'showcase',
    name: 'Vetrina',
  },
  {
    type: 'shop',
    name: 'Negozio',
  },
];

interface Subscription extends Types {
  id: number;
  plan: {
    price: number;
    type: PlanType;
  };
  productsLimit: number;
  bonus: string | null;
}

const Subsription = () => {
  const [{response, loading}, executeApiCall] = useApi(
    subscriptions('yearly'),
    true,
  );
  const styling = styles(loading);
  const [subscriptionData, setSubscriptionData] = useState<Subscription[]>();
  const [isYearlyPlan, setIsYearlyPlan] = useState(true);

  useEffect(() => {
    if (response) {
      setSubscriptionData(response);
    }
  }, [response]);

  const changeSubscriptionType = () => {
    const newPlan = !isYearlyPlan;

    newPlan === true
      ? executeApiCall(subscriptions('yearly'))
      : executeApiCall(subscriptions('monthly'));

    setIsYearlyPlan(newPlan);
  };

  const getFormattedPrice = (price: number): string => {
    return new Intl.NumberFormat('it-IT', {
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <ScrollView>
      <View style={styling.header}>
        <Text style={styling.headerTitle}>Choose your plan</Text>
        <View style={styling.switchContainer}>
          <Text
            style={{
              ...styling.monthly,
              color:
                !loading && !isYearlyPlan
                  ? colors.primary.black
                  : colors.grey[400],
            }}>
            Monthly
          </Text>
          <Switch
            trackColor={{false: colors.grey[300], true: colors.primary.default}}
            thumbColor={colors.white}
            onChange={changeSubscriptionType}
            value={isYearlyPlan}
            disabled={loading}
          />
          <Text
            style={{
              ...styling.yearly,
              color:
                !loading && isYearlyPlan
                  ? colors.primary.black
                  : colors.grey[400],
            }}>
            Yearly
          </Text>
          <View style={styling.promoContainer}>
            <Text style={styling.promoText}>Promo</Text>
          </View>
        </View>
      </View>
      <View style={styling.body}>
        {!loading && subscriptionData ? (
          subscriptionData.map(subscription => (
            <Card
              key={subscription.id}
              marginTop={0}
              marginEnd={0}
              marginStart={0}
              marginBottom={spacing.m}
              style={styling.planCard}>
              <View style={styling.cardColumn}>
                <Text style={styling.subName}>
                  {
                    SubscriptionTypes.find(s => s.type === subscription.type)
                      ?.name
                  }
                </Text>
                {subscription.bonus && (
                  <Text style={styling.bonus}>{subscription.bonus}</Text>
                )}
                <View style={styling.priceContainer}>
                  <Text style={styling.priceHolder}>€&nbsp;</Text>
                  <Text style={styling.price}>
                    {getFormattedPrice(subscription.plan.price)}
                  </Text>
                  <Text style={styling.priceHolder}>
                    /{isYearlyPlan ? 'year' : 'month'}
                  </Text>
                </View>
              </View>
              <View style={styling.cardColumn}>
                <Text style={styling.maxProducts}>
                  Max {subscription.productsLimit} prodotti
                </Text>
                <Button
                  borderColor={colors.primary.default}
                  textColor={colors.white}
                  textVariant={textVariants.button.large}
                  borderRadius={0.625 * spacing.s}
                  style={styling.changePlanBtn}>
                  Change plan
                </Button>
              </View>
            </Card>
          ))
        ) : (
          <ActivityIndicator
            style={styling.loadingStyle}
            color={colors.primary.default}
            size="large"
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = (loading: boolean | undefined) =>
  StyleSheet.create({
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
      height: !loading ? 'auto' : (height * 3) / 4,
    },
    loadingStyle: {
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
      height: height / 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    subName: {
      ...textVariants.title.title4,
      color: colors.primary.black,
    },
    cardColumn: {
      flex: 1,
      justifyContent: 'space-between',
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    priceHolder: {
      ...textVariants.title.title5,
      color: colors.primary.black,
    },
    price: {
      ...textVariants.title.title2,
      color: colors.primary.default,
    },
    bonus: {
      color: colors.green.primary,
      ...textVariants.caption.semibold,
    },
    maxProducts: {
      ...textVariants.title.title6,
      color: colors.primary.black,
      textAlign: 'right',
    },
    changePlanBtn: {
      backgroundColor: colors.primary.default,
      paddingVertical: 1.5 * spacing.s,
      width: width / 3.2,
      alignSelf: 'flex-end',
    },
  });

export default Subsription;
