import React, { Fragment, useState, useEffect } from "react";
import Resizer from "react-image-file-resizer";
import styled from "styled-components";

import { Spinner } from "../../components/main";
import { CustomInput } from "../../components/main";
import MetaData from "../../utils/MetaData";
import Sidebar from "./Sidebar";
import { Solid, type, media } from "../../variables";
import { H3 } from "../../components/others/Text";
import { Button } from "../../components/main";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProduct,
  getProductDetails,
} from "../../redux/actions/productActions";
import {
  listCategories,
  listCategorySub,
} from "../../redux/actions/categoryActions";
import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";

const UpdateProduct = ({ match, history }) => {
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;
  const { subs } = useSelector((state) => state.categorySubs);
  const { error, product } = useSelector((state) => state.productDetails);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const productId = match.params.slug;
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [actualPrice, setActualPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  const [stock, setStock] = useState(0);
  const [brand, setBrand] = useState("");
  const [shipping, setShipping] = useState("Yes");
  const [color, setColor] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);

  const colors = ["Black", "Brown", "Silver", "White", "Blue"];

  useEffect(() => {
    dispatch(listCategories());

    if (isUpdated) {
      history.push("/admin/products");
      toast.success("Product updated successfully");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    } else {
      if (!product.name || product.slug !== productId) {
        dispatch(getProductDetails(productId));
      } else {
        setName(product.name);
        setDiscountPrice(product.discountPrice);
        setActualPrice(product.actualPrice);
        setDescription(product.description);
        setCategory(product.category);
        setSubOptions(product.subOptions);
        setBrand(product.brand);
        setStock(product.stock);
        setShipping(product.shipping);
        setColor(product.color);
        setOldImages(product.images);
      }
    }

    if (error) {
      toast.error(error);
    }

    if (updateError) {
      toast.error("Oops, try again");
    }
  }, [dispatch, error, isUpdated, history, updateError, product, productId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("actualPrice", actualPrice);
    formData.set("discountPrice", discountPrice);
    formData.set("description", description);
    formData.set("category", category);
    formData.set("subOptions", subOptions);
    formData.set("stock", stock);
    formData.set("brand", brand);
    formData.set("shipping", shipping);
    formData.set("color", color);

    images.forEach((image) => {
      formData.append("images", image);
    });

    dispatch(updateProduct(product.slug, formData));
  };

  const handleCatagoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setSubOptions([]);
    setCategory(e.target.value);
    dispatch(listCategorySub(e.target.value));
  };

  const onChange = (e) => {
    let files = e.target.files; // 3

    setImagesPreview([]);
    setImages([]);
    setOldImages([]);

    if (files) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            console.log("Images--", uri);
            setImagesPreview((oldArray) => [...oldArray, uri]);
            setImages((oldArray) => [...oldArray, uri]);
          },
          "base64"
        );
      }
    }
  };

  return (
    <Fragment>
      <MetaData title={"New Product"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Container>
            <Wrapper>
              <CategoryWrapper>
                <Header>New Product</Header>
                <CategoryForm onSubmit={submitHandler}>
                  <CustomInput
                    type="text"
                    id="name_field"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    required
                  />
                  <CustomInput
                    type="number"
                    id="discount_field"
                    value={discountPrice}
                    onChange={(e) => setDiscountPrice(e.target.value)}
                    label="Discount Price"
                    required
                  />
                  <CustomInput
                    type="number"
                    id="price_field"
                    value={actualPrice}
                    onChange={(e) => setActualPrice(e.target.value)}
                    label="Actual Price"
                  />
                  <CustomInput
                    type="text"
                    id="brand_field"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    label="Brand"
                    required
                  />
                  <CustomInput
                    type="number"
                    id="stock_field"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    label="Stock"
                    required
                  />
                  <SelectWrapper>
                    <Label>Shipping</Label>
                    <Select
                      name="shipping"
                      value={shipping}
                      onChange={(e) => setShipping(e.target.value)}
                      required
                    >
                      <option value="">Please Select</option>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </Select>
                  </SelectWrapper>
                  <SelectWrapper>
                    <Label>Color </Label>
                    <Select
                      name="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      required
                    >
                      <option value="">Please select</option>
                      {colors.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </Select>
                  </SelectWrapper>
                  <SelectWrapper>
                    <Label>Category </Label>
                    <Select
                      name="category"
                      value={category}
                      onChange={handleCatagoryChange}
                      required
                    >
                      <option>Please select</option>
                      {categories.length > 0 &&
                        categories.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.name}
                          </option>
                        ))}
                    </Select>
                  </SelectWrapper>
                  <SelectWrapper>
                    {subs && (
                      <>
                        <Label>SubCategory</Label>
                        <Select
                          name="category"
                          required
                          value={subOptions}
                          onChange={(e) => setSubOptions(e.target.value)}
                        >
                          <option>Please select</option>
                          {subs &&
                            subs.map((s) => (
                              <option key={s._id} value={s._id}>
                                {s.name}
                              </option>
                            ))}
                        </Select>
                      </>
                    )}
                  </SelectWrapper>

                  <Label>Description </Label>
                  <TextArea
                    type="text"
                    id="description_field"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    label="Description"
                    required
                  />
                  <CustomInput
                    type="file"
                    accept="image/*"
                    name="category_images"
                    id="customFile"
                    onChange={onChange}
                    multiple
                    label="Images"
                  />

                  {oldImages.map((img) => (
                    <img
                      src={img.url}
                      key={img}
                      alt="Images Preview"
                      className="mt-3 mr-2"
                      width="55"
                      height="52"
                    />
                  ))}
                  {imagesPreview.map((img) => (
                    <img
                      src={img}
                      key={img}
                      alt="Images Preview"
                      className="mt-3 mr-2"
                      width="55"
                      height="52"
                    />
                  ))}

                  <Action>
                    <SignIn
                      type="submit"
                      disabled={loading ? true : false}
                      size="md"
                      variant="primary"
                    >
                      Create {loading && <Spinner />}
                    </SignIn>
                  </Action>
                </CategoryForm>
              </CategoryWrapper>
            </Wrapper>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProduct;

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

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1rem;
  }
`;

const TextArea = styled.textarea`
  background: ${Solid.GREY_LIGHTER};
  border: none;
  border-bottom: 0.1rem solid #96a0aa;
  opacity: 1;
  font-family: ${type.RUBIK};
  font-size: 15px;
  margin-bottom: 2.5rem;
  height: 4rem;
  outline: none;
  transition: 0.25s;
  resize: none;
  width: 100%;

  &:focus {
    height: 10rem;
    border-color: ${Solid.PRIMARY};
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
