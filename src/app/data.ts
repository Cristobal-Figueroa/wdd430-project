export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  sellerId: string;
  imageColor: string;
}

export interface Seller {
  id: string;
  name: string;
  bio: string;
  story: string;
  imageColor: string;
}

export const sellers: Seller[] = [
  {
    id: "maria-crafts",
    name: "Maria's Crafts",
    bio: "Traditional weaving techniques passed down through generations.",
    story: "Maria has been weaving baskets and textiles for over 20 years, using techniques learned from her grandmother in rural Colombia.",
    imageColor: "#D4A574",
  },
  {
    id: "clay-studio",
    name: "Clay Studio",
    bio: "Handmade ceramics inspired by nature and modern design.",
    story: "Clay Studio creates unique ceramic pieces that blend organic forms with contemporary aesthetics, all handmade in small batches.",
    imageColor: "#8B5A2B",
  },
  {
    id: "wood-artisan",
    name: "Wood Artisan",
    bio: "Sustainable woodwork from locally sourced materials.",
    story: "Wood Artisan crafts functional wooden pieces from reclaimed and locally sourced wood, focusing on sustainability and natural beauty.",
    imageColor: "#5D4E37",
  },
  {
    id: "yarn-dreams",
    name: "Yarn Dreams",
    bio: "Hand-knitted accessories made with love and care.",
    story: "Yarn Dreams creates cozy, handcrafted accessories using premium natural fibers and traditional knitting patterns.",
    imageColor: "#C8A89A",
  },
];

export const products: Product[] = [
  {
    id: "handwoven-basket",
    name: "Handwoven Basket",
    price: 45.0,
    category: "Home Decor",
    description: "Beautiful handwoven storage basket made from natural fibers. Perfect for organizing any room while adding a touch of artisan craftsmanship.",
    sellerId: "maria-crafts",
    imageColor: "#D4A574",
  },
  {
    id: "ceramic-vase",
    name: "Ceramic Vase",
    price: 65.0,
    category: "Home Decor",
    description: "Elegant handmade ceramic vase with a unique glaze finish. Each piece is one-of-a-kind and crafted with care.",
    sellerId: "clay-studio",
    imageColor: "#8B5A2B",
  },
  {
    id: "wooden-bowl",
    name: "Wooden Bowl",
    price: 38.0,
    category: "Kitchen",
    description: "Sustainable wooden bowl crafted from locally sourced wood. Food-safe finish and perfect for everyday use.",
    sellerId: "wood-artisan",
    imageColor: "#5D4E37",
  },
  {
    id: "knitted-scarf",
    name: "Knitted Scarf",
    price: 28.0,
    category: "Accessories",
    description: "Cozy hand-knitted scarf made from premium wool. Warm, soft, and perfect for chilly days.",
    sellerId: "yarn-dreams",
    imageColor: "#C8A89A",
  },
  {
    id: "woven-wall-hanging",
    name: "Woven Wall Hanging",
    price: 85.0,
    category: "Home Decor",
    description: "Intricate woven wall hanging featuring traditional patterns and natural cotton fibers. Adds warmth and texture to any space.",
    sellerId: "maria-crafts",
    imageColor: "#D4A574",
  },
  {
    id: "ceramic-mug",
    name: "Ceramic Mug",
    price: 22.0,
    category: "Kitchen",
    description: "Handmade ceramic mug with comfortable handle and unique glaze. Microwave and dishwasher safe.",
    sellerId: "clay-studio",
    imageColor: "#8B5A2B",
  },
  {
    id: "wooden-spatula",
    name: "Wooden Spatula Set",
    price: 24.0,
    category: "Kitchen",
    description: "Set of three handmade wooden utensils including spoon, spatula, and serving fork. Finished with food-safe oil.",
    sellerId: "wood-artisan",
    imageColor: "#5D4E37",
  },
  {
    id: "knitted-beanie",
    name: "Knitted Beanie",
    price: 32.0,
    category: "Accessories",
    description: "Hand-knitted beanie made from soft merino wool. Stretchy, warm, and stylish for any season.",
    sellerId: "yarn-dreams",
    imageColor: "#C8A89A",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsBySeller(sellerId: string): Product[] {
  return products.filter((product) => product.sellerId === sellerId);
}

export function getSellerById(id: string): Seller | undefined {
  return sellers.find((seller) => seller.id === id);
}
