import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://squareup.com/appointments/book/silver-bullet-barbershop";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold text-secondary-foreground tracking-wide">
          SILVER BULLET
        </button>

        <div className="hidden md:flex items-center gap-8">
          {["services", "gallery", "reviews", "location"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-silver hover:text-secondary-foreground transition-colors capitalize tracking-wider"
            >
              {id}
            </button>
          ))}
          <a href={`tel:0469371755`} className="text-silver hover:text-secondary-foreground transition-colors">
            <Phone className="w-4 h-4" />
          </a>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Online</a>
          </Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-secondary-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-border/20 px-4 py-4 space-y-3">
          {["services", "gallery", "reviews", "location"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left text-silver hover:text-secondary-foreground transition-colors capitalize tracking-wider text-sm py-2"
            >
              {id}
            </button>
          ))}
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Online via Square</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
