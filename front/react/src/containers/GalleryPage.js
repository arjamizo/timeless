import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchGallery, clearGallery } from '../actions/galleries';
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
                <div>
                    <h1>Galeria: { gallery.title }</h1>
                    <h2>{ gallery.description }</h2>
                    <Gallery galleryImages={gallery.gallery_images} />
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
    const actions = {
        fetchGallery: fetchGallery,
        clearGallery: clearGallery
    };
    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);