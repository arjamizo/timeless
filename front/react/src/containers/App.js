import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation';


class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <Navigation />
                {children}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    const actions = {};
    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);