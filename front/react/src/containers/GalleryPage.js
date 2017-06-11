import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Gallery from '../components/Gallery';


class GalleryPage extends Component {
  componentWillMount() {
    let galleryId = this.props.params.gallery_id;
    this.props.actions.fetchGallery(galleryId);
  }

  componentWillUnmount() {
    this.props.actions.clearGallery();
  }

  componentDidUpdate(prevProps, prevState) {
    let galleryId = this.props.params.gallery_id;
    let prevGalleryId = prevProps.params.gallery_id;
    if (prevGalleryId == null || prevGalleryId != galleryId) {
      this.props.actions.fetchGallery(galleryId);
    }
  }

  render() {
    const { gallery } = this.props;
    if (gallery) {
      return (
        <div className='gallery-page'>
          <h1 className='gallery-title'>{ gallery.title }</h1>
          <div className='gallery-description'>{ gallery.description }</div>
          <Gallery galleryImages={gallery.gallery_images} key={gallery.id}/>
        </div>
      )
    }
    return (
      <div></div>
    )
  }
}


function mapStateToProps(state) {
  return {
    gallery: state.galleries.activeGallery
  };
}

function mapDispatchToProps(dispatch) {
  const { fetchGallery, clearGallery } = require('../actions/galleries');
  const actions = {
    fetchGallery: fetchGallery,
    clearGallery: clearGallery
  };
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);