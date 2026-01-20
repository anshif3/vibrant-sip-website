// Sample product data for JandJ Foods
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "mossy-drinks" | "cool-drinks" | "litchi";
}

export const products: Product[] = [
  // Mossy Drinks
  {
    id: "orange-juice",
    name: "Fresh Orange Juice",
    description: "100% pure orange juice made from handpicked oranges. No added sugar, just natural sweetness.",
    price: 40,
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop",
    category: "mossy-drinks",
  },
  {
    id: "mango-juice",
    name: "Alphonso Mango Juice",
    description: "Premium Alphonso mango pulp blended to perfection. Rich, creamy, and irresistibly delicious.",
    price: 50,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop",
    category: "mossy-drinks",
  },
  {
    id: "apple-juice",
    name: "Crisp Apple Juice",
    description: "Fresh pressed apple juice with a perfect balance of sweet and tart flavors.",
    price: 45,
    image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=400&h=400&fit=crop",
    category: "mossy-drinks",
  },
  {
    id: "mixed-fruit",
    name: "Mixed Fruit Delight",
    description: "A tropical blend of pineapple, papaya, and passion fruit. Vitamin-packed refreshment.",
    price: 45,
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=400&fit=crop",
    category: "mossy-drinks",
  },
  // Cool Drinks
  {
    id: "lime-soda",
    name: "Sparkling Lime Soda",
    description: "Zesty lime with refreshing bubbles. The perfect thirst quencher on a hot day.",
    price: 30,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=400&fit=crop",
    category: "cool-drinks",
  },
  {
    id: "lemon-ginger",
    name: "Lemon Ginger Fizz",
    description: "Tangy lemon meets spicy ginger in this invigorating sparkling drink.",
    price: 35,
    image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?w=400&h=400&fit=crop",
    category: "cool-drinks",
  },
  {
    id: "coconut-water",
    name: "Pure Coconut Water",
    description: "Natural electrolytes from tender coconuts. Hydration at its purest.",
    price: 40,
    image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=400&h=400&fit=crop",
    category: "cool-drinks",
  },
  {
    id: "mint-cooler",
    name: "Mint Cooler",
    description: "Refreshing mint-infused drink that cools you down instantly.",
    price: 30,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
    category: "cool-drinks",
  },
  // Litchi
  {
    id: "strawberry-smoothie",
    name: "Strawberry Smoothie",
    description: "Creamy strawberry blend with a hint of vanilla. A delightful treat.",
    price: 55,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop",
    category: "litchi",
  },
  {
    id: "berry-blast",
    name: "Berry Blast",
    description: "A powerful mix of blueberries, raspberries, and blackberries.",
    price: 55,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop",
    category: "litchi",
  },
  {
    id: "peach-passion",
    name: "Peach Passion",
    description: "Sweet peaches with exotic passion fruit. A tropical paradise in a bottle.",
    price: 50,
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&h=400&fit=crop",
    category: "litchi",
  },
  {
    id: "guava-nectar",
    name: "Guava Nectar",
    description: "Rich guava flavor with the perfect balance of sweetness. A fan favorite.",
    price: 45,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop",
    category: "litchi",
  },
];

export const getCategoryName = (category: Product["category"]) => {
  const names = {
    "mossy-drinks": "Mossy Drinks",
    "cool-drinks": "Cool Drinks",
    "litchi": "Litchi",
  };
  return names[category];
};
