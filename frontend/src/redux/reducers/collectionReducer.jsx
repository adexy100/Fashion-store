import {
  COLLECTIONS_LIST_REQUEST,
  COLLECTIONS_LIST_SUCCESS,
  COLLECTIONS_LIST_FAIL,
  COLLECTIONS_DETAILS_REQUEST,
  COLLECTIONS_DETAILS_SUCCESS,
  COLLECTIONS_DETAILS_FAIL,
  COLLECTIONS_DELETE_SUCCESS,
  COLLECTIONS_DELETE_REQUEST,
  COLLECTIONS_DELETE_FAIL,
  COLLECTIONS_CREATE_REQUEST,
  COLLECTIONS_CREATE_SUCCESS,
  COLLECTIONS_CREATE_FAIL,
  COLLECTIONS_UPDATE_REQUEST,
  COLLECTIONS_UPDATE_SUCCESS,
  COLLECTIONS_UPDATE_FAIL,
} from "../constants/collectionConstants";

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case COLLECTIONS_LIST_REQUEST:
      return { loading: true, categories: [] };
    case COLLECTIONS_LIST_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      };
    case COLLECTIONS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case COLLECTIONS_DETAILS_REQUEST:
      return { loading: true, ...state };
    case COLLECTIONS_DETAILS_SUCCESS:
      return { loading: false, category: action.payload };
    case COLLECTIONS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COLLECTIONS_DELETE_REQUEST:
      return { loading: true };
    case COLLECTIONS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case COLLECTIONS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COLLECTIONS_CREATE_REQUEST:
      return { loading: true };
    case COLLECTIONS_CREATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case COLLECTIONS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryUpdateReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case COLLECTIONS_UPDATE_REQUEST:
      return { loading: true };
    case COLLECTIONS_UPDATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case COLLECTIONS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
