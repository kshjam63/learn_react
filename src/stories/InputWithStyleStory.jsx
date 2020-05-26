import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../04/InputWithStyles';

storiesOf('InputWithStyle', module)
    .addWithJSX('basic', () => <Input name="name" />)
    .addWithJSX('label', () => <Input name="name" label="name" />)
    .addWithJSX('value', () => <Input name="name" label="name" value="doit" />)
    .addWithJSX('errorMessage', () => <Input name="name" label="name" errorMessage="name" />);
