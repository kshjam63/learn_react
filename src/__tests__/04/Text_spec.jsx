import React from 'react';
import { shallow, mount } from 'enzyme';

import Text from '../../04/Text';

describe('<Text>', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<Text>test</Text>);
        }).not.toThrow();
    });

    it('contains <span>', () => {
        expect(mount(<Text>test</Text>).find('span')).toHaveLength(1);
    });

    it('contains <span> with dive', () => {
        expect(shallow(<Text>test</Text>).dive().find('span')).toHaveLength(1);
    });
});