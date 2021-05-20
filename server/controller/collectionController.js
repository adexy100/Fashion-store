import Collection from "../model/categoryModel.js";
import slugify from "slugify";

export const create = async (req, res) => {
  try {
    const { name, image } = req.body;
    const collection = await new Collection({
      name,
      image,
      slug: slugify(name),
    }).save();
    if (collection) {
      res.status(201).json(collection);
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
  const collection = await Collection.find({}).sort({ createdAt: -1 }).exec();
  res.json(collection);
};

export const read = async (req, res) => {
  let collection = await Collection.findOne({ slug: req.params.slug }).exec();
  res.json(collection);
};

export const update = async (req, res) => {
  const { name, desc, image } = req.body;
  try {
    const updated = await Sub.findOneAndUpdate(
      { slug: req.params.slug },
      { name, desc, image, slug: slugify(name) },
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
