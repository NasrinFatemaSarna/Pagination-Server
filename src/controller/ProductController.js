

const { query } = require("express");
const productModel = require("../models/ProductsModel");

exports.ProductSearchPagination = async (req, res) => {
  try {
    let pageNumber = Number(req.params.pageNumber);
    let perPage = Number(req.params.perPage);
    let searchKeyword = req.params.searchKeyword;

    let skip = (pageNumber - 1) * perPage;

    let data;

    if (searchKeyword !== "null") {
      let regex = { $regex: searchKeyword, $options: "i" };
      let query = {
        $or: [
          { title: regex },
          { category: regex },
          { brand: regex },
          { productCode: regex },
          { remarks: regex },
          { shortDescription: regex },
          { imgUrl: regex },
        ],
      };

      data = await productModel.aggregate([
        {
          $facet: {
            totalData: [{ $match: query }, { $count: "total" }],
            data: [{ $match: query }, { $skip: skip }, { $limit: perPage }],
          },
        },
      ]);
    } else {
      data = await productModel.aggregate([
        {
          $facet: {
            total: [{ $count: "total" }],
            data: [{ $skip: skip }, { $limit: perPage }],
          },
        },
      ]);
    }
    res.status(200).json({ status: "success", data });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};



// const productModel = require("../models/ProductsModel");

// exports.ProductSearchPagination = async (req, res) => {
//   try {
//     let pageNumber = Number(req.params.pageNumber);
//     let perPage = Number(req.params.perPage);
//     let searchKeyword = req.params.searchKeyword;

//     let skip = (pageNumber - 1) * perPage;

//     let data;

//     if (searchKeyword !== "null") {
//       let regex = { $regex: searchKeyword, $options: "i" };
//       let query = {
//         $or: [
//           { title: regex },
//           { category: regex },
//           { brand: regex },
//           { productCode: regex },
//           { remarks: regex },
//           { shortDescription: regex },
//           { imgUrl: regex },
//         ],
//       };

//       data = await productModel.aggregate([
//         {
//           $facet: {
//             total: [{ $match: query }, { $count: "total" }],
//             data: [{ $match: query }, { $skip: skip }, { $limit: perPage }],
//           },
//         },
//       ]);
//     } else {
//       data = await productModel.aggregate([
//         {
//           $facet: {
//             total: [{ $count: "total" }],
//             data: [{ $skip: skip }, { $limit: perPage }],
//           },
//         },
//       ]);
//     }
//     res.status(200).json({ "status": "success", "data": data });

//   } catch (error) {
//     res.status(200).json({ "status": "fail", "error": error.message });
//   }
// };




// const { query } = require("express");
// const productModel = require("../models/ProductsModel");

// exports.ProductSearchPagination = async (req, res) => {
//   try {
//     let pageNumber = Number(req.params.pageNumber);
//     let perPage = Number(req.params.perPage);
//     let searchKeyword = req.params.searchKeyword;

//     let skip = (pageNumber - 1) * perPage;

//     let data;

//     if (searchKeyword  !== "null") { 

//       let regex = { $regex: searchKeyword, $options: "i" };
//       let query = {$or: [
//           { title: regex },
//           { category: regex },
//           { brand: regex },
//           { productCode: regex },
//           { remarks: regex },
//           { shortDescription: regex },
//           { imgUrl: regex },
//         ],
//       };

//       data = await productModel.aggregate([
//         {
//           $facet: {
//             totalData: [{ $match: query }, { $count: "total" }],
//             data: [{ $match: query }, { $skip: skip }, { $limit: perPage }],
//           },
//         },
//       ]);
//     } else {
//       data = await productModel.aggregate([ 
//         {
//           $facet: {
//             total: [{ $match: query }, { $count: "total" }], 
//             data: [{ $match: query }, { $skip: skip }, { $limit: perPage }], 
//           },
//         },
//       ]);
//     }
//     res.status(200).json({"status": "success", "data": data,  })

//     }
//     else {
//         try {
//             data = await productModel.aggregate([
//                 {
//                     $facet: {
//                         total: [{ $count: "total" }],
//                         data: [{ $skip: skip }, { $limit: perPage }],
//                     },
//                 }
//             ]);
//             res.status(200).json({ "status": "success", "data": data });
//         } catch (error) {
//             res.status(500).json({ "status": "fail", "error": error.message });
//         }
//     }
    
