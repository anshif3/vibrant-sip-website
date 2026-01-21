import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import FeatureCard from "@/components/ui/FeatureCard";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { products } from "@/data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-orange-light via-background to-green-light overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              🍊 100% Natural & Fresh
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Fresh. <span className="text-primary">Fruity.</span><br />
              <span className="text-secondary">Refreshing.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Experience the taste of nature with JandJ Foods' premium bottled juices. 
              Made with the freshest fruits and zero artificial preservatives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 text-lg">
                <Link to="/products">
                  View Our Juices <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-lg">
                <Link to="/distributors#bulk-order">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

       {/* Hero Image Area */}
<div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:flex items-end justify-center">
  <div className="relative w-full h-[80%] flex items-end justify-center">

    <img
      src="/all-drinks.jpg"
      alt="All Drinks"
      className="
        absolute bottom-8 right-24
        w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px]
        h-auto object-contain
        rounded-3xl shadow-2xl
        animate-fade-up
      "
      style={{ animationDelay: '0.4s' }}
    />

  </div>
</div>


      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Pure Goodness in Every Sip"
            description="At JandJ Foods, we believe in delivering nothing but the best. Our commitment to quality sets us apart."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12 stagger-children">
            <FeatureCard
              icon={<Leaf className="w-8 h-8" />}
              title="100% Fresh Ingredients"
              description="We source the freshest fruits directly from local farms. Every bottle captures nature's goodness."
              className="animate-fade-up opacity-0"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="No Harmful Preservatives"
              description="Our juices are free from artificial colors, flavors, and preservatives. Just pure, natural taste."
              className="animate-fade-up opacity-0"
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Delicious Natural Flavors"
              description="Experience authentic fruit flavors that refresh and energize. Taste the difference of real fruit."
              className="animate-fade-up opacity-0"
            />
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Products"
            title="Popular Drinks"
            description="Discover our most loved juices and beverages. Each one crafted with care and packed with flavor."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 stagger-children">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                className="animate-fade-up opacity-0"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Whether you're a retailer, distributor, or looking for bulk orders, 
            we'd love to work with you. Let's grow together!
          </p>
          <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
            <Link to="/distributors">Become a Distributor</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
