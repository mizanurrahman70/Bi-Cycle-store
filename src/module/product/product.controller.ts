import product from "./product.model"
import { Request,Response } from "express"

const createProduct = async(req:Request ,res:Response)=>{
   try{
    const playLoad = req.body
    const result =await product.create(playLoad)
   res.json(
    {
        message:"product create successfully",
        data:result,
    }
   )
   }catch(error){
    res.status(500).json({
        message:"Failed to create product",
        error: error.message,
    })
   }

}
export  const productController = {
    createProduct
}