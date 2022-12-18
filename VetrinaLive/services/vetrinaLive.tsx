import {HttpMethods} from '../hooks/useApi';
const {GET} = HttpMethods;

export const news = () => {
  return {
    path: '/news',
    options: {
      method: GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
};

export const products = () => {
  return {
    path: '/products',
    options: {
      method: GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
};

export const payments = () => {
  return {
    path: '/payments',
    options: {
      method: GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
};

export const orders = () => {
  return {
    path: '/orders',
    options: {
      method: GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
};

export type SubscriptionType = 'monthly' | 'yearly';

export const plans = (subscriptionPlan: SubscriptionType) => {
  return {
    path: `/plans?subscription.type=${subscriptionPlan}`,
    options: {
      method: GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };
};
