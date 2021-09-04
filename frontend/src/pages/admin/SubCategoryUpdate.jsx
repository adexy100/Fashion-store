import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Resizer from "react-image-file-resizer";

import MetaData from "../../utils/MetaData";
import { Spinner } from "../../components/main";
import Sidebar from "./Sidebar";
import { CustomInput } from "../../components/main";
import { Solid, type, media } from "../../variables";
import { H3 } from "../../components/others/Text";
import { Button } from "../../components/main";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { subDetails, updateSub } from "../../redux/actions/subCategoryActions";
import { listCategories } from "../../redux/actions/categoryActions";
import { SUB_CATEGORY_UPDATE_RESET } from "../../constants/subCategoryConstants";

const SubCategoryUpdate = ({ match, history }) => {
  const subId = match.params.slug;

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [parent, setParent] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [oldImage, setOldImage] = useState("");

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const subDetail = useSelector((state) => state.subDetails);
  const { error, sub } = subDetail;

  const subUpdate = useSelector((state) => state.subUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = subUpdate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCategories());
    console.log(subId);

    if (successUpdate) {
      history.push("/admin/sub-categories");
      toast.success("Sub-Category updated successfully");
      dispatch({ type: SUB_CATEGORY_UPDATE_RESET });
    } else {
      if (!sub.name || sub.slug !== subId) {
        dispatch(subDetails(subId));
      } else {
        setName(sub.name);
        setDesc(sub.desc);
        setParent(sub.parent);
        setOldImage(sub.image.url);
      }
    }
    if (error) {
      toast.error(error);
    }

    if (errorUpdate) {
      toast.error(errorUpdate);
    }
  }, [dispatch, history, subId, sub, error, errorUpdate, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("desc", desc);
    formData.set("parent", parent);
    formData.append("image", image);

    dispatch(updateSub(sub.slug, formData));
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
      <MetaData title={"Update Sub-Category"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <Container>
              <Wrapper>
                <CategoryWrapper>
                  <Header>Update Sub-Category</Header>
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
                    <SelectWrapper>
                      <Label>Category </Label>
                      <Select
                        name="category"
                        onChange={(e) => setParent(e.target.value)}
                      >
                        <option>Please select</option>
                        {categories.length > 0 &&
                          categories.map((c) => (
                            <option
                              key={c._id}
                              value={c._id}
                              selected={c._id === parent}
                            >
                              {c.name}
                            </option>
                          ))}
                      </Select>
                    </SelectWrapper>
                    <CustomInput
                      type="file"
                      accept="image/*"
                      name="category_images"
                      id="customFile"
                      onChange={onChange}
                      label="Image"
                    />
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Images Preview"
                        className="mt-3 mr-2"
                        width="55"
                        height="52"
                      />
                    ) : (
                      <img
                        src={oldImage}
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

export default SubCategoryUpdate;

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

const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  font-family: ${type.RUBIK};
`;

const Select = styled.select`
  outline: none;
  appearance: none;
  color: #777777;
  font-size: 1.6rem;
  padding: 1rem 1rem 1rem 1rem;
  display: block;
  border: none;
  border-bottom: 0.1rem solid #96a0aa;
  background: rgba(255, 255, 255, 0);
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 0.1rem solid ${Solid.PRIMARY};
  }
`;

const Label = styled.label`
  color: ${Solid.PRIMARY};
  font-size: 1.3rem;
  font-weight: normal;
  left: 10rem;
  transition: 0.2s ease all;

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1rem;
  }
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
