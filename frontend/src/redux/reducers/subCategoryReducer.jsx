import {
  SUB_CATEGORY_LIST_REQUEST,
  SUB_CATEGORY_LIST_SUCCESS,
  SUB_CATEGORY_LIST_FAIL,
  SUB_CATEGORY_DETAILS_REQUEST,
  SUB_CATEGORY_DETAILS_SUCCESS,
  SUB_CATEGORY_DETAILS_FAIL,
  SUB_CATEGORY_DELETE_SUCCESS,
  SUB_CATEGORY_DELETE_REQUEST,
  SUB_CATEGORY_DELETE_FAIL,
  SUB_CATEGORY_CREATE_REQUEST,
  SUB_CATEGORY_CREATE_SUCCESS,
  SUB_CATEGORY_CREATE_FAIL,
  SUB_CATEGORY_CREATE_RESET,
  SUB_CATEGORY_UPDATE_REQUEST,
  SUB_CATEGORY_UPDATE_SUCCESS,
  SUB_CATEGORY_UPDATE_FAIL,
  SUB_CATEGORY_UPDATE_RESET,
} from "../constants/subCategoryConstant";

export const subCategoryListReducer = (state = { subs: [] }, action) => {
  switch (action.type) {
    case SUB_CATEGORY_LIST_REQUEST:
      return { loading: true, subs: [] };
    case SUB_CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        subs: action.payload,
      };
    case SUB_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subCategoryDetailsReducer = (state = { sub: {} }, action) => {
  switch (action.type) {
    case SUB_CATEGORY_DETAILS_REQUEST:
      return { loading: true, ...state };
    case SUB_CATEGORY_DETAILS_SUCCESS:
      return { loading: false, sub: action.payload };
    case SUB_CATEGORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subCategoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SUB_CATEGORY_DELETE_REQUEST:
      return { loading: true };
    case SUB_CATEGORY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SUB_CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subCategoryCreateReducer = (state = { sub: {} }, action) => {
  switch (action.type) {
    case SUB_CATEGORY_CREATE_REQUEST:
      return { loading: true };
    case SUB_CATEGORY_CREATE_SUCCESS:
      return { loading: false, success: true, sub: action.payload.sub };
    case SUB_CATEGORY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case SUB_CATEGORY_CREATE_RESET:
      return { category: {} };
    default:
      return state;
  }
};

export const subCategoryUpdateReducer = (state = { sub: {} }, action) => {
  switch (action.type) {
    case SUB_CATEGORY_UPDATE_REQUEST:
      return { loading: true };
    case SUB_CATEGORY_UPDATE_SUCCESS:
      return { loading: false, success: true, sub: action.payload };
    case SUB_CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SUB_CATEGORY_UPDATE_RESET:
      return { category: {} };
    default:
      return state;
  }
};
