const products = [];

const category = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of applications",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
  {
    id: 2,
    title: "backend",
    description: "the backend of the applications",
    createdAt: "2021-10-01T10:47:26.889Z",
  },
];

export default class Storage {
  // add new category
  // save category
  // getAllCategoreies

  static getAllCategoreies() {
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
    // desending sort
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.category) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }
  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategoreies();
    // edit => ... save
    // new => ... save
    const existedItem = savedCategories.find((c) => c.id === categoryToSave.id);
    if (existedItem) {
      // edit
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
    } else {
      // new
      categoryToSave.id = new Date().getTime();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }
  static getAllProducts(sort = "newest") {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    return savedProducts.sort((a, b) => {
      if(sort === "newest") {
        return new Date(a.category) < new Date(b.createdAt) ? -1 : 1;
      } else if (sort ==="oldest") {
        return new Date(a.category) < new Date(b.createdAt) ? 1 : -1;

      }
    });
  }
  static saveProducts(productToSave) {
    const savedProducts = Storage.getAllProducts();
    // edit => ... save
    // new => ... save
    const existedItem = savedProducts.find((c) => c.id === productToSave.id);
    if (existedItem) {
      // edit
      existedItem.title = productToSave.title;
      existedItem.quantity = productToSave.quantity;
      existedItem.category = productToSave.category;
    } else {
      // new
      productToSave.id = new Date().getTime();
      productToSave.createdAt = new Date().toISOString();
      savedProducts.push(productToSave);
    }
    localStorage.setItem("products", JSON.stringify(savedProducts));
  }
  static deleteProduct(id){
    const savedProducts = Storage.getAllProducts();
    const filteredProducts = savedProducts.filter(p=> p.id !== parseInt(id))

    localStorage.setItem('products',JSON.stringify(filteredProducts))
  }

}
