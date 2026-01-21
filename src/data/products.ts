// Sample product data for JandJ Foods
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "mossy-drinks" | "cool-drinks";
}

export const products: Product[] = [
  // Mossy Drinks
  {
    id: "mossy apple big",
    name: "Mossy Apple drink",
    description: "Smooth, fresh apple flavor in every 350 ml bottle. Pack of 12 bottles.",
    price: 20,
    image: "mossy apple big.png",
    category: "mossy-drinks",
  },
  {
    id: "mossy apple small",
    name: "Mossy Apple drink",
    description: "Crisp apple freshness in every 160 ml bottle. Pack of 20 bottles.",
    price: 10,
    image: "mossy apple.png",
    category: "mossy-drinks",
  },
  {
    id: "mossy fruit big",
    name: "Mossy fruit drink",
    description: "A vibrant fruit blend in every 350 ml bottle. Pack of 12 bottles.",
    price: 20,
    image: "mossy fruit big.png",
    category: "mossy-drinks",
  },
  {
    id: "mossy fruit flavour",
    name: "Mossy fruit drink ",
    description: "A lively fruity fusion in every 160 ml bottle. Pack of 20 bottles.",
    price: 10,
    image: "mossy fruit flavour.png",
    category: "mossy-drinks",
  },
  {
    id: "mossy lemon big",
    name: "Mossy lemon drink",
    description: "A vibrant lemon burst in every 350 ml bottle. Pack of 12 bottles.",
    price: 20,
    image: "mossy lemon big.png",
    category: "mossy-drinks",
  },
  {
    id: "mossy malt big",
    name: "Mossy malt drink",
    description: "Rich, smooth malt flavour in every 350 ml bottle. Pack of 12 bottles.",
    price: 20,
    image: "mossy malt big.png",
    category: "mossy-drinks",
  },
  {
    id: "mossy malt small",
    name: "Mossy malt drink",
    description: "A refined malt blend in every 160 ml bottle. Pack of 20 bottles.",
    price: 10,
    image: "mossy malt.png",
    category: "mossy-drinks",
  },
  // Cool Drinks
  {
    id: "mango big",
    name: "Mango drink",
    description: "Tropical mango freshness, perfectly packed in 300 ml. Pack of 24 bottles.",
    price: 20,
    image: "mango big.jpg",
    category: "cool-drinks",
  },
  {
    id: "mango small",
    name: "Mango drink",
    description: "Naturally sweet mango refreshment in a 150 ml bottle. Pack of 15 bottles.",
    price: 10,
    image: "mango small.jpg",
    category: "cool-drinks",
  },
  {
    id: "orange big",
    name: "Orange drink",
    description: "Pure citrus delight, perfectly packed in 300 ml. Pack of 24 bottles.",
    price: 20,
    image: "orange big.jpg",
    category: "cool-drinks",
  },
  {
    id: "orange small",
    name: "Orange drink",
    description: "Bright, refreshing orange flavor in a 150 ml bottle. Pack of 15 bottles.",
    price: 10,
    image: "orange small.jpg",
    category: "cool-drinks",
  },
  {
    id: "pineapple big",
    name: "Pineapple drink",
    description: "Tropical pineapple freshness in every 300 ml bottle. Pack of 24 bottles.",
    price: 20,
    image: "pinapple big.jpg",
    category: "cool-drinks",
  },
  {
    id: "pineapple small",
    name: "Pineapple drink",
    description: "Sweet and tangy pineapple delight in a 150 ml bottle. Pack of 15 bottles.",
    price: 10,
    image: "pinapple small.jpg",
    category: "cool-drinks",
  },
  {
    id: "greenapple small",
    name: "Greenapple drink",
    description: "A cool burst of green apple flavor, perfectly packed in 150 ml. Pack of 15 bottles.",
    price: 10,
    image: "greenapple small.jpg",
    category: "cool-drinks",
  },
  {
    id: "imli small",
    name: "Imli drink",
    description: "Traditional tamarind flavor, refreshingly packed in 150 ml. Pack of 15 bottles.",
    price: 10,
    image: "imili small.jpg",
    category: "cool-drinks",
  },
  {
    id: "strawberry small",
    name: "Strawberry drink",
    description: "A smooth, fruity strawberry delight, perfectly packed in 150 ml. Pack of 15 bottles.",
    price: 10,
    image: "stawberry small.jpg",
    category: "cool-drinks",
  },
  
  // Litchi
  {
    id: "litchi small",
    name: "Litchi drink",
    description: "A burst of delicate litchi freshness in every 150 ml bottle. Pack of 15 bottles.",
    price: 10,
    image: "lychee small.jpg",
    category: "cool-drinks",
  },
  {
    id: "litchi big",
    name: "Litchi drink",
    description: "Sip the sweetness of summer with every 300 ml bottle.ack of 24 bottles.",
    price: 20,
    image: "lychee small.jpg",
    category: "cool-drinks",
  },
 
];

export const getCategoryName = (category: Product["category"]) => {
  const names = {
    "mossy-drinks": "Mossy Drinks",
    "cool-drinks": "Cool Drinks",
  };
  return names[category];
};
