const express = require("express");
const productContollar = require("../../contollar/productContollar");
const ShowProduct = require("../../contollar/showProduct");
const UpdeteProduct = require("../../contollar/UpdeteProductContollar");
const deletProduct = require("../../contollar/deletProductContollar");


const ProductRoute = express.Router();
ProductRoute.use(express.json());

ProductRoute.post("/ProductCreact", productContollar);
ProductRoute.get("/ShowProduct", ShowProduct);
ProductRoute.post("/UpdeteProduct/:id", UpdeteProduct);
ProductRoute.post("/deletProduct/:id", deletProduct);

module.exports = ProductRoute;
