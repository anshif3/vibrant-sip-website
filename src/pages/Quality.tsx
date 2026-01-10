import { Leaf, Shield, Heart, CheckCircle, Award, Microscope } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

const Quality = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-light via-background to-orange-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Quality & Ingredients"
            title="Pure Ingredients, Pure Quality"
            description="At JandJ Foods, quality isn't just a promise - it's our foundation. Discover what goes into every bottle."
          />
        </div>
      </section>

      {/* Fresh Sourcing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&h=500&fit=crop"
                alt="Fresh fruit farm"
                className="rounded-3xl shadow-2xl w-full animate-fade-up"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                Farm Fresh
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Straight from the Orchard
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We partner directly with local farmers who share our passion for quality. 
                Our fruits are hand-picked at peak ripeness, ensuring maximum flavor and 
                nutritional value in every bottle.
              </p>
              <ul className="space-y-3">
                {[
                  "Locally sourced from trusted farms",
                  "Hand-picked at peak ripeness",
                  "Processed within 24 hours of harvest",
                  "No long-term cold storage",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Standards"
            title="Uncompromising Quality"
            description="We maintain the highest standards at every step of our production process."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 stagger-children">
            <FeatureCard
              icon={<Leaf className="w-8 h-8" />}
              title="No Artificial Colors"
              description="The vibrant colors in our juices come naturally from the fruits themselves."
              className="animate-fade-up opacity-0"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="No Preservatives"
              description="We use cold-pressing and pasteurization instead of chemical preservatives."
              className="animate-fade-up opacity-0"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="FSSAI Certified"
              description="All our products meet and exceed food safety standards set by FSSAI."
              className="animate-fade-up opacity-0"
            />
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Health Benefits"
            title="Nutrition in Every Sip"
            description="Our juices aren't just delicious - they're packed with vitamins and minerals your body needs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { label: "Vitamin C", value: "100%", desc: "Daily value per serving" },
              { label: "Natural Sugars", value: "0%", desc: "Added sugars" },
              { label: "Antioxidants", value: "High", desc: "Free radical fighters" },
              { label: "Fiber", value: "Good", desc: "Source of dietary fiber" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-card p-6 rounded-2xl shadow-md border border-border/50 text-center animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Quality Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Rigorous Testing at Every Step
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our quality control team performs multiple checks throughout the production 
                process to ensure every bottle meets our exacting standards.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    icon: <Microscope className="w-6 h-6" />,
                    title: "Laboratory Testing",
                    desc: "Every batch is tested for purity and nutrient content",
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Safety Checks",
                    desc: "Comprehensive microbiological testing for safety",
                  },
                  {
                    icon: <Heart className="w-6 h-6" />,
                    title: "Taste Testing",
                    desc: "Expert panels ensure consistent, delicious flavor",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 bg-card rounded-xl border border-border/50"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=500&fit=crop"
                alt="Quality testing"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">Our Certifications</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {["FSSAI Certified", "ISO 22000", "HACCP Compliant", "GMP Certified"].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 bg-secondary-foreground/10 px-6 py-3 rounded-full"
              >
                <Award className="w-5 h-5" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
