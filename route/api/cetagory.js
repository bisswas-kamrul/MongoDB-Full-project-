const express = require('express');
const cetagoryContollar = require('../../contollar/cetagoryContollar');
const cetagoryGETcontollar = require('../../contollar/cetagoryGETcontollar');
const SubCategoryContollar = require('../../contollar/SubCategoryContollar');
const AllSubCategory = require('../../contollar/AllSubCategory');
const updateSubCategory = require('../../contollar/updateSubCategory');
const subCategoryDeleteControllers = require('../../contollar/subCategoryDeleteControllers');
const singleSubCategoryGETcontollar = require('../../contollar/singleSubCategoryGETcontollar');
const cetagoryRoute = express.Router()
cetagoryRoute.use(express.json());

cetagoryRoute.post('/cetagoryURL',cetagoryContollar )
cetagoryRoute.get('/cetagoryget',cetagoryGETcontollar)
cetagoryRoute.post('/SubCategoryURL', SubCategoryContollar,)
cetagoryRoute.get('/GetSubCategoryURL',AllSubCategory)
cetagoryRoute.get('/SingleSubCategoryGET/:id',singleSubCategoryGETcontollar)
cetagoryRoute.post('/updateSubCategoryURL/:id', updateSubCategory,)
cetagoryRoute.post('/subCategoryDeleteURL/:id', subCategoryDeleteControllers,)

module.exports = cetagoryRoute