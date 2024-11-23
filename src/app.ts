import express, { Request, Response } from 'express';
import productRouter from './module/product/products.route';
const app = express()
app.use(express.json())
app.use("/api/product",productRouter)
app.get('/', (req:Request, res:Response) => {
  res.send({status:true,message:'Hello World!'})
})
export default app
