import { Scissors, Sparkles, CircleDot, Flame, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Men's Cut",
    price: "$32 – $35",
    description: "Precision styles tailored to your look. Includes consultation, wash, and styling.",
  },
  {
    icon: Sparkles,
    title: "Beard Sculpting & Trim",
    price: "From $15",
    description: "Expert shaping, lining, and detailing for a sharp, clean finish.",
  },
  {
    icon: CircleDot,
    title: "Head Shave & Skin Fades",
    price: "From $30",
    description: "Smooth finishes and sharp transitions executed with care.",
  },
  {
    icon: Flame,
    title: "Hot Towel Service",
    price: "Add-on",
    description: "The classic barber experience for relaxation and comfort.",
  },
  {
    icon: GraduationCap,
    title: "Pensioner & Student Rates",
    price: "~$25",
    description: "Special pricing for seniors, pensioners, and students with valid ID.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold text-primary tracking-[0.2em] uppercase mb-3">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-5" />
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display text-xl font-semibold text-card-foreground">{service.title}</h3>
                <span className="text-sm font-body font-semibold text-primary ml-2 whitespace-nowrap">{service.price}</span>
              </div>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
