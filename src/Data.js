// sampleData.js
import Product from './Product';
import Category from './Category';

const categories = [
  new Category(1, 'Living Room', '/images/living-room.jpg'),
  new Category(2, 'Skincare', '/images/skincare.jpg'),
  new Category(3, 'Kitchen', '/images/kitchen.jpg'),
  new Category(4, 'Electronics', '/images/electronics.jpg'),
];

const products = [
  new Product(1, 'Sofa', 499.99, 'Comfortable sofa for your living room', 1, '/images/sofa.jpg'),
  new Product(2, 'Coffee Table', 149.99, 'Stylish coffee table for your living room', 1, '/images/coffee-table.jpg'),
  new Product(3, 'Moisturizer', 19.99, 'Hydrating moisturizer for your skincare routine', 2, '/images/moisturizer.jpg'),
  new Product(4, 'Cookware Set', 129.99, 'High-quality cookware set for your kitchen', 3, '/images/cookware.jpg'),
  new Product(5, 'Smart TV', 799.99, '4K Smart TV for your entertainment', 4, '/images/smart-tv.jpg'),
  // Add more products here
  new Product(6, 'Dining Table', 299.99, 'Elegant dining table for your home', 1, '/images/dining-table.jpg'),
  new Product(7, 'Bed Frame', 399.99, 'Sturdy bed frame for a good night\'s sleep', 1, '/images/bed-frame.jpg'),
  new Product(8, 'Face Cleanser', 12.99, 'Gentle cleanser for your skincare routine', 2, '/images/face-cleanser.jpg'),
  new Product(9, 'Blender', 69.99, 'Powerful blender for your kitchen needs', 3, '/images/blender.jpg'),
  new Product(10, 'Laptop', 1299.99, 'High-performance laptop for work and play', 4, '/images/laptop.jpg'),
  // Add more products here
  new Product(11, 'Bookshelf', 79.99, 'Modern bookshelf for organizing your books', 1, '/images/bookshelf.jpg'),
  new Product(12, 'Night Cream', 24.99, 'Rejuvenating night cream for skincare', 2, '/images/night-cream.jpg'),
  new Product(13, 'Toaster', 39.99, 'Compact toaster for quick breakfasts', 3, '/images/toaster.jpg'),
  new Product(14, 'Headphones', 149.99, 'Noise-canceling headphones for immersive audio', 4, '/images/headphones.jpg'),
  new Product(15, 'Desk Chair', 89.99, 'Comfortable desk chair for long hours of work', 1, '/images/desk-chair.jpg'),
  // Add more products here
  new Product(16, 'Sunscreen', 14.99, 'Sunscreen for protecting your skin', 2, '/images/sunscreen.jpg'),
  new Product(17, 'Microwave Oven', 79.99, 'Convenient microwave oven for your kitchen', 3, '/images/microwave-oven.jpg'),
  new Product(18, 'Smartwatch', 199.99, 'Fitness tracker and smartwatch for active lifestyles', 4, '/images/smartwatch.jpg'),
  new Product(19, 'Rug', 49.99, 'Stylish rug for adding warmth to your home', 1, '/images/rug.jpg'),
  new Product(20, 'Shampoo', 16.99, 'Nourishing shampoo for healthy hair', 2, '/images/shampoo.jpg'),
  // Add more products here
  new Product(21, 'Air Fryer', 89.99, 'Healthy cooking with an air fryer', 3, '/images/air-fryer.jpg'),
  new Product(22, 'Monitor', 299.99, 'High-resolution monitor for productivity', 4, '/images/monitor.jpg'),
  new Product(23, 'Wall Clock', 29.99, 'Decorative wall clock for your living space', 1, '/images/wall-clock.jpg'),
  new Product(24, 'Facial Mask', 8.99, 'Refreshing facial mask for skincare', 2, '/images/facial-mask.jpg'),
  new Product(25, 'Coffee Maker', 59.99, 'Automatic coffee maker for your kitchen', 3, '/images/coffee-maker.jpg'),
];

export { categories, products };
