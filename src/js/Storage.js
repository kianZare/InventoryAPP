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
    // products , category => locatStorage
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
      categoryToSave.id = new Date();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }
  static getAllProducts() {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    return sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.category) > new Date(b.createdAt) ? -1 : 1;
    });
  }
  static saveProducts(productToSave) {
    const savedProduct = Storage.getAllCategoreies();
    // edit => ... save
    // new => ... save
    const existedItem = this.saveProducts.find((c) => c.id === productToSave.id);
    if (existedItem) {
      // edit
      existedItem.title = productToSave.title;
      existedItem.quantity = productToSave.quantity;
      existedItem.category = productToSave.category;
    } else {
      // new
      productToSave.id = new Date().getItem();
      productToSave.createdAt = new Date().toISOString();
      savedCategories.push(productToSave);
    }
    localStorage.setItem("products", JSON.stringify(savedProducts));
  }

}
