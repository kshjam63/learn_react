import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../03/Input';

storiesOf('Input', module)
    .addWithJSX('basic', () => <Input name="name" />)
    .addWithJSX('label', () => <Input name="name" label="name" />)
    .addWithJSX('onChange', () => <Input name="name" onChange={action('onChange')} />);