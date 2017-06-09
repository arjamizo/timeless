import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {};
};


const mapDispatchToProps = (dispatch) => {
    const actions = {};
    return { actions: bindActionCreators(actions, dispatch) };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);