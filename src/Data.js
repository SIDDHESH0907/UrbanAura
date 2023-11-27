// sampleData.js
import Product from './Product';
import Category from './Category';

const categories = [
  new Category(1, 'Living Room', 'public/images/living-room.jpg'),
  new Category(2, 'Skincare', '/images/skincare.jpg'),
  new Category(3, 'Kitchen', '/images/kitchen.jpg'),
  new Category(4, 'Electronics', '/images/electronics.jpg'),
];

const products = [
  new Product(1, 'Sofa', 19999, 'Comfortable sofa for your living room', 1, '/images/sofa.png', 'Soft Fabric', '30 kg', '3-seater'),
  new Product(2, 'Coffee Table', 11999, 'Stylish coffee table for your living room', 1, '/images/coffee-table.png', 'Wooden', '8 kg', '40x40 cm'),
  new Product(3, 'Moisturizer', 1599, 'Hydrating moisturizer for your skincare routine', 2, '/images/moisturizer.png', 'Creamy', '150 g', 'Standard'),
  new Product(4, 'Toaster', 3199, 'Compact toaster for quick breakfasts', 3, '/images/toaster.png', 'Stainless Steel', '2 kg', 'Compact'),
  new Product(5, 'Smart TV', 33999, '4K Smart TV for your entertainment', 4, '/images/smart-tv.png', 'LED Screen', '15 kg', '55-inch'),

  new Product(6, 'Dining Table', 13999, 'Elegant dining table for your home', 1, '/images/dining-table.png', 'Wooden', '25 kg', '6-seater'),
  new Product(7, 'Bed Frame', 31999, 'Sturdy bed frame for a good night\'s sleep', 1, '/images/bed-frame.png', 'Metal', '20 kg', 'King Size'),
  new Product(8, 'Face Cleanser', 439, 'Gentle cleanser for your skincare routine', 2, '/images/face-cleanser.png', 'Liquid', '200 ml', 'Standard'),
  new Product(9, 'Blender', 1599, 'Powerful blender for your kitchen needs', 3, '/images/blender.png', 'Plastic', '3 kg', 'Compact'),
  new Product(10, 'Laptop', 89999, 'High-performance laptop for work and play', 4, '/images/laptop.png', 'Metal', '2 kg', '15-inch'),

  new Product(11, 'Bookshelf', 6399, 'Modern bookshelf for organizing your books', 1, '/images/bookshelf.png', 'Wooden', '15 kg', '5-tier'),
  new Product(12, 'Night Cream', 699, 'Rejuvenating night cream for skincare', 2, '/images/night-cream.png', 'Creamy', '50 g', 'Standard'),
  new Product(13, 'Tea Kettle', 1799, 'Enjoy your favorite tea with a stylish tea kettle', 3, '/images/tea-kettle.png', 'Stainless Steel', '1 kg', 'Standard'),
  new Product(14, 'Headphones', 1999, 'Noise-canceling headphones for immersive audio', 4, '/images/headphones.png', 'Plastic', '0.5 kg', 'Over-ear'),
  new Product(15, 'Desk Chair', 7199, 'Comfortable desk chair for long hours of work', 1, '/images/desk-chair.png', 'Leather', '10 kg', 'Adjustable'),

  new Product(16, 'Sunscreen', 399, 'Sunscreen for protecting your skin', 2, '/images/sunscreen.png', 'Lotion', '100 ml', 'Standard'),
  new Product(17, 'Microwave Oven', 9399, 'Convenient microwave oven for your kitchen', 3, '/images/microwave-oven.png', 'Metal', '15 kg', 'Standard'),
  new Product(18, 'Smartwatch', 25999, 'Fitness tracker and smartwatch for active lifestyles', 4, '/images/smartwatch.png', 'Metal', '0.1 kg', 'Standard'),
  new Product(19, 'Yoga Mat', 1299, 'Comfortable yoga mat for your fitness routine', 1, '/images/yoga-mat.png', 'Rubber', '2 kg', 'Standard'),
  new Product(20, 'Shampoo', 359, 'Nourishing shampoo for healthy hair', 2, '/images/shampoo.png', 'Liquid', '300 ml', 'Standard'),

  new Product(21, 'Air Fryer', 7199, 'Healthy cooking with an air fryer', 3, '/images/air-fryer.png', 'Metal', '5 kg', 'Compact'),
  new Product(22, 'Monitor', 24999, 'High-resolution monitor for productivity', 4, '/images/monitor.png', 'LED Screen', '7 kg', '27-inch'),
  new Product(23, 'Wall Clock', 999, 'Decorative wall clock for your living space', 1, '/images/wall-clock.png', 'Plastic', '1 kg', 'Standard'),
  new Product(24, 'Hair Dryer', 1999, 'Efficient hair dryer for quick styling', 2, '/images/hair-dryer.png', 'Plastic', '0.8 kg', 'Standard'),
  new Product(25, 'Coffee Maker', 4799, 'Automatic coffee maker for your kitchen', 3, '/images/coffee-maker.png', 'Metal', '3 kg', 'Standard'),
];

export { categories, products };
