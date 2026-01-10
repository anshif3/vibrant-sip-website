import { Package, Box, Clock, MapPin, Truck, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";

const Packaging = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-light via-background to-green-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Packaging & Availability"
            title="Perfectly Packaged for Freshness"
            description="From convenient single servings to family-sized bottles, find the perfect size for every occasion."
          />
        </div>
      </section>

      {/* Bottle Sizes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Bottle Sizes"
            title="Choose Your Size"
            description="Our juices come in various sizes to suit your needs."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                size: "200ml",
                name: "On-the-Go",
                desc: "Perfect for lunchboxes and quick refreshment",
                price: "₹25 - ₹35",
                icon: "🥤",
              },
              {
                size: "500ml",
                name: "Personal Size",
                desc: "Ideal for personal consumption throughout the day",
                price: "₹40 - ₹55",
                icon: "🍾",
                popular: true,
              },
              {
                size: "1 Litre",
                name: "Family Pack",
                desc: "Great for sharing with family and friends",
                price: "₹70 - ₹95",
                icon: "🏠",
              },
            ].map((item, index) => (
              <div
                key={item.size}
                className={`relative bg-card p-8 rounded-3xl shadow-lg border border-border/50 text-center card-hover animate-fade-up opacity-0 ${
                  item.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-foreground mb-2">{item.size}</div>
                <div className="text-lg font-semibold text-primary mb-2">{item.name}</div>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <div className="text-xl font-bold text-secondary">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Packaging Types"
            title="Sustainable Options"
            description="Choose from our range of eco-friendly packaging options."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border/50 animate-fade-up">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">PET Bottles</h3>
              <p className="text-muted-foreground mb-4">
                Lightweight, shatter-resistant, and 100% recyclable. Our PET bottles are 
                perfect for everyday use and on-the-go refreshment.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Lightweight and portable
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  100% recyclable material
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  BPA-free and food-safe
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border/50 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Box className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Glass Bottles</h3>
              <p className="text-muted-foreground mb-4">
                Premium glass packaging that preserves freshness and taste. Ideal for 
                those who prefer an eco-conscious choice.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Premium look and feel
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Infinitely recyclable
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Preserves taste better
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shelf Life */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Storage Guidelines"
            title="Shelf Life & Storage"
            description="Keep your juices fresh with proper storage."
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-card rounded-3xl shadow-lg border border-border/50 overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Product Type</th>
                    <th className="text-left p-4 font-semibold text-foreground">Sealed</th>
                    <th className="text-left p-4 font-semibold text-foreground">After Opening</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Fruit Juices", sealed: "6 months", opened: "3-5 days (refrigerated)" },
                    { type: "Cold Drinks", sealed: "9 months", opened: "5-7 days (refrigerated)" },
                    { type: "Flavored Drinks", sealed: "6 months", opened: "3-5 days (refrigerated)" },
                  ].map((item, index) => (
                    <tr key={item.type} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">{item.type}</td>
                      <td className="p-4 text-muted-foreground">{item.sealed}</td>
                      <td className="p-4 text-muted-foreground">{item.opened}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-2xl flex gap-4 items-start">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Storage Tip</h4>
                <p className="text-muted-foreground text-sm">
                  Store in a cool, dry place away from direct sunlight. Once opened, 
                  refrigerate and consume within the recommended time for best taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Where to Buy"
            title="Find Us Near You"
            description="JandJ Foods juices are available across multiple channels."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Store className="w-8 h-8" />,
                title: "Retail Stores",
                desc: "Available in supermarkets and grocery stores across Kerala and South India.",
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Direct Delivery",
                desc: "Bulk orders delivered directly to your doorstep for businesses and events.",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Local Distributors",
                desc: "Connect with our network of authorized distributors in your area.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-2xl shadow-md border border-border/50 card-hover animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/distributors">Inquire About Bulk Orders</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packaging;
