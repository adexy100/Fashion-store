import axios from "axios";
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
  SUB_CATEGORY_UPDATE_REQUEST,
  SUB_CATEGORY_UPDATE_SUCCESS,
  SUB_CATEGORY_UPDATE_FAIL,
} from "../constants/subCategoryConstant";

export const listSubs = () => async (dispatch) => {
  try {
    dispatch({ type: SUB_CATEGORY_LIST_REQUEST });

    const { data } = await axios.get(`/api/subs`);

    dispatch({
      type: SUB_CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const subDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: SUB_CATEGORY_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/sub/${slug}`);

    dispatch({
      type: SUB_CATEGORY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_CATEGORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteSub = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: SUB_CATEGORY_DELETE_REQUEST,
    });

    await axios.delete(`/api/sub/${slug}`);

    dispatch({
      type: SUB_CATEGORY_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: SUB_CATEGORY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createSub = (subData) => async (dispatch) => {
  try {
    dispatch({
      type: SUB_CATEGORY_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`/api/sub`, subData, config);

    dispatch({
      type: SUB_CATEGORY_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_CATEGORY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSub = (slug, sub) => async (dispatch) => {
  try {
    dispatch({
      type: SUB_CATEGORY_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(`/api/sub/${slug}`, sub, config);

    dispatch({
      type: SUB_CATEGORY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUB_CATEGORY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
