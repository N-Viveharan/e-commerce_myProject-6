const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://nagalingamviveharan2001_db_user:project123@cluster0.alygd35.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Ensure upload folder exists
const uploadPath = "./upload/images";
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: uploadPath,
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 } // 50 MB limit
});

// Serve uploaded images
app.use('/images', express.static('upload/images'));

// Upload route
app.post("/upload", (req, res) => {
    upload.single('product')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ success: 0, message: err.message });
        }
        if (!req.file) {
            return res.status(400).json({ success: 0, message: "No file uploaded" });
        }
        console.log("File uploaded:", req.file.filename);
        res.json({
            success: 1,
            image_url: `http://localhost:${port}/images/${req.file.filename}`
        });
    });
});

//create the product
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: { 
    type: Boolean,
    default: true,
  },
});
app.post('/addproduct', async (req, res) => {
let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
    const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save()
  console.log("save");
  res.json({
    success:true,
    name:req.body.name
  })
  
});
//remove the product
app.post('/removeproduct', async (req, res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
})
// Creating API for getting all products
app.get('/allproducts', async (req, res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

// Start server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error : " + error);
    }
});
