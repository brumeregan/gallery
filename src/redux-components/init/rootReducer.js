import { combineReducers } from 'redux';

import { galleryReducer } from '../reducer/reducer';

export const rootReducer = combineReducers({
    gallery: galleryReducer
});
