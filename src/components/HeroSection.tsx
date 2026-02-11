import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const BOOKING_URL = "https://squareup.com/appointments/book/silver-bullet-barbershop";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/80 via-slate-dark/70 to-slate-dark/90" />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <div className="flex items-center justify-center gap-1 mb-6 animate-fade-in-up">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 text-sm font-body text-silver tracking-wider">4.9 STAR RATED</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-secondary-foreground mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Precision Cuts.
          <br />
          <span className="text-gradient-silver">Local Craftsmanship.</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-silver max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Elizabeth Park's highest-rated barbershop, specializing in modern styles and traditional service.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold text-base px-8 py-6 shadow-lg shadow-primary/25">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Online via Square
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-silver/30 text-secondary-foreground hover:bg-secondary-foreground/10 font-body text-base px-8 py-6"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
