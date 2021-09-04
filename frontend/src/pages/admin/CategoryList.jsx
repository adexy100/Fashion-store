import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import { toast } from "react-toastify";
import styled from "styled-components";

import MetaData from "../../utils/MetaData";
import { Loader } from "../../components/main";
import { Spinner } from "../../components/main";
import Sidebar from "./Sidebar";

import { useDispatch, useSelector } from "react-redux";
import {
  listCategories,
  deleteCategory,
} from "../../redux/actions/categoryActions";

const CategoryList = ({ history }) => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { categories, loading } = categoryList;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = categoryDelete;

  useEffect(() => {
    dispatch(listCategories());
    if (successDelete) {
      history.push("/admin/categories");
    }
  }, [dispatch, successDelete, history]);

  const setCategories = () => {
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Description",
          field: "description",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    categories.forEach((category) => {
      data.rows.push({
        name: category.name,
        description: category.desc,
        actions: (
          <Fragment>
            <Link
              to={`/admin/update-category/${category.slug}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deleteCategoryHandler(category.slug)}
            >
              <i className={loadingDelete ? <Spinner /> : "fa fa-trash"}></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteCategoryHandler = (slug) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteCategory(slug));
      toast.success("Category deleted");
    }
    if (errorDelete) {
      toast.error(errorDelete);
      console.log(errorDelete);
    }
  };

  return (
    <Fragment>
      <MetaData title={"All Categories"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Categories</h1>

            {loading ? (
              <Loader />
            ) : (
              <Wrapper>
                <MDBDataTable
                  responsive
                  data={setCategories()}
                  className="fontsize"
                  bordered
                  striped
                  hover
                />
              </Wrapper>
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryList;

const Wrapper = styled.div`
  .fontsize {
    font-size: 15px;
  }
`;
