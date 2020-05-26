import React from 'react';
import ReactDom from 'react-dom';
import Input from '../../03/Input';

describe('<Input>', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<Input name="name" />, div);
        ReactDom.unmountComponentAtNode(div);
    });
});