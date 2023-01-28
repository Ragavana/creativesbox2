import { connectToDatabase } from "@lib/mongodb";

const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getAllProducts(req, res);
    }

    case "POST": {
      return addProduct(req, res);
    }

    case "PUT": {
      return updatePost(req, res);
    }

    case "DELETE": {
      return deletePost(req, res);
    }
  }
}

async function addProduct(req, res) {
  try {
      // connect to the database
      let { db } = await connectToDatabase();
      console.log(req.body)
      // add the post
      await db.collection('products').insertOne(JSON.parse(JSON.stringify(req.body)));
      // return a message
      return res.json({
          message: 'products added successfully',
          success: true,
      });
  } catch (error) {
      // return an error
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}

async function getAllProducts(req,res){
    try {
        // connect to the database
        console.log("fwfvwjfw")
        let { db } = await connectToDatabase();
        // fetch the posts
        let products = await db
            .collection('products')
            .find({})
            .sort({ published: -1 })
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(products)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

export async function getAllProductsDb(){
  try {
      // connect to the database
      let { db } = await connectToDatabase();
      // fetch the posts
      let products = await db
          .collection('products')
          .find({})
          .sort({ published: -1 })
          .toArray();
      // return the posts
      return {
          message: JSON.parse(JSON.stringify(products)),
          success: true,
      };
  } catch (error) {
      // return the error
      return {
          message: new Error(error).message,
          success: false,
      };
  }
}

export async function getProductsDb(productId){
  try {
      // connect to the database
      let { db } = await connectToDatabase();
      // fetch the posts
      let products = await db
          .collection('products')
          .find({"slug":productId})
          .sort({ published: -1 })
          .toArray();
      // return the posts
      return {
          message: JSON.parse(JSON.stringify(products)),
          success: true,
      };
  } catch (error) {
      // return the error
      return {
          message: new Error(error).message,
          success: false,
      };
  }
}
