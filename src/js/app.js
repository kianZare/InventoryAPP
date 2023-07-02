import CategoryView from "./CategoryView.js";

document.addEventListener("DOMContentLoaded", ()=>{
    // setApp => categories : ok
    CategoryView.setApp();
    console.log(CategoryView);
    // create categories options
    CategoryView.createCategoriesList()
})
class APP {
    
}



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