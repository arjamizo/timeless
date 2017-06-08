'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Home extends Component {
    render() {
        let { message, actions } = this.props;
        return (
            <div>
                <h1>{ message }</h1>
                <br />
                <button onClick={ actions.onClick }>Click</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        message: state.helloWorld.message
    };
};


const mapDispatchToProps = (dispatch) => {
    const { helloWorld } = require('../actions');
    const actions = {
        onClick: helloWorld
    };
    return { actions: bindActionCreators(actions, dispatch) };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);