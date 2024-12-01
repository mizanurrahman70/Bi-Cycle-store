import express, { Request, Response } from 'express';
import { OrderRoutes } from './module/order/order.route';
import { ProductRoutes } from './module/product/products.route';
const app = express()
app.use(express.json())
app.use("/api",ProductRoutes)
app.use('/api', OrderRoutes);
app.get('/', (req:Request, res:Response) => {
  res.send({status:true,message:'Hello World!'})
})
export default app
