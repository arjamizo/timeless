import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchGallery } from '../actions/galleries';


class GalleryPage extends Component {
    componentWillMount() {
        let galleryId = this.props.params.gallery_id;
        this.props.actions.fetchGallery(galleryId);
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
                </div>
            )
        }
        return (
            <div>
                <h1>Galeria</h1>
            </div>
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
        fetchGallery: fetchGallery
    };
    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);