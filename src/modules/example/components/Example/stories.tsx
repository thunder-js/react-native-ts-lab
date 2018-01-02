import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Example from './'

storiesOf('Example Component', module)
  .add('default', () => (
    <Example message="hehehe" />
  ))
  .add('english', () => (
    <Example message="fuck" />
  ))