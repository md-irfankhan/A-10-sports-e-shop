const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000 || process.env.PORT;
app.use(cors());
app.use(express.json());

require('dotenv').config();


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.oenll6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const sportsEShop = client.db("sportsEShop");
    const spProducts = sportsEShop.collection("products");
    app.get('/', (req, res) => {
      res.send('Hello World!');
    })
    app.get('/all',async(req,res)=>{
      const cursor=spProducts.find();
      const result=await cursor.toArray();
      res.send(result)
      


    })
    app.get('/find/:id',async(req,res)=>{
      const id=req.params.id;
      const query={_id:new ObjectId(id)};
      const result=await spProducts.findOne(query);
      // const result=await cursor.toArray();
      res.send(result)
    })
    app.post('/add',async (req,res)=> {
      const reqBody = req.body;
      console.log(reqBody);
      const result=await spProducts.insertOne(reqBody);
      res.send(result);
      
    })
    app.delete('/delete/:id',async(req,res)=>{
      const id=req.params.id;
      const query={_id:new ObjectId(id)}
      const result=await spProducts.deleteOne(query);
      res.send(result)
    })
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
