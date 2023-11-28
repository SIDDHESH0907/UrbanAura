// Product.js
class Product {
  constructor(id, name, price, description, categoryId, imageUrl, texture, weight, size) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.categoryId = categoryId;
    this.imageUrl = imageUrl;
    this.texture = texture; // Added texture property
    this.weight = weight; // Added weight property
    this.size = size; // Added size property
  }
}

export default Product;
