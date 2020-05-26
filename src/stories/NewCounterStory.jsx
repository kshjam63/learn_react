import React from 'react';
import { storiesOf } from '@storybook/react';

import NewCounter from '../03/NewCounter';

storiesOf('NewCounter', module).add('basic', () => <NewCounter count={0} />);