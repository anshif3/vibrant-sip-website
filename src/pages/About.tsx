import { Heart, Eye, Target, Users, Award, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-light via-background to-green-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="About Us"
            title="The JandJ Foods Story"
            description="From a small kitchen to your table - discover the passion and dedication behind every bottle of JandJ Foods juice."
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Started with a Simple Dream
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                JandJ Foods began with a simple belief: everyone deserves access to fresh, 
                natural, and delicious fruit juices. What started as a family passion in a 
                small kitchen has grown into a beloved brand trusted by thousands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to uphold the same values that defined us from day one - 
                quality ingredients, traditional recipes, and an unwavering commitment to 
                delivering the best to our customers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every bottle of JandJ Foods juice carries the legacy of our founders' vision: 
                to bring the authentic taste of fresh fruits to every household, without 
                compromising on nutrition or flavor.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=600&h=700&fit=crop"
                alt="Fresh fruits"
                className="rounded-3xl shadow-2xl w-full animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border/50 animate-fade-up">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide families with the freshest, most nutritious fruit beverages 
                while maintaining the highest standards of quality and hygiene. We strive 
                to make healthy refreshment accessible and enjoyable for everyone.
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border/50 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted and loved juice brand, known for our 
                commitment to quality, innovation, and sustainability. We envision a 
                future where every sip brings joy and nourishment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Values"
            title="What We Stand For"
            description="These core values guide everything we do at JandJ Foods."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 stagger-children">
            <FeatureCard
              icon={<Heart className="w-8 h-8" />}
              title="Freshness First"
              description="We never compromise on freshness. Our fruits are sourced daily and processed within hours."
              className="animate-fade-up opacity-0"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Quality Assured"
              description="Every batch undergoes rigorous quality checks to ensure you get only the best."
              className="animate-fade-up opacity-0"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Customer Focused"
              description="Your satisfaction is our priority. We listen, adapt, and continuously improve."
              className="animate-fade-up opacity-0"
            />
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Process"
            title="From Farm to Bottle"
            description="A glimpse into how we create our delicious juices."
          />

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              {/* Timeline Items */}
              {[
                {
                  step: "01",
                  title: "Sourcing",
                  description: "Fresh fruits sourced from trusted local farmers every morning.",
                },
                {
                  step: "02",
                  title: "Selection",
                  description: "Only the ripest, highest-quality fruits make the cut.",
                },
                {
                  step: "03",
                  title: "Processing",
                  description: "Cold-pressed and bottled in our state-of-the-art facility.",
                },
                {
                  step: "04",
                  title: "Quality Check",
                  description: "Every batch tested for purity, taste, and safety.",
                },
                {
                  step: "05",
                  title: "Delivery",
                  description: "Fresh juices delivered to stores and doorsteps.",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="relative flex gap-6 mb-8 last:mb-0 animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 z-10">
                    {item.step}
                  </div>
                  <div className="bg-card p-6 rounded-2xl shadow-md border border-border/50 flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
