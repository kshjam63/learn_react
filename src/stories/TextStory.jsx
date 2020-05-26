import React from 'react';
import { storiesOf } from "@storybook/react";

import Text from '../04/Text';

storiesOf('Text', module)
    .addWithJSX('basic', () => <Text>hi</Text>);