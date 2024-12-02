import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName:{type:String, required:true},
});

const productSchema = new mongoose.Schema({
    productName: {type:String, required: true},
    categoryID: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true}
});

export const Category = mongoose.model('Category',categorySchema);
export const Product = mongoose.model('Product', productSchema);