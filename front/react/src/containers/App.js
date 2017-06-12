import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import BackgroundBanner from '../components/BackgroundBanner';
import Footer from '../components/Footer';


class App extends Component {
  componentWillMount() {
    this.props.actions.fetchGalleries();
  }

  render() {
    const { children, galleries, navigation } = this.props;
    const { toggleNavigation } = this.props.actions;
    return (
      <div>
        <BackgroundBanner />
        <Navigation galleries={ galleries }
                    expanded={ navigation.expanded }
                    toggleNavigationAction={ toggleNavigation } />
        <div className='main-wrapper page-content-wrapper'>
          { children }
        </div>
        <Footer />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    galleries: state.galleries.galleries,
    navigation: state.navigation
  };
}

function mapDispatchToProps(dispatch) {
  const { fetchGalleries } = require('../actions/galleries');
  const { toggleNavigation } = require('../actions/navigation');
  const actions = {
    fetchGalleries: fetchGalleries,
    toggleNavigation: toggleNavigation
  };
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);