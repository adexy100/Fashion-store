import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  activateUserReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducer";

import {
  categoryListReducer,
  categoryDetailsReducer,
  categoryDeleteReducer,
  categoryCreateReducer,
  categoryUpdateReducer,
  categorySubsReducer,
} from "./reducers/categoryReducer";

import {
  subCategoryListReducer,
  subCategoryDetailsReducer,
  subCategoryDeleteReducer,
  subCategoryCreateReducer,
  subCategoryUpdateReducer,
} from "./reducers/subCategoryReducer";

import {
  relatedProductsReducer,
  allProductsReducer,
  productsReducer,
  newProductReducer,
  productReducer,
  productDetailsReducer,
  newReviewReducer,
  productReviewsReducer,
  reviewReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  relatedProducts: relatedProductsReducer,
  allProducts: allProductsReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
  newReview: newReviewReducer,
  subList: subCategoryListReducer,
  subDetails: subCategoryDetailsReducer,
  subDelete: subCategoryDeleteReducer,
  subCreate: subCategoryCreateReducer,
  subUpdate: subCategoryUpdateReducer,
  categoryList: categoryListReducer,
  categoryDetails: categoryDetailsReducer,
  categoryDelete: categoryDeleteReducer,
  categoryCreate: categoryCreateReducer,
  categoryUpdate: categoryUpdateReducer,
  categorySubs: categorySubsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  activateUser: activateUserReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  userLogin: { user: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
