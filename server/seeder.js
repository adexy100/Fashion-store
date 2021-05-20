import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import categories from "./data/category.js";
import subs from "./data/subCategories.js";
import collections from "./data/collections.js";
import products from "./data/products.js";
import User from "./model/authModel.js";
import Category from "./model/categoryModel.js";
import Collections from "./model/collectionModel.js";
import Product from "./model/productModel.js";
import connectDB from "./config/db.js";
import SubCategory from "./model/subModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await Order.deleteMany()
    await Category.deleteMany();
    await SubCategory.deleteMany();
    await Collections.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleCategory = categories.map((category) => {
      return { ...category, user: adminUser };
    });
    const subCategory = subs.map((sub) => {
      return { ...sub, user: adminUser };
    });
    const collection = collections.map((collection) => {
      return { ...collection, user: adminUser };
    });

    const product = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Category.insertMany(sampleCategory);
    await SubCategory.insertMany(subCategory);
    await Collections.insertMany(collection);
    await Product.insertMany(product);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await Order.deleteMany()
    await Category.deleteMany();
    await SubCategory.deleteMany();
    await Collections.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
