import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMContentLoaded", () => {
  // setApp => categories : ok
  CategoryView.setApp();
  ProductView.setApp();
  // console.log(ProductView);
  // create categories options
  CategoryView.createCategoriesList();
  ProductView.createProductList(ProductView.products);
});

// target:
// 1. create category
// 2. create product based on selected category
// 3. edit product
// 4. remove product
// 5. save products in local storage
//  -> Storage Class for handle application methods
//  -> Product class
//  -> CategoryViw class
//  -> Main and App Class
