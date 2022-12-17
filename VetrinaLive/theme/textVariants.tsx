import {StyleSheet} from 'react-native';

export interface ITextVarinat {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

const link = StyleSheet.create({
  regular: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 17,
    lineHeight: 20,
  },
});

const button = StyleSheet.create({
  small: {
    fontFamily: 'SourceSansPro-Light',
    fontSize: 12,
    lineHeight: 14,
  },
  medium: {fontFamily: 'SourceSansPro-Regular', fontSize: 14, lineHeight: 16},
  large: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
});

const paragraph = StyleSheet.create({
  tiny: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 13,
    lineHeight: 16,
  },
  medium: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    lineHeight: 24,
  },
  large: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    lineHeight: 28,
  },
});

const caption = StyleSheet.create({
  regular: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  semibold: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 12,
    lineHeight: 16,
  },
});

const form = StyleSheet.create({
  label: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    lineHeight: 20,
  },
});

const title = StyleSheet.create({
  title1: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 34,
    lineHeight: 39,
  },
  title2: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 28,
    lineHeight: 32,
  },
  title3: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 22,
    lineHeight: 27,
  },
  title4: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 20,
    lineHeight: 25,
  },
  title5: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 17,
    lineHeight: 22,
  },
  title6: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    lineHeight: 20,
  },
});

const input = StyleSheet.create({
  input: {
    fontFamily: 'NotoSansHK-Regular',
    fontSize: 14,
    lineHeight: 18,
  },
});

export default {
  title,
  button,
  link,
  paragraph,
  caption,
  input,
  form,
};
