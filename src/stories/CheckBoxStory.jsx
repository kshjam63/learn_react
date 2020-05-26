import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckBox from '../04/CheckBox';
import Text from '../04/Text';

storiesOf('CheckBox', module)
    .addWithJSX('basic', () => <CheckBox name="agree" />)
    .addWithJSX('children', () => (
        <CheckBox name="agree">
            <Text>agree</Text>
        </CheckBox>
    ))
    .addWithJSX('label', () => (
        <CheckBox name="agree" label="name">
            <Text>agree</Text>
        </CheckBox>
    ))
    .addWithJSX('onChange', () => (
        <CheckBox name="agree" onChange={action('onChange')}>
            <Text>agree</Text>
        </CheckBox>
    ))
    .addWithJSX('checked', () => (
        <CheckBox name="agree" label="name" checked>
            <Text>agree</Text>
        </CheckBox>
    ))
    .addWithJSX('errorMessage', () => (
        <CheckBox name="agree" label="name" errorMessage="need agree">
            <Text>agree</Text>
        </CheckBox>
    ))
    .addWithJSX('autoFocus', () => (
        <CheckBox name="agree" label="name" autoFocus>
            <Text>agree</Text>
        </CheckBox>
    ));