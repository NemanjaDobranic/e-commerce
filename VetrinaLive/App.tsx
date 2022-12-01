/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, Text} from 'react-native';
import {colors, textVariants} from './themes/main';

const App = () => {
  return (
    <View>
      <Text
        style={{
          ...textVariants.title1.semibold,
          color: colors.primary.default,
        }}>
        Welcome to Vetrina Live!
      </Text>
    </View>
  );
};

export default App;
