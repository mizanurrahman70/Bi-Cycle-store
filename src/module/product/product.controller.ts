import { Request, Response } from "express";
import { productService } from "./product.service";

// Create a product
const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const playLoad = req.body;
    const result = await productService.createProduct(playLoad);
    res.status(201).json({
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error,
      success: false,
    });
  }
};

// Get all products
const getAllProducts = async (req: Request, res: Response)=> {
  try {
    const searchTerm = req.query.searchTerm as string;
    console.log("serch",searchTerm);
    const products = await productService.getAllProducts(searchTerm);
    console.log(products);
    res.status(200).json({
      message: "Products retrieved successfully",
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving products",
      success: false,
      error,
    });
  }
};

// Get a product by ID
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await productService.getProductById(productId);
    console.log(product);

    if (!product) {
      return res.status(404).json({ message: "Product not found", success: false });
    }

    res.status(200).json({ message: "Product retrieved successfully", success: true, data: product });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product", success: false, error });
  }
};

// Update a product
const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.productId;
    const updates = req.body;
    const updatedProduct = await productService.updateProduct(productId, updates);
    console.log(updatedProduct);
    if (updatedProduct) {
      res.status(200).json({
        message: "Product updated successfully",
        status: true,
        data: updatedProduct,
      });
    } else {
      res.status(404).json({
        message: "Product not found",
        status: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error updating product",
      success: false,
      error,
    });
  }
};

// Delete a product
const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await productService.deleteProduct(productId);
    console.log(deletedProduct);
    if (deletedProduct) {
      res.status(200).json({
        message: "Product deleted successfully",
        status: true,
        data: deletedProduct,
      });
    } else {
      res.status(404).json({
        message: "Product not found",
        status: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error deleting product",
      success: false,
      error,
    });
  }
};

// Export the product controller
export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
