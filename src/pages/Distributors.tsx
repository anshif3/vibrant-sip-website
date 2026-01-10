import { useState } from "react";
import { Building2, Truck, Package, Users, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

const Distributors = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    deliveryArea: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link for bulk order
    const subject = encodeURIComponent(`Bulk Order Inquiry from ${formData.companyName}`);
    const body = encodeURIComponent(
      `Company Name: ${formData.companyName}\nContact Person: ${formData.contactPerson}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDelivery Area: ${formData.deliveryArea}\nEstimated Monthly Quantity: ${formData.quantity}\n\nAdditional Details:\n${formData.message}`
    );
    
    window.location.href = `mailto:ashrafthekkunpurath@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening email client...",
      description: "Your default email app will open with the inquiry ready to send.",
    });

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-light via-background to-green-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Distributors & Bulk Orders"
            title="Partner with JandJ Foods"
            description="Join our growing network of distributors and retailers. Let's build a refreshing partnership together!"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Why Partner With Us"
            title="Benefits of Being a Distributor"
            description="Join the JandJ Foods family and enjoy exclusive benefits."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 stagger-children">
            <FeatureCard
              icon={<Package className="w-8 h-8" />}
              title="Premium Products"
              description="Distribute high-quality juices that customers love and trust."
              className="animate-fade-up opacity-0"
            />
            <FeatureCard
              icon={<Truck className="w-8 h-8" />}
              title="Reliable Supply"
              description="Consistent supply chain with on-time deliveries guaranteed."
              className="animate-fade-up opacity-0"
            />
            <FeatureCard
              icon={<Building2 className="w-8 h-8" />}
              title="Marketing Support"
              description="Point-of-sale materials and promotional support included."
              className="animate-fade-up opacity-0"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Dedicated Support"
              description="Personal account manager for all your business needs."
              className="animate-fade-up opacity-0"
            />
          </div>
        </div>
      </section>

      {/* Order Tiers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Bulk Pricing"
            title="Minimum Order Quantities"
            description="Flexible order options to suit businesses of all sizes."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {[
              {
                tier: "Starter",
                quantity: "100+ cases",
                discount: "10%",
                features: ["Standard delivery", "Basic marketing kit", "Email support"],
              },
              {
                tier: "Business",
                quantity: "500+ cases",
                discount: "15%",
                features: ["Priority delivery", "Premium marketing kit", "Phone support", "Quarterly reviews"],
                popular: true,
              },
              {
                tier: "Enterprise",
                quantity: "1000+ cases",
                discount: "20%",
                features: ["Express delivery", "Full marketing suite", "Dedicated manager", "Custom terms"],
              },
            ].map((item, index) => (
              <div
                key={item.tier}
                className={`relative bg-card p-8 rounded-3xl shadow-lg border border-border/50 animate-fade-up opacity-0 ${
                  item.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{item.tier}</h3>
                <div className="text-3xl font-bold text-primary mb-1">{item.quantity}</div>
                <div className="text-secondary font-semibold mb-6">{item.discount} discount</div>
                <ul className="space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Coverage"
            title="Delivery Areas"
            description="We currently serve the following regions with plans to expand."
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              "Kerala",
              "Tamil Nadu",
              "Karnataka",
              "Andhra Pradesh",
              "Telangana",
              "Maharashtra",
              "Goa",
              "More coming soon...",
            ].map((area, index) => (
              <div
                key={area}
                className="bg-card p-4 rounded-xl text-center border border-border/50 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className={`font-medium ${area.includes("soon") ? "text-muted-foreground" : "text-foreground"}`}>
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SectionHeader
              subtitle="Get Started"
              title="Bulk Order Inquiry"
              description="Fill out the form below and our team will get back to you within 24 hours."
            />

            <form onSubmit={handleSubmit} className="mt-12 space-y-6 animate-fade-up">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    placeholder="Your company name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person *</Label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    placeholder="Your name"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="deliveryArea">Delivery Area *</Label>
                  <Input
                    id="deliveryArea"
                    name="deliveryArea"
                    placeholder="City/Region"
                    value={formData.deliveryArea}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Monthly Quantity</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, quantity: value }))}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-250">100 - 250 cases</SelectItem>
                      <SelectItem value="250-500">250 - 500 cases</SelectItem>
                      <SelectItem value="500-1000">500 - 1000 cases</SelectItem>
                      <SelectItem value="1000+">1000+ cases</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business and requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="rounded-full px-8 w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Submit Inquiry <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Distributors;
