import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import ContactPage from './containers/ContactPage';
import GalleryPage from './containers/GalleryPage';


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/kontakt' component={ContactPage}/>
    <Route path='/galeria/:gallery_id' component={GalleryPage}/>
  </Route>
)