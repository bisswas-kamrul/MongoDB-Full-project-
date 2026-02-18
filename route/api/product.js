const express = require("express");
const upload = require('../../medelwearFolder/imgUplod')
const productContollar = require("../../contollar/productContollar");
const ShowProduct = require("../../contollar/showProduct");
const UpdeteProduct = require("../../contollar/UpdeteProductContollar");
const deletProduct = require("../../contollar/deletProductContollar");
const SubProductContollar = require("../../contollar/SubProductContollar");


const ProductRoute = express.Router();
ProductRoute.use(express.json());

ProductRoute.post("/ProductCreact",upload.single('images'), productContollar);
ProductRoute.get("/ShowProduct", ShowProduct);
ProductRoute.post("/SubProduct", SubProductContollar);
ProductRoute.post("/UpdeteProduct/:id", UpdeteProduct);
ProductRoute.post("/deletProduct/:id", deletProduct);

module.exports = ProductRoute;
