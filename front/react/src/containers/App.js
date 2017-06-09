import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import { fetchGalleries } from '../actions/galleries';


class App extends Component {
    componentWillMount() {
        this.props.actions.fetchGalleries();
    }

    render() {
        const { children, galleries } = this.props;
        return (
            <div>
                <Navigation galleries={galleries} />
                {children}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        galleries: state.galleries.galleries
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        fetchGalleries: fetchGalleries
    };
    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);