import axios from "axios";
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
} from "../../constants/collectionConstants";

export const listcollections = () => async (dispatch) => {
  try {
    dispatch({ type: COLLECTIONS_LIST_REQUEST });

    const { data } = await axios.get(`/api/collections`);

    dispatch({
      type: COLLECTIONS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COLLECTIONS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const collectionDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: COLLECTIONS_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/collection/${slug}`);

    dispatch({
      type: COLLECTIONS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COLLECTIONS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteCollection = (slug) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COLLECTIONS_DELETE_REQUEST,
    });

    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    await axios.delete(`/api/collection/${slug}`, config);

    dispatch({
      type: COLLECTIONS_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: COLLECTIONS_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCollection = (collection) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COLLECTIONS_CREATE_REQUEST,
    });

    const {
      userLogin: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.post(`/api/collection`, collection, config);

    dispatch({
      type: COLLECTIONS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COLLECTIONS_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCollection =
  (slug, collection) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COLLECTIONS_UPDATE_REQUEST,
      });

      const {
        userLogin: { user },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/collection/${slug}`,
        collection,
        config
      );

      dispatch({
        type: COLLECTIONS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COLLECTIONS_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
