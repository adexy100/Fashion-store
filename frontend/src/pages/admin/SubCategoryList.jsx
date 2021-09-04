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
import { listSubs, deleteSub } from "../../redux/actions/subCategoryActions";

const SubCategoryList = ({ history }) => {
  const dispatch = useDispatch();

  const subCategoryList = useSelector((state) => state.subList);
  const { subs, loading } = subCategoryList;

  const subDelete = useSelector((state) => state.subDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = subDelete;

  useEffect(() => {
    dispatch(listSubs());
    if (successDelete) {
      history.push("/admin/sub-categories");
    }
  }, [dispatch, successDelete, history]);

  const setSubCategories = () => {
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

    subs.forEach((sub) => {
      data.rows.push({
        name: sub.name,
        description: sub.desc,
        actions: (
          <Fragment>
            <Link
              to={`/admin/update-sub/${sub.slug}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deleteSubHandler(sub.slug)}
            >
              <i className={loadingDelete ? <Spinner /> : "fa fa-trash"}></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteSubHandler = (slug) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteSub(slug));
    }
    if (successDelete) {
      toast.success("Category deleted");
    }
    if (errorDelete) {
      toast.error(errorDelete);
      console.log(errorDelete);
    }
  };

  return (
    <Fragment>
      <MetaData title={"All Sub-Categories"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Sub-Categories</h1>

            {loading ? (
              <Loader />
            ) : (
              <Wrapper>
                <MDBDataTable
                  responsive
                  data={setSubCategories()}
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

export default SubCategoryList;

const Wrapper = styled.div`
  .fontsize {
    font-size: 15px;
  }
`;
