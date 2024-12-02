import { Category, Product } from "../models/models.js";


// CATEGORY CONTROLLERS
export const getCategories = async (req,res) => {
    try {
        const categories = await Category.find();
        res.json({message:"Categories fetch successful!",categories});
    } catch (error) {
        res.json({message:"Error fetching categories!"});
    }
}

export const addCategories = async (req, res) => {
    try {
      if (!req.body.categoryName) {
        return res.status(400).json({ message: "Category name is required!" });
      }
      const category = new Category(req.body);
      await category.save();
      res.status(201).json({ message: "Category saved successfully!", category });
    } catch (error) {
      res.status(500).json({ message: "Error adding category!" });
    }
  };
  

export const updateCategory = async (req,res) => {
    try{
        const category = await Category.findByIdAndUpdate(req.params.id, req.body,{new: true});
        res.json({message:`Category id:${req.params.id} updated successfully!`, category});
    }catch{
        res.json({message:`Error updating Category id:${req.params.id}!`})
    }
}

export const deleteCategory = async (req,res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.json({message: `Category id:${req.params.id} deleted successfully!`,category})
    } catch (error) {
        res.json({message:`Error deleting Category id:${req.params.id}`})
    }
};

// -------------------------------------------------

//  PORDUCT CONTROLLERS
export const getProducts = async (req, res) => {
    try {
      const { page = 1, size = 10 } = req.query;
      const pageSize = parseInt(size);
      const skip = (page - 1) * pageSize;
  
      const totalProducts = await Product.countDocuments(); // Get total products count
      const products = await Product.find()
        .populate("categoryID", "categoryName")
        .skip(skip)
        .limit(pageSize);
  
      res.json({
        message: "Products fetched successfully!",
        products,
        totalPages: Math.ceil(totalProducts / pageSize),
      });
    } catch (error) {
      res.json({ message: "Error fetching products!" });
    }
};  

export const addProduct = async (req,res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.json({message:"Product added successfully!",product})
    } catch (error) {
        res.json({message:"Error adding product!"})
    }
}

export const updateProduct = async (req,res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('categoryID', 'productName');
        res.json({message:`Product id:${req.params.id} updated successfully!`,product});
    } catch (error) {
        res.json({message:`Error updating Product id: ${req.params.id}`});
    }
}

export const deleteProduct = async (req,res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({message:`Product id:${req.params} deleted successfully!`,product});
    } catch (error) {
        res.json({message:`Error deleting Product id:${req.params.id}`})
    }
}