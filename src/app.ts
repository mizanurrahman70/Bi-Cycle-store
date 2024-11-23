const express = require('express')
const app = express()

app.get('/', (req:Request, res:Response) => {
  res.send({status:true,message:'Hello World!'})
})
export default app
