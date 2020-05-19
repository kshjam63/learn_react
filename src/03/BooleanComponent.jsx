import React from 'react';
import PropTypes from 'prop-types';

class BooleanComponent extends React.Component {
    render() {
        const message = this.props.bored ? 'true test' : 'false test';
        return <div className="message-container">{message}</div>;
    }
}

BooleanComponent.propTypes = {
    bored: PropTypes.bool,
};

export default BooleanComponent;