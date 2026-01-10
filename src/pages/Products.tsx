import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { products, getCategoryName, Product } from "@/data/products";
import { cn } from "@/lib/utils";

type Category = Product["category"] | "all";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "fruit-juice", label: "Fruit Juices" },
  { id: "cold-drinks", label: "Cold Drinks" },
  { id: "flavored-drinks", label: "Flavored Drinks" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-light via-background to-green-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Products"
            title="Delicious Bottled Juices"
            description="Explore our wide range of refreshing beverages. From pure fruit juices to sparkling cold drinks, we have something for everyone."
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                category={getCategoryName(product.category)}
                className="animate-scale-in opacity-0"
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Prices may vary based on location and quantity. 
            For bulk orders, <a href="/distributors" className="text-primary font-medium hover:underline">contact our sales team</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
