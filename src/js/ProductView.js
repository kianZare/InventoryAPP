import Storage from "./Storage.js";

const addNewProductBtn = document.querySelector("#add-new-product");

class ProductView {
  constructor() {
    addNewProductBtn.addEventListener("click", (e) => this.addNewProduct(e));
    this.products = [];
  }
setApp(){
    this.products = Storage.getAllProducts();
}

  addNewProduct(e) {
    e.preventDefault();
    const title = document.querySelector("#product-title").value;
    const quantity = document.querySelector("#product-quantity").value;
    const category = document.querySelector("#product-category").value;

    if(!title || !category || !quantity)return;
    Storage.saveProducts({title, category, quantity});
    this.products = Storage.getAllProducts();
    console.log(this.products);
    this.createProductList();
  }
  createProductList(){
    let result = ""
    this.products.forEach((item) => {
        const selectedCategory = Storage.getAllCategoreies().find((c)=> c.id == item.category)
        const options = {weekday:"long", year:"numeric", month:"long", day:"numeric"}
        result += `<div class="flex items-center justify-between ">
        <span class="text-slate-400">${item.title}</span>
        <div class="flex items-center gap-x-4">
          <span class="text-slate-400">${new Date().toLocaleDateString('en-UK',options)}</span>
          <span
            class="block px-3 py-0.5 bg-black text-slate-400 border border-slate-400 text-sm rounded-xl"
            >${selectedCategory.title}</span
          >
          <span
            class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300"
            >${item.quantity}</span
          >
          <button
            class="border px-2 py-0.5 rounded-xl border-red-500 text-red-400" data-id=${item.id}
          >delete</button>
        </div>
      </div>`;

    })
    const productsDOM = document.getElementById("product-list")
    productsDOM.innerHTML = result;
  }
}

export default new ProductView();
