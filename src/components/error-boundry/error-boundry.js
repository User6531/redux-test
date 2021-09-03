import React from 'react';
import Error from '../error';

export default class ErrorBoundry extends React.Component {

    state = {
        error: false,
    }

    componentDidCatch() {
        this.setState({
            error: true,
        })
    }

    render() {
        const {error} = this.state;
        let result;

        if (error) {
            result = <Error /> 
        } else {
            result = this.props.children;
        }

        return {result};
    }
}