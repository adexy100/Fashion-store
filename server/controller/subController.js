import Sub from "../model/subModel.js";
import Product from "../model/productModel.js";
import slugify from "slugify";
import cloudinary from "cloudinary";

export const create = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.image, {
      folder: "subs",
      public_id: `${Date.now()}`,
      resource_type: "auto", // jpeg, png
    });
    const { name, desc, parent } = req.body;
    const sub = await new Sub({
      name,
      desc,
      parent,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      slug: slugify(name),
    }).save();
    if (sub) {
      res.status(201).json(sub);
    } else {
      res.status(400);
      throw new Error("Sub-Category already exist");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Create category failed");
  }
};

export const list = async (req, res) => {
  const subs = await Sub.find({}).sort({ createdAt: -1 }).exec();
  res.json(subs);
};

export const read = async (req, res) => {
  let sub = await Sub.findOne({ slug: req.params.slug }).exec();
  const products = await Product.find({ subs: sub })
    .populate("category")
    .exec();

  res.json({
    sub,
    products,
  });
};

export const update = async (req, res) => {
  const { name, desc, parent } = req.body;
  const newData = {
    name,
    desc,
    parent,
    slug: slugify(name),
  };
  // Update image
  if (req.body.image !== "") {
    const category = await Sub.findOne({ slug: req.params.slug }).exec();

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
    const updated = await Sub.findOneAndUpdate(
      { slug: req.params.slug },
      newData,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Sub-category update failed");
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await Sub.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Sub-category delete failed");
  }
};
