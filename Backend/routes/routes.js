import { Router } from "express";
import { addCategories, addProduct, deleteCategory, deleteProduct, getCategories, getProducts, updateCategory, updateProduct } from "../controllers/controllers.js";

const router = Router();

// CATEGORY ROUTER

// fetch all categories
router.get("/categories",getCategories);

// add category
router.post("/categories",addCategories);

// update category
router.put("/category/:id",updateCategory);

// delete category
router.delete("/category/:id",deleteCategory);

// -------------------------------

// PRODUCT ROUTER

// fetch all products
router.get("/products",getProducts);

// add porducts
router.post("/products",addProduct);

// update product
router.put("/products/:id",updateProduct);

// delete product
router.delete("/products/:id",deleteProduct);

export default router;