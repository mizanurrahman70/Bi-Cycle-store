import { Router } from "express";
import { productController } from "./product.controller";
import express from "express";
const productRouter = express.Router();

// Define routes
productRouter.post('/create-product', productController.createProduct);
productRouter.get("/products", productController.getAllProducts);
productRouter.get("/products/:productId", productController.getProductById);
productRouter.put("/products/:productId", productController.updateProduct);
productRouter.delete("/products/:productId", productController.deleteProduct);

export default productRouter;
