import Category from "../model/categoryModel.js";
import Sub from "../model/subModel.js";
import Product from "../model/productModel.js";
import slugify from "slugify";
import cloudinary from "cloudinary";

export const create = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.image, {
      folder: "category",
      public_id: `${Date.now()}`,
      resource_type: "auto", // jpeg, png
    });
    const { name, desc } = req.body;
    const category = await new Category({
      name,
      desc,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      slug: slugify(name),
    }).save();

    if (category) {
      res.status(201).json(category);
    } else {
      res.status(400);
      throw new Error("Category already exist");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Create category failed");
  }
};

export const list = async (req, res) => {
  const categories = await Category.find({}).sort({ createdAt: -1 }).exec();
  res.json(categories);
};

export const read = async (req, res) => {
  let category = await Category.findOne({ slug: req.params.slug }).exec();

  const products = await Product.find({ category }).populate("category").exec();

  res.json({
    category,
    products,
  });
};

export const update = async (req, res) => {
  const { name, desc } = req.body;
  const newData = {
    name,
    desc,
    slug: slugify(name),
  };
  // Update image
  if (req.body.image !== "") {
    const category = await Category.findOne({ slug: req.params.slug }).exec();

    const image_id = category.image.public_id;
    const res = await cloudinary.uploader.destroy(image_id);

    const result = await cloudinary.uploader.upload(req.body.image, {
      folder: "category",
      public_id: `${Date.now()}`,
      resource_type: "auto", // jpeg, png
    });

    newData.image = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }
  try {
    const updated = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      newData,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Category update failed");
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json({ message: "Category removed" });
  } catch (err) {
    res.status(500).send("Category delete failed");
  }
};

export const getSubs = (req, res) => {
  Sub.find({ parent: req.params._id }).exec((err, subs) => {
    if (err) console.log(err);
    res.json(subs);
  });
};
