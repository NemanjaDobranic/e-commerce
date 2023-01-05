import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import Alert, {AlertType} from '../components/Alert';

describe('<Alert>', () => {
  it('renders the correct text', () => {
    const message = 'Your password has been reset successfully';
    const instance = renderer.create(
      <Alert message={message} type={AlertType.success} />,
    );

    const textInst = instance.root.findAllByType(Text)[1];
    expect(textInst.props.children).toBe(message);
  });
});
