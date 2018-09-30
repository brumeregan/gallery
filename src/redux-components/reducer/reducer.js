import { SET_MODE, GET_PHOTOS } from "../actions/types";

const initialState = {
    photos: [],
    mode: 'list',
};

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODE:
            return {
                ...state,
                mode: action.payload
            };
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload
            };
        default:
            return state;
    }
};
