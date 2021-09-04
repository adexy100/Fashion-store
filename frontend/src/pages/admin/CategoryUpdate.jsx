import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Resizer from "react-image-file-resizer";

import MetaData from "../../utils/MetaData";
import { Spinner } from "../../components/main";
import Sidebar from "./Sidebar";
import { CustomInput } from "../../components/main";
import { media } from "../../variables";
import { H3 } from "../../components/others/Text";
import { Button } from "../../components/main";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryDetails,
  updateCategory,
} from "../../redux/actions/categoryActions";
import { CATEGORY_UPDATE_RESET } from "../../constants/categoryConstants";

const CategoryUpdate = ({ match, history }) => {
  const categoryId = match.params.slug;

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [oldImage, setOldImage] = useState("");

  const categoryDetail = useSelector((state) => state.categoryDetails);
  const { error, category } = categoryDetail;

  const categoryUpdate = useSelector((state) => state.categoryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = categoryUpdate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      history.push("/admin/categories");
      toast.success("Category updated successfully");
      dispatch({ type: CATEGORY_UPDATE_RESET });
    } else {
      if (!category.name || category.slug !== categoryId) {
        dispatch(categoryDetails(categoryId));
      } else {
        setName(category.name);
        setDesc(category.desc);
        setOldImage(category.image.url);
      }
    }
    if (error) {
      toast.error(error);
    }

    if (errorUpdate) {
      toast.error(errorUpdate);
    }
  }, [
    dispatch,
    history,
    categoryId,
    category,
    error,
    errorUpdate,
    successUpdate,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("desc", desc);
    formData.append("image", image);

    dispatch(updateCategory(category.slug, formData));
  };

  const onChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      Resizer.imageFileResizer(
        file,
        720,
        720,
        "JPEG",
        100,
        0,
        (uri) => {
          setImagePreview(uri);
          setImage(uri);
        },
        "base64"
      );
    }
  };

  return (
    <Fragment>
      <MetaData title={"Update Category"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <Container>
              <Wrapper>
                <CategoryWrapper>
                  <Header>Update Category</Header>
                  <CategoryForm onSubmit={submitHandler}>
                    <CustomInput
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      label="Name"
                    />
                    <CustomInput
                      type="text"
                      id="description_field"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      label="Description"
                    />
                    <CustomInput
                      type="file"
                      accept="image/*"
                      name="category_images"
                      id="customFile"
                      onChange={onChange}
                      label="Image"
                    />
                    {oldImage && (
                      <img
                        src={oldImage}
                        alt="Images Preview"
                        className="mt-3 mr-2"
                        width="55"
                        height="52"
                      />
                    )}
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Images Preview"
                        className="mt-3 mr-2"
                        width="55"
                        height="52"
                      />
                    )}

                    <Action>
                      <SignIn
                        type="submit"
                        disabled={loadingUpdate ? true : false}
                        size="md"
                        variant="primary"
                      >
                        Update {loadingUpdate && <Spinner />}
                      </SignIn>
                    </Action>
                  </CategoryForm>
                </CategoryWrapper>
              </Wrapper>
            </Container>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryUpdate;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
`;

const Header = styled(H3)`
  color: #333333;
  text-transform: uppercase;
  text-align: center;
`;

const CategoryWrapper = styled.div`
  width: 34%;
  display: flex;
  flex-direction: column;
  margin: 10rem 0rem;
  padding: 4rem;
  background: #f8f8f8 0% 0% no-repeat padding-box;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 84.3%;
  }
`;

const CategoryForm = styled.form`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const SignIn = styled(Button)`
  width: 100%;
  margin-bottom: 2rem;
  height: 6rem;
  font-size: 1.2rem;

  div {
    margin-left: 2rem;
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
`;
