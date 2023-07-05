import Storage from "./Storage.js";

const addNewProductBtn = document.querySelector("#add-new-product");
const searchInput = document.querySelector("#search-input");
const selectedSort = document.querySelector("#sort-products");
// const deleteProduct = document.getElementById("delete-product")

class ProductView {
  constructor() {
    addNewProductBtn.addEventListener("click", (e) => this.addNewProduct(e));
    searchInput.addEventListener("input", (e) => this.searchProducts(e));
    selectedSort.addEventListener("change", (e) => this.sortProducts(e));
    // deleteProduct.addEventListener("click", (e) => this.deleteProduct(e))
    this.products = [];
  }
  setApp() {
    this.products = Storage.getAllProducts();
  }

  addNewProduct(e) {
    e.preventDefault();
    const title = document.querySelector("#product-title").value;
    const quantity = document.querySelector("#product-quantity").value;
    const category = document.querySelector("#product-category").value;

    if (!title || !category || !quantity) return;
    Storage.saveProducts({ title, category, quantity });
    this.products = Storage.getAllProducts();
    this.createProductList(this.products);
  }
  createProductList(products) {
    let result = "";
    products.forEach((item) => {
      const selectedCategory = Storage.getAllCategoreies().find(
        (c) => c.id == item.category
      );
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      result += `<div class="flex items-center justify-between mb-2">
        <span class="text-slate-400 ml-2">${item.title}</span>
        <div class="flex items-center gap-x-4">
          <span class="text-slate-400">${new Date().toLocaleDateString(
            "en-UK",
            options
          )}</span>
          <span
            class="block px-3 py-0.5 bg-black text-slate-400 border border-slate-400 text-sm rounded-xl"
            >${selectedCategory.title}</span
          >
          <span
            class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300"
            >${item.quantity}</span
          >
          <button
            class="delete-product border px-2 py-0.5 rounded-xl border-red-500 text-red-400 mr-2" 
            data-product-id=${item.id}>delete</button>
        </div>
      </div>`;
    });
    const productsDOM = document.getElementById("product-list");
    productsDOM.innerHTML = result;

    const deleteBtns = [...document.querySelectorAll(".delete-product")];
    deleteBtns.forEach((item) => {
      item.addEventListener("click", (e) => this.deleteProduct(e));
    });
  }
  searchProducts(e) {
    const value = e.target.value.trim().toLowerCase();
    const filteredProducts = this.products.filter((p) =>
      p.title.toLowerCase().includes(value)
    );
    this.createProductList(filteredProducts);
  }
  sortProducts(e) {
    const value = e.target.value;
    this.products = Storage.getAllProducts(value);
    this.createProductList(this.products);
  }
  deleteProduct(e) {
    const productId = e.target.dataset.productId;
    Storage.deleteProduct(productId);
    this.products = Storage.getAllProducts();
    this.createProductList(this.products)
  }
}

export default new ProductView();
